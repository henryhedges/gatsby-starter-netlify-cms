import React from 'react'
import { Image, ImageWrapper, Wrapper } from './MainContent.styles'

class MainContent extends React.Component {
  defaultProps = {
    content: null
  }

  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image
            alt={'Image'}
            src={this.props.image}
          />
        </ImageWrapper>
        { this.props.content }
      </Wrapper>
    )
  }
}

export default MainContent
