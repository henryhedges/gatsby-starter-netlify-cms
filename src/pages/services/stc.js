import React from "react"
import Layout from 'components/layout/PageLayout'
import MainImage from 'components/mainImage/MainImage'
import MainBodyContent from 'components/mainBodyContent/MainBodyContent'
import CTA from 'components/cta/CTA'
import { heightStyle1 } from '../../utils/constants'

import { graphql } from "gatsby"

const STCPage = ({
  data
}) => {
  const {
    content,
    cta,
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
    </Layout>
  )
}

export default STCPage

export const pageQuery = graphql`
query {
  markdownRemark(fileAbsolutePath:{regex: "/site\/stc.md/"}) {
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
      masthead {
        image
        title
      }
    }
  }
}
`