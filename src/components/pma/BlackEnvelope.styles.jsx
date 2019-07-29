import styled from 'styled-components'

export const Wrapper = styled.section`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3rem;
`

export const Container = styled.div`
  align-text: center;
  color: white;

  h2 {
    margin-bottom: 2rem;

    br {
     margin-bottom: .5rem; 
    }
  }

  ul, ol {
    max-width: 500px;
    text-align: left;
    margin-bottom: 2rem;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }
`