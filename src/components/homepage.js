import React from 'react';
import blogList from './blog-list';
import '../sass/homepage.scss';

function Homepage(props) {
	return (
		<div>
			<div className="header">
				<h2>Hi! I'm Lynn</h2>
				<h4>and I write about stuff. Please check it out!</h4>
			</div>
			<div className="homepage-container">
				<div className="homepage-list">
					<blogList />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
