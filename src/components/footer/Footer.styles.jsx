import styled from 'styled-components'
import { mediumAndUp } from '../../utils/mediaQueries'
import { siteWidth } from 'components/layout/PageLayout.styles'


export const FooterWrapper = styled.footer`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const FooterContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  max-width: ${siteWidth};
  width: 100%;

  ${mediumAndUp`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  `}
`

export const FooterContentItem = styled.span`
  :not(:last-child){
    padding-right: .5rem;
  }
`

export const FooterLink = styled.a`
  color: white;
`
