const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;

	return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()));
			return Promise.reject(result.errors);
		}

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(edge => {
			const {id} = edge.node;
			createPage({
				path: edge.node.fields.slug,
				// Need to setup tags next, commented out for now.
				// tags: edge.node.frontmatter.tags,
				component: path.resolve(
					'src/templates/blog-post.js'
				),
				// Additional data can be passed via context
				context: {
					id
				}
			});
		});
	});
};

exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({node, getNode});
		createNodeField({
			name: 'slug',
			node,
			value
		});
	}
};
