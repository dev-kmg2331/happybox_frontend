import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/Login/login";
import theme from "./styles/theme";
import Join from "./pages/Join/join";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/join" element={<Join />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
