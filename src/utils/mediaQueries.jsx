import { css } from 'styled-components'
import { breakpoints } from './breakpoints'

export const makeMinMediaQuery = (size) => {
  return (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `
}

export const makeMaxMediaQuery = (size) => {
  return (...args) => css`
    @media (max-width: ${size}px) {
      ${css(...args)}
    }
  `
}

export const extraSmallAndUp = makeMinMediaQuery(breakpoints.xs)
export const smallAndUp = makeMinMediaQuery(breakpoints.sm)
export const mediumAndUp = makeMinMediaQuery(breakpoints.md)
export const largeAndUp = makeMinMediaQuery(breakpoints.lg)
export const extraLargeAndUp = makeMinMediaQuery(breakpoints.xl)

export const upToSmall = makeMaxMediaQuery(breakpoints.sm - 1)
export const upToMedium = makeMaxMediaQuery(breakpoints.md - 1)