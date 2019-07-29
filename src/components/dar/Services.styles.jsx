import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: lightgray;
  padding: 2rem 3rem;
  text-align: center;
`

export const Title = styled.h2`
  margin-bottom: 2rem;
`

export const ServicesList = styled.ul`

`

export const ServicesListItem = styled.li`
  border-top: 1px solid black;
  font-weight: 600;
  padding-bottom: 1rem;
  padding-top: 1rem;
  
  & :last-child {
    border-bottom: 1px solid black;
  }
`