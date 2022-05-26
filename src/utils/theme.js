import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f9f4ed",
  fontColor: "#2a2a2a",
};

export const darkTheme = {
  body: "#2a2a2a",
  fontColor: "#eaeaea",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${(props) => props.theme.body};
	}
`;

// background: rgb(249,244,237);
// background: radial-gradient(circle, rgba(249,244,237,1) 0%, rgba(234,234,234,1) 94%, rgba(249,244,237,1) 100%);