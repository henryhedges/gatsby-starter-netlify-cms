import React from 'react';

import { MastHeadImage, MastHeadText, MastHeadWrapper } from './MastHead.styles'

const MastHead = ({ 
  image,
  text
}) => {
  return (
    <MastHeadWrapper>
      <MastHeadText>{text}</MastHeadText>
      <MastHeadImage src={image}/>
    </MastHeadWrapper>
  )
}

export default MastHead