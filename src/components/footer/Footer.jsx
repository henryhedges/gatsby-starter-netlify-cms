import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import {
  FooterContent,
  FooterContentItem,
  FooterLink,
  FooterWrapper
} from './Footer.styles'

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath:{regex: "/meta/other.md/"}) {
            frontmatter {
              contact
            }
          }
        }
      `}
      render={({ markdownRemark: { frontmatter: { contact }}}) => {
        return (
        <FooterWrapper>
          <FooterContent>
            <FooterContentItem>
              <FooterLink href='/'>Pickering Aviation</FooterLink>
            </FooterContentItem>
            <FooterContentItem>
              <div>Pickering Aviation Inc. Dallas Texas</div> 
              <div>
                <FooterLink href='https://hedgesdigital.com' target='_blank'>Site created and maintained by Hedges Digital</FooterLink>
              </div>
            </FooterContentItem>
            <FooterContentItem>
              <FooterLink href={contact}>Contact</FooterLink>
            </FooterContentItem>
          </FooterContent>
        </FooterWrapper>
        )
      }}
    />
  )
}

export default Footer
