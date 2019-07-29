import styled from 'styled-components'

export const LogoImg = styled.img`

`

export const LogosTitle = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
`

export const Logo = styled.span`
  width: 150px;
  height: 115px;

  background-image: url(${({ imageUrl }) => imageUrl });
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & :not(:last-child) {
    margin-right: 1.5rem;
  }
`

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const LogosWrapper = styled.div`
  padding: 2.5rem 3rem;
`
