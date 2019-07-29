import React from 'react'
import {
  Container,
  Title,
  Wrapper
} from './MainBodyContent.styles'

const MainBodyContent = ({ 
  paragraph = '',
  title 
}) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Container dangerouslySetInnerHTML={{__html: paragraph}}/>
    </Wrapper>
  )
}

export default MainBodyContent
