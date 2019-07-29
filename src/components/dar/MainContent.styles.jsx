import styled from 'styled-components'
import { mediumAndUp } from '../../utils/mediaQueries'

export const Image = styled.img`
  border-radius: 20px;
  height: 200px;
  width: 200px;
`

export const ImageWrapper = styled.span`
  display: block;
  padding-left: 3rem;
  padding-top: 3rem;

  ${mediumAndUp`
    display: inline-block;
  `}
`

export const Wrapper = styled.div`
  background-color: white;

  ${mediumAndUp`
    display: flex;
  `}
`