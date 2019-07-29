import { css } from 'styled-components'
import { mediumAndUp } from '../utils/mediaQueries'

export const heightStyle1 = css`
  height: 20vh;
  min-height: 250px;
  max-height: 500px;
  ${mediumAndUp`
    min-height: 300px;
  `}
`