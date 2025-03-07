import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router";
import { Box, Fab } from "@mui/material";
import { Add, Home, BarChart, TextFields } from "@mui/icons-material";

const routes = ["/", "/data", "/form"];

export default function () {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Fab
                color="primary"
                sx={{
                    margin: "0 16px 16px auto",
                }}
            >
                <Add />
            </Fab>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_, newValue) => {
                    setValue(newValue);
                    navigate(routes[newValue]);
                }}
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Data" icon={<BarChart />} />
                <BottomNavigationAction label="Form" icon={<TextFields />} />
            </BottomNavigation>
        </Box>
    );
}
