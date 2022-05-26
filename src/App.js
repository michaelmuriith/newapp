import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {themeToggler} from './redux/reducers/themeReducer'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme";
import persistStore from "redux-persist/es/persistStore";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const theme = useSelector((state) => state.Theme.theme)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <ThemeProvider theme={theme ===true ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        Hello World
        <button onClick={() => dispatch(themeToggler())}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>
    </div>
  );
}

export default App;
