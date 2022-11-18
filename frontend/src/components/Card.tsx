import React from 'react'
import { Box } from "@mui/material"
import { FetchResult } from '../pages/Home/Home'
import { Link } from 'react-router-dom'


const Card = (results: FetchResult, page: number) => {
    let display

    if (results) {
        display = results.results.map((x) => {
            let { id, image, name, status, location } = x;

            return (
                <Link
                    to={`${page}${id}`}
                    key={id}
                >
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
                            <img src={image} alt={name} />
                        </Box>
                        <Box
                            flex="3 0%"
                            position="relative"
                            padding="0.75rem"
                            color="rgb(255,255,255)"
                            display="flex"
                            flex-direction="column"
                        >
                            <Box flex="1 1 0%" display="flex" flex-direction="column">
                                <span>{name}</span>
                                <span>{status}</span>
                            </Box>
                            <Box flex="1 1 0%" display="flex" flex-direction="column" justifyContent="center">
                                <h3>Last known location:</h3>
                                <span>{location.name}</span>
                            </Box>
                            <Box flex="1 1 0%" display="flex" flex-direction="column" justifyContent="center"></Box>
                        </Box>
                    </Box>
                </Link>
            )
        })
    } else {
        display = "No characters found"
    }

    return <>{display}</>

}

export default Card