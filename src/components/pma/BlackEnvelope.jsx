import React from 'react'
import { ATagButton1 } from 'components/button/Button.styles'
import { Container, Wrapper } from './BlackEnvelope.styles'

const BlackEnvelope = ({
  content,
  button
}) => {
  return (
    <Wrapper>
      <Container dangerouslySetInnerHTML={{ __html: content }}/>
      <ATagButton1 href={button.link}>{button.text}</ATagButton1>
    </Wrapper>
  )
}

export default BlackEnvelope
