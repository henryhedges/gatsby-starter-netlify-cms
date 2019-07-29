import styled from 'styled-components'

export const MainBanner = styled.section`
  align-items: center;
  background: black;
  color: white;
  display: flex;
  height: 200px;
  padding-left: 3rem;
`

export const Wrapper = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`

export const BodyTitle = styled.h2`
  border-bottom: 1px solid #cccfd2;
  padding-bottom: 3rem;
  margin-bottom: 0;
`

export const PartTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

export const PartId = styled.div`
  font-size: 1rem;
`

export const PartLink = styled.a`
  display: inline;
`

export const ImageWrapper = styled.span`
  background-image: url(${({ url }) => url });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: inline-block;
  float: left;
  height: 150px;
  width: 150px;
  margin-right: 2rem;
`

export const List = styled.ul``

export const ListItem = styled.li`
  font-size: 1.5rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  margin-bottom: 0;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #cccfd2;
  }
`

export const PartListItem = styled(ListItem)`
  display: inline-block;
`

export const ListWrapper = styled.div``