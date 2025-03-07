import React, { useState } from "react";
import BottomNavigation from "./bottom-nav";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";
import Form from "./views/form";
import Data from "./views/data";
import Home from "./views/home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "./app-bar";
import fs from "fs";

const lightTheme = createTheme({});

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

export const themeFile = "data/theme.txt";

export default function (props: { themeMode: "dark" | "light" }) {
    const [darkMode, setDarkMode] = useState(props.themeMode === "dark");

    const toggleTheme = async () => {
        const themeMode = !darkMode;
        setDarkMode(themeMode);
        if (!(await fs.exists("data"))) await fs.mkdir("data");
        await fs.writeFile(themeFile, themeMode ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <AppBar toggleTheme={toggleTheme} />
            <Box p={2} mb={6}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/form" element={<Form />} />
                        <Route path="/data" element={<Data />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <BottomNavigation />
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
}
