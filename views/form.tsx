import React from "react";
import { Slider, Stack, Button, Box, FormControl, 
        InputLabel, Select, MenuItem, TextField, 
        Switch } from '@mui/material';

export default function() {    
    return <Stack spacing={2}>
        <Box>
            <Button variant="contained">Button</Button>
        </Box>
        <Box>
            <FormControl fullWidth>
                <InputLabel>Age</InputLabel>
                <Select
                    defaultValue={10}
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box>
            <Slider defaultValue={50} valueLabelDisplay="auto" />
        </Box>
        <Box>
          <TextField label="Text Field" fullWidth />
        </Box>
        <Box>
            <Switch defaultChecked />
        </Box>
    </Stack>
}

