import React from 'react'
import { LogosWrapper, Logo, LogosTitle, LogosContainer } from './Logos.styles'

const Logos = ({ logos = [], logos_title = '' }) => {
  return (
    <LogosWrapper>
      {logos_title && <LogosTitle>{logos_title}</LogosTitle>}
      <LogosContainer>
        { logos && logos.map(({ logo_img }) => {
            return (
              <Logo key={logo_img} imageUrl={logo_img}>
                {/* <img src={logo_img}/> */}
              </Logo>
            )
          })
        }
      </LogosContainer>
    </LogosWrapper>
  )
}

export default Logos