import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  background-color: white;
  padding: 2rem 2.5rem;
  flex-grow: 1;
`

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`

export const Container = styled.div`
  ul {
    list-style: initial;
    padding-left: 2rem;

    li {
      margin-bottom: 1rem;

      > :first-child em {
        font-style: italic;
      }
    }
  }
`
