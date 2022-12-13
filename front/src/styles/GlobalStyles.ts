import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.fontDefault};
    transition: 0.3s;
  }
  main {
    padding: 20px;
    display: flex;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: #505050;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #f0f0f0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #c8c8c8;
  }
  @media(max-width: 800px) {
    main {
      padding: 5px;
    }
  }
`;
