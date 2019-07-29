import styled, {css} from 'styled-components'
import { clearFix } from 'polished'
import { breakpoints } from '../../../utils/breakpoints'
import { makeMaxMediaQuery } from '../../../utils/mediaQueries'

const lightGray = '#f1f3f7'
const upToMedium = makeMaxMediaQuery(breakpoints.md - 1)

export const ClearFix = styled.div`
  ${clearFix()}
`

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

export const ServiceTitle = styled.h2`
  font-weight: 700;
  ${lineAfterTitle}
`

export const Text = styled.div`
  ol, ul {
    list-style: initial;
    padding-left: 2rem;
    margin-top: 1rem;
  }

  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`

export const FadeBannerTextContainer = styled.div`
  padding-bottom: 2.5rem;
  padding-left: 2.5rem;
  padding-top: 2.5rem;
  // width: 50%;
  width: 48%;
  ${({ gradient }) => gradient === 'right' && 'float: right;'}

  :nth-child(odd) {
    padding-right: 2.5rem;
  }
`

export const FadeBannerWrapper = styled.section`
  position: relative;
  z-index: 0;

  :before {
    content: '';
    background-image: url(${({ image }) => image });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    // width: 50%;
    width: 52%;
    z-index: -2;
    ${({ gradient }) => gradient === 'right' ? 'left' : 'right'}: 0;
  }

  :after {
    content: '';
    background-color: transparent; /* For browsers that do not support gradients */
    // background-image: linear-gradient(${({ gradient }) => gradient === 'right' ? '-' : ''}90deg, ${lightGray} 57% ,transparent, 89%,transparent); /* Standard syntax (must be last) */
    // linear-gradient(90deg,#f1f3f7 49%,transparent,74%,transparent)
    background-image: linear-gradient(${({ gradient }) => gradient === 'right' ? '-' : ''}90deg, ${lightGray} 49%, transparent, 74%,transparent); /* Standard syntax (must be last) */
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  ${upToMedium`
    padding-right: 2rem;

    :before {
      width: 100%;
    }

    :after {
      background-color: #f1f3f7;
      background-image: none;
      opacity: 0.9;
    }

    :nth-child(even) {
      &:after {
        background-color: #dedede;
      }
    }

    ${FadeBannerTextContainer} {
      width: 100%;
      text-align: center;

      li {
        list-style: none;
        padding-left: 0;
      }
    }

    ${ServiceTitle} {
      :after {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `}
`

/**
 * linear-gradient(-90deg, #f1f3f7 54%, transparent, 89%, transparent);
 */