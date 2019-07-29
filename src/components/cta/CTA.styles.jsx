import styled from 'styled-components'
import { mediumAndUp } from '../../utils/mediaQueries'

export const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;

  ${mediumAndUp`
    margin-bottom: 0;
    margin-right: 2rem;
  `}
`

export const Wrapper = styled.section`
  background-color: #ffc107;
  text-align: center;
  padding: 2rem;

  ${mediumAndUp`
    align-items: center;
    display: flex;
    justify-content: space-around;
  `}
`

export const WithImageWrapper = styled.section`
  align-items: center;
  background-image: url(${({ image }) => image || ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
`

export const WithImageTitle = styled.h2`
  color: white;
  margin-bottom: 3rem;
  font-size: 1.5rem;
`