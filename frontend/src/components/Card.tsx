import React from 'react'
import { Box } from "@mui/material"


const Card = () => {
    return (
        <Box
            display="flex"
            width="600px"
            height="220px"
            overflow="hidden"
            border-radius="0.5rem"
            margin="0.75rem"
            box-shadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px"
        >
            <Box
                flex="2 1 0%"
                width="100%"
            >
            </Box>
            <Box
                flex="3 0%"
                position="relative"
                padding="0.75rem"
                color="rgb(255,255,255)"
                display="flex"
                flex-direction="column"
            >

            </Box>
        </Box>
    )
}

export default Card