import styled, { createGlobalStyle, css } from 'styled-components'

export const navSize = '66px';
export const frameHeight = `height: calc(100vh - ${navSize});`
export const siteWidth = '1366px';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${navSize};
  max-width: ${siteWidth};
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: Arial, sans-serif;
  }

  #___gatsby {
    height: 100%;
    width: 100%;

    & > div {
      background-color: #A1A1A1;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }

  br {
    content: '';
    display: block;
    margin-bottom: 1rem;
  }

  p.large {
    font-size: 1.25rem;
  }
`
