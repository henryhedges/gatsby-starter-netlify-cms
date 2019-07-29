import styled, { css } from 'styled-components'
import { lighten } from 'polished'

const defaultTextColor = 'black'
const defaultBackgroundColor = '#ffc107'

export const ATagButton1 = styled.a`
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  padding: 10px;
  position: relative;

  ${({ 
    backgroundColor = defaultBackgroundColor,
    borderColor = 'black',
    noWrap = false,
    textColor = defaultTextColor,
    hoverBackgroundColor = null,
    hoverTextColor = null
  }) => css`
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    color: ${textColor};
    ${noWrap && 'white-space: nowrap;'}

    &:hover {
      ${ hoverBackgroundColor 
          ? `background-color: ${hoverBackgroundColor};`
          : `background-color: ${lighten(.1, backgroundColor)};`
      }
      color: ${hoverTextColor || textColor};
      text-decoration: none;
      transform: scale(1.025);
      transition: scale 100ms ease;
    }
  `}
`