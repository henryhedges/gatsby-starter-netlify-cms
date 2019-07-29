import React from 'react'
import { BodyTitle, ContentWrapper, MainBanner, Wrapper } from './Parts.styles'

const Parts = ({
  bodyTitle,
  children
}) => {
  return (
    <>
      <MainBanner>
        <h1>Parts</h1>
      </MainBanner>
      <Wrapper>
        <BodyTitle>{bodyTitle}</BodyTitle>
        {children}
      </Wrapper>
    </>
  )
}

export default Parts