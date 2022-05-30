import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f9f4ed",
  fontColor: "#2a2a2a",
  transition: 'opacity 2s linear',
  border: '.5px solid #2a2a2a',
};

export const darkTheme = {
  body: "#2a2a2a",
  fontColor: "#eaeaea",
  transition: 'opacity 2s linear',
  border: '.5px solid #eaeaea',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${(props) => props.theme.body};
	}
  a{
    color: ${(props) => props.theme.fontColor};
  }
  .chip > p{
    border: ${(props) => props.theme.border};
  }
`;
