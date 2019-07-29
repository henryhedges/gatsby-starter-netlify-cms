import React from 'react'
import { WithImageTitle, WithImageWrapper } from './CTA.styles'
import { ATagButton1 } from 'components/button/Button.styles'

const CTAWithImage = ({
  button_text,
  image,
  link,
  text
}) => {
  return (
    <WithImageWrapper image={image}>
      <WithImageTitle>{text}</WithImageTitle>
      <ATagButton1 href={link}>{button_text}</ATagButton1>
    </WithImageWrapper>
  )
}

export default CTAWithImage