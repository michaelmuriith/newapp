import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navBar/Navbar";
import './app.css'
import Home from "./pages/home/Home";
import Article from "./pages/singleArticle/article"
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import AddArticle from "./pages/addArticle/editor";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const theme = useSelector((state) => state.Theme.theme);
  const {pathname} = useLocation();
  return (
    <div className="App">
      <ThemeProvider theme={theme ===true ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/article' element={<Article />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/addNews' element={<AddArticle />}/>
          </Routes>
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
