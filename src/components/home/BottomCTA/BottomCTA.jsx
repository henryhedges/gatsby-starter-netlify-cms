import React from 'react'
import { ATagButton1 } from '../../button/Button.styles'
import { BottomCTATitle, BottomCTAWrapper } from './BottomCTA.styles'
/**
 * 
 * COmponent not used anymore
 */
const BottomCTA = ({
  button_text,
  link,
  text
}) => {
  return (
    <BottomCTAWrapper>
      <BottomCTATitle>{text}</BottomCTATitle>
      <ATagButton1 href={link}>{button_text}</ATagButton1>
    </BottomCTAWrapper>
  )
}

export default BottomCTA
