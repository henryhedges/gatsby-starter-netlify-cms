import styled, { css } from 'styled-components'
import { mediumAndUp } from '../../utils/mediaQueries'

export const lineAfterTitle = css`
  &:after {
    content: '';
    width: 15%;
    min-width: 100px;
    height: 1px;
    border-bottom: 3px solid black;
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const largeLineAfterTitle = css`
  &:after {
    content: '';
    width: 15%;
    min-width: 200px;
    height: 1px;
    border-bottom: 3px solid black;
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const titleSizes = {
  large: '3rem',
  normal: '2.5rem'
} 

export const Title = styled.h1`
  font-size: ${({ titleSize }) => titleSizes[titleSize]};
  position: relative;

  ${largeLineAfterTitle}

  ${mediumAndUp`
    
  `}
`

export const Text = styled.p`
  position: relative;
`

export const MainImageSection = styled.section`
  background-image: url(${({ imageUrl }) => imageUrl });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  padding: 1rem 2rem;
  position: relative;

  ${mediumAndUp`
    padding: 2rem 3rem;
  `}

  ${({ height }) => {
    if (typeof height === 'number') {
      return `min-height: ${height}px;` 
    } else if (typeof height !== 'undefined') {
      return css`${height}`
    }
    return
  }}

  ${({
    titleAndImage
  }) => {
    if (titleAndImage) {
      return `
        align-items: center;
        display: flex;
        
        ${Title} {
          font-size: 36px;
          font-weight: 600;
        }

        @media (min-width: 768px){
          ${Title} {
            font-size: 50px;
          }
        }
      `
    }

    return `
      ${Title} {
        font-size: 1.75rem;
        font-weight: 600;

        &:after {
          content: '';
          width: 15%;
          min-width: 100px;
          height: 1px;
          border-bottom: 3px solid black;
          display: block;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      }
    `
  }}

  ${({ imageOnly }) => !imageOnly && css`& :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .75;
        background-color: white;
      }`
    }
`