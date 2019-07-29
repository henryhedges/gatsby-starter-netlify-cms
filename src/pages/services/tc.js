import React from "react"
import Layout from 'components/layout/PageLayout'
import MainImage from 'components/mainImage/MainImage'
import MainBodyContent from 'components/mainBodyContent/MainBodyContent'
import CTA from 'components/cta/CTA'
import CTAWithImage from 'components/cta/CTAWithImage'
import AdditionalAircraftServices from 'components/tc/AdditionalAircraftServices'
import { graphql } from "gatsby"
import { heightStyle1 } from '../../utils/constants'

const TCPage = ({
  data
}) => {
  const {
    additional_services,
    content,
    cta,
    cta_bg_image,
    masthead
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <MainImage 
        {...masthead}
        height={heightStyle1}
      />
      <MainBodyContent {...content}/>
      <CTA {...cta}/>
      <AdditionalAircraftServices services={additional_services}/>
      <CTAWithImage {...cta_bg_image}/>
    </Layout>
  )
}

export default TCPage

export const pageQuery = graphql`
query {
  markdownRemark(fileAbsolutePath:{regex: "/site\/tc.md/"}) {
    frontmatter {
      additional_services {
        service
      }
      content {
        paragraph
        title
      }
      cta {
        button_text
        link
        text
      }
      cta_bg_image {
        button_text
        image
        link
        text
      }
      masthead {
        image
        title
      }
    }
  }
}
`