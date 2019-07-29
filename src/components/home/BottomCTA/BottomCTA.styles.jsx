import styled from 'styled-components'

export const BottomCTAWrapper = styled.section`
  align-items: center;
  background-image: url(${({ imageUrl = 'https://via.placeholder.com/700x600?text=Placeholder+Image' }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
`

export const BottomCTATitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 2rem;
`
