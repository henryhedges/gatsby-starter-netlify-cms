import React from "react"
import Layout from 'components/layout/PageLayout'
import MainImage from 'components/mainImage/MainImage'
import MainBodyContent from 'components/mainBodyContent/MainBodyContent'
import BlackEnvelope from 'components/pma/BlackEnvelope'
import { heightStyle1 } from '../../utils/constants'

import { graphql } from "gatsby"

const PMAPage = ({
  data
}) => {
  const {
    black_envelope,
    content,
    masthead
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <MainImage 
        {...masthead}
        height={heightStyle1}
      />
      <BlackEnvelope {...black_envelope}/>
      <MainBodyContent {...content}/>
    </Layout>
  )
}

export default PMAPage

export const pageQuery = graphql`
query {
  markdownRemark(fileAbsolutePath:{regex: "/site\/pma.md/"}) {
    frontmatter {
      content {
        paragraph
        title
      }
      black_envelope {
        content
        button {
          link
          text
        }
      }
      masthead {
        image
        title
      }
    }
  }
}
`