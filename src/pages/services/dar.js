import React from "react"
import Layout from 'components/layout/PageLayout'
import MainImage from 'components/mainImage/MainImage'
import MainBodyContent from 'components/mainBodyContent/MainBodyContent'
import MainContent from 'components/dar/MainContent'
import CTA from 'components/cta/CTA'
import Services from 'components/dar/Services'
import { heightStyle1 } from '../../utils/constants'

export default ({
  data
}) => {
  const {
    content,
    cta,
    dar_img,
    masthead,
    services
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <MainImage 
        {...masthead}
        height={heightStyle1}
      />
      <MainContent
        image={dar_img}
        content={<MainBodyContent {...content}/>}
      />
      <Services services={services}/>
      <CTA {...cta}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath:{regex: "/site\/dar.md/"}) {
      frontmatter {
        content {
          paragraph
          title
        }
        cta {
          button_text
          link
          text
        }
        dar_img
        masthead {
          image
          title
        }
        services {
          service
        }
      }
    }
  }
`