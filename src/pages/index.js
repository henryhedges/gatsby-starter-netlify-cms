import React from 'react'
import Layout from 'components/layout/PageLayout'
import MastHead from 'components/home/MastHead/MastHead'
import MainImage from 'components/mainImage/MainImage'
import FadeBanner from 'components/home/FadeBanner/FadeBanner'
import CTAWithImage from 'components/cta/CTAWithImage'
import { graphql } from "gatsby"

const Home = ({
  data
}) => {
  const {
    cta_bg_image,
    main_banner,
    masthead,
    services
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <MastHead {...masthead}/>
      <MainImage {...main_banner}/>
      {
        services.map((service, idx) => {
          return (
            <FadeBanner 
              {...service} 
              gradient={ idx % 2 ? "right" : "left"} 
              key={service.service}
            />
          )
        })
      }
      <CTAWithImage {...cta_bg_image}/>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
query {
  markdownRemark(fileAbsolutePath:{regex: "/home.md/"}) {
		frontmatter {
      cta_bg_image {
        button_text
        link
        image
        text
      }
			main_banner {
				text
        title
        image
        button_text
        link
      }
      masthead {
        image
        text
      }
			services {
			  link
			  button_text
        description
			  image
			  service
        service_subheading
			}
		}
  }
}
`
