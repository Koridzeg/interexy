import React from 'react'
import { Box } from "@mui/material"
import { useNavigate } from 'react-router'

const Navbar = () => {


    const user = JSON.parse(localStorage?.getItem('user') || "{}")

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
                {localStorage.getItem("user") === null ? (
                    <Box display="flex" justifyContent="center" alignItems="center" gap="1rem">
                        <Box onClick={() => navigate('/register')}
                            sx={{ "&:hover": { cursor: "pointer" } }}>
                            Register
                        </Box>
                        <Box onClick={() => navigate('/login')}
                            sx={{ "&:hover": { cursor: "pointer" } }}>
                            Login
                        </Box>
                    </Box>
                ) : (<>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="1rem">
                        <Box onClick={() => {
                            localStorage?.removeItem('user')
                            navigate('/login')
                        }
                        }
                            sx={{ "&:hover": { cursor: "pointer" } }}>
                            Logout
                        </Box>
                        <Box onClick={() => navigate('/userinfo')}
                            sx={{ "&:hover": { cursor: "pointer" } }}>
                            User
                        </Box>
                    </Box>

                </>)}
            </Box>
        </Box>
    )
}

export default Navbar