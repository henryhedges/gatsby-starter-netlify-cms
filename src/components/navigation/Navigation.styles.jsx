import styled, { createGlobalStyle } from 'styled-components'
import { navSize } from '../layout/PageLayout.styles'
import { breakpoints } from '../../utils/breakpoints'
import { makeMaxMediaQuery, smallAndUp, mediumAndUp } from '../../utils/mediaQueries'

// const navColor = '#404040'
const navColor = 'black'

export const NavTitle = styled.span`
  display: none;
  padding-left: .5rem;

  ${smallAndUp`
    display: inline;
  `}
`

export const Header = styled.header`
  position: relative;

  .navbar {
    background-color: ${navColor};
    border-bottom: 1px solid #404040;
    height: ${navSize};
    padding: 0 1rem;

    .dropdown-menu {
      background-color: ${navColor};
      border: none;
      border-radius: 0;

      .dropdown-item {
        color: white;
        
        &:hover {
          color: black;
        }
      }
    }

    a.nav-link {
      color: white;
    }

    .navbar-collapse {
      height: 100%;

      .navbar-nav {
        height: 100%;

        .nav-item {
          &:hover {
            background-color: white;

            a.nav-link {
              color: black;
            }
          }
        }
      }
    }

    ${makeMaxMediaQuery(breakpoints.md - 1)`
      &.navbar-expand-md {
        .navbar-collapse.collapse, .navbar-collapse.collapsing {
          background-color: ${navColor};
          display: block;
          height: initial;
          left: 0px;
          position: absolute;
          top: 66px;
          width: 100%;
        }
    
        .navbar-collapse.collapse:not(.show) {
          height: 0;
          overflow: hidden;
        }

        .nav-item {
          padding: 0;

          &:last-child .nav-link {
            padding-bottom: 1rem;
          }
        }

        .nav-link {
          padding-top: .5rem;
          padding-bottom: .5rem;
          padding-left: 2rem;

          &:is(:last-child) {
            margin-bottom: 1rem;
          }
        }

        .dropdown-item {
          padding-left: 3rem;
        }
      }
    `}

    ${mediumAndUp`
      .nav-item {
        align-items: center;
        display: flex;
      }
    `}
  }
`
