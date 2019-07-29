import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: white;
  padding: 2rem 3rem;
`

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`

export const List = styled.ul`
  font-size: 2rem;
  font-weight: 600;
  list-style: disc;
  padding-left: 0;
  max-width: 750px;
  margin: auto;

  @media (min-width: 650px) {
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
  }
`

export const ListItem = styled.li`
  list-style-position: inside;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`