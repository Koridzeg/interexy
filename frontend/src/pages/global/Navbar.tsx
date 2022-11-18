import React from 'react'
import { Box } from "@mui/material"
import { useNavigate } from 'react-router'
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Box
            bgcolor="rgba(255,255,255,0.95)"
            alignItems="center"
            display="flex"
            width="100%"
            height="60px"
            position="fixed"
            zIndex="1"
            top="0"
            left="0"
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box onClick={() => navigate('/')}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                >
                    Home
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar