import styled, { css } from 'styled-components'
import { Wrapper } from './Parts.styles'
import { Carousel } from 'react-responsive-carousel'
import { makeMinMediaQuery, largeAndUp, mediumAndUp, smallAndUp } from '../../utils/mediaQueries'

const halfSplit = css`
  display: inline-block;
  width: 100%;
  vertical-align: top;

  ${mediumAndUp`
    width: 50%;
  `}
`

const halfSplitWithQuery = css`
  ${largeAndUp(halfSplit)}
`

const customAndUp = makeMinMediaQuery(1000)

export const ContentWrapper = styled(Wrapper)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`

export const TitleWrapper = styled.section`
  margin-bottom: 2rem;
`

export const DescriptionWrapper = styled.section`
`

export const Title = styled.h1`
  font-size: 2.5rem;
`
export const Bold = styled.span`
  font-weight: bold;
`

export const ContactSpan = styled(Bold)`
  display: block;

  ${smallAndUp`
    float: right;
  `}
`

export const MainHalfWidth = styled.div`
  ${customAndUp`
    ${halfSplit}
  `}
`

export const StyledCarousel = styled(Carousel)`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`
export const PartNumber = styled.div`
  margin-bottom: 1rem;
`

export const AvailabilityButtonWrapper = styled.div`
  margin-bottom: 1rem;
`
export const Availability = styled.div`
  ${customAndUp`
    ${halfSplit}
  `}
`
export const Variations = styled.div``
export const Description = styled.div`
  > p {
    margin: 0;
    padding: 0;
  }

  margin-bottom: 2rem;
`
export const List = styled.ul`
  list-style: initial;
  ${halfSplit}
`
export const ListItem = styled.li`
  margin-left: 1.5rem;
`

export const MainWrapper = styled.section`
  ${customAndUp`
    ${MainHalfWidth} {
      &:first-child {
        padding-right: 3rem;
      }
    }
  `}
`