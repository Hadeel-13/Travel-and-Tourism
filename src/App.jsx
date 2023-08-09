import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Pages/Home";
import PayOnline from "./Pages/PayOnline";
export default function App() {
    const theme = createTheme({
        palette: {
            myYellow500: {
                main: "#B69121",
            },
            myYellow400: {
                main: "#edc531",
            },
            myYellow300: {
                main: "#FFE169",
            },
            myGray500: {
                main: "#6C757D",
            },
            myGray300: {
                main: "#D6D6D6",
            },
            primary: {
                main: "#343A40",
            },
            secondary: {
                main: "#ffffff00",
            },
        },
        typography: {
            fontFamily: "Figtree",
        },
    });
    return (
        <>
            <BrowserRouter basename="/">
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pay" element={<PayOnline />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}
