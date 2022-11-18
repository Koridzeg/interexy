import React from 'react'
import { Box } from "@mui/material"
import { FetchResult } from '../pages/Home/Home'
import { Link } from 'react-router-dom'


type CardProps = {
    fetchResults: FetchResult,
    page: any,
}

const Card = (props: CardProps) => {
    let display

    if (props.fetchResults) {
        display = props.fetchResults.results.map((x) => {
            let { id, image, name, status, location } = x;

            return (

                <Box
                    display="flex"
                    width="600px"
                    height="220px"
                    overflow="hidden"
                    borderRadius="0.5rem"
                    margin="0.75rem"
                    boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px"
                    sx={{ background: 'rgb(60, 62, 68)' }}
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
                        flexDirection="column"
                    >
                        <Box flex="1 1 0%" display="flex" flexDirection="column">
                            <Link
                                to={`${props.page}${id}`}
                                key={id}
                                style={{ textDecoration: "none" }}
                            >      <span>{name}</span>  </Link>
                            <span>{status}</span>
                        </Box>
                        <Box flex="1 1 0%" display="flex" flexDirection="column" justifyContent="center">
                            <h3>Last known location:</h3>
                            <span>{location.name}</span>
                        </Box>
                        <Box flex="1 1 0%" display="flex" flexDirection="column" justifyContent="center"></Box>
                    </Box>
                </Box>

            )
        })
    } else {
        display = "No characters found"
    }

    return <>{display}</>

}

export default Card