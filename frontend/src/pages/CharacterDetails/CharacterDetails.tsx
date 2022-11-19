import React, { useState, useEffect } from 'react'
import { Box } from "@mui/material"
import { useParams } from 'react-router-dom'

const CharacterDetails = () => {
    const { id } = useParams();

    const [fetchedData, setFetchedData] = useState<any>([])
    let api = `https://rickandmortyapi.com/api/character/${id}`;


    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            setFetchedData(data)
        })()
    }, [api])

    const { name, location, origin, gender, image, status, species } = fetchedData;

    return (
        <Box display="flex"
            width="100%"
            padding="4.5rem 0px"
            justifyContent="center"
            alignItems="center"
            minHeight="calc(50vh - 60px)"

        >
            <Box
                display="flex"
                width="600px"
                height="300px"
                overflow="hidden"
                borderRadius="0.5rem"
                margin="0.75rem"
                boxShadow="rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px"
                sx={{ background: 'rgb(60, 62, 68)' }}
                key={id}
            >
                <Box
                    flex="2 1 0%"
                    width="100%"
                >
                    <img src={image} alt={name} /> </Box>
                <Box
                    flex="3 0%"
                    position="relative"
                    padding="0.75rem"
                    color="rgb(255,255,255)"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        flex="1 1 0%"
                        display="flex"
                        flexDirection="column"
                    >
                        <span>Name:{name}</span>
                        <span>Status:{status}</span>
                        <span>Gender:{gender}</span>
                        <span>Origin:{origin?.name}</span>
                    </Box>
                    <Box
                        flex="1 1 0%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <span>Location:{location?.name} </span>
                        <span>Species: {species}</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CharacterDetails