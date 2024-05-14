import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton,
        InputBase, Drawer, List, ListItem, Divider, 
        ListItemButton, ListItemIcon, ListItemText,
        useTheme } from '@mui/material';
import { Menu, Search, Inbox, Mail, DarkMode, LightMode } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';


const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    flex: 1,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    "& .MuiInputBase-root": {
        width: '100%'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function(props: {toggleTheme: () => void}) {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{justifyContent: "space-between"}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <SearchBar>
                    <SearchIconWrapper>
                        <Search />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchBar>
                <IconButton color="inherit" onClick={props.toggleTheme}>
                    {theme.palette.mode === "dark"
                        ? <DarkMode />
                        : <LightMode />}
                </IconButton>
            </Toolbar>
        </AppBar>
        
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>))}
                </List>
            </Box>
        </Drawer>
    </Box>
}
