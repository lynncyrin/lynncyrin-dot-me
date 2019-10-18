import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Footer from "./footer"
import Nav from "./nav"
import useSiteMetadata from './SiteMetadata'
import "../sass/post.scss"

const TemplateWrapper = ({children}) =>{
  const { title, description} = useSiteMetadata()
  return (
    <div className = "layoutWrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Image is WIP, so this aspect of react-helmet will be commented out for now */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        /> */}
      </Helmet>
      <Nav/>
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
