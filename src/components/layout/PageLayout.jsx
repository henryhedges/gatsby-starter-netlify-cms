import React from 'react'
import { 
  GlobalStyle,
  LayoutWrapper, 
  Main 
} from './PageLayout.styles'
import Helment from 'react-helmet'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'
import { StaticQuery, graphql } from "gatsby"
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteMeta {
          markdownRemark(fileAbsolutePath:{regex: "/meta/data.md/"}) {
            frontmatter {
              alt
              logo
              title
              description
            }
          }
        }
      `}
      render={({ markdownRemark: { frontmatter: data }}) => {
        const {
          description,
          title,
        } = data

        return (
        <>
          <Helment>
            <title>{title}</title>
            <meta name="description" content={description}/>
          </Helment>
          <GlobalStyle/>
          <LayoutWrapper>
            <Navigation data={data}/>
            <Main>
              {children}
            </Main>
            <Footer/>
          </LayoutWrapper>
        </>
      )}}
    />
  )
}

export default Layout
