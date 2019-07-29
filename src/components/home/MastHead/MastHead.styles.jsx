import styled from 'styled-components'
import { frameHeight } from '../../layout/PageLayout.styles'
import { smallAndUp, mediumAndUp, largeAndUp } from '../../../utils/mediaQueries'

export const MastHeadWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  ${frameHeight}
  justify-content: center;
  position: relative;
  width: 100%;
`

export const MastHeadImage = styled.img`
  height: 100%;
  position: absolute;
  min-height: 200px;
  max-height: 300px;
  width: auto;
  z-index: 0;

  ${smallAndUp`
    min-height: 300px;
    max-height: 400px;
  `}
  ${mediumAndUp`
    min-height: 500px;
    max-height: 700px;
  `}
`

export const MastHeadText = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
  word-spacing: 100vw;
  z-index: 1;

  ${smallAndUp`
    font-size: 76px;
  `}

  ${mediumAndUp`
    font-size: 100px;
  `}
`