import React from "react"
import Layout from 'components/layout/PageLayout'
import { TextContainer } from 'components/about/About.styles.jsx'
import MainImage from 'components/mainImage/MainImage'
import Logos from 'components/about/Logos/Logos'
import { heightStyle1 } from '../utils/constants'

const About = ({
  data
}) => {
  const {
    logos,
    logos_title,
    masthead,
    title,
    text
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <MainImage 
        {...masthead} 
        height={heightStyle1} 
        imageOnly={true}
      />
      <TextContainer>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: text }}/>
      </TextContainer>
      <Logos logos={logos} logos_title={logos_title}/>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath:{regex: "/about.md/"}) {
      frontmatter {
        logos {
          company
          link
          logo_img
        }
        logos_title
        masthead {
          image
          title
        }
        text
        title
      }
    }
  }
`