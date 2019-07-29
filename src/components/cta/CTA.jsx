import React from 'react'
import { ATagButton1 } from 'components/button/Button.styles'
import { Text, Wrapper } from './CTA.styles'

const CTA = ({ 
  button_text,
  link,
  text
}) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <ATagButton1 
        href={link} 
        backgroundColor='#343a40'
        noWrap={true}
        textColor='white'
      >
        {button_text}
      </ATagButton1>
    </Wrapper>
  )
}

export default CTA