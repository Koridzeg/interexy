import React, { useState, useEffect } from 'react'
import { Box } from "@mui/material"
import Card from '../../components/Card'


interface Character {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: {
    name: string,
    url: string,
  },
  name: string,
  origin: {
    name: string,
    url: string,
  },
  status: string,
  species: string,
  type: string,
  url: string,
}

interface Info {
  count: number,
  next: string,
  pages: number,
  prev?: string,
}

export interface FetchResult {
  info: Info,
  results: Character[]
}


const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNumber, _] = useState(1)
  const [fetchedData, setFetchedData] = useState<FetchResult>()
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  console.log(fetchedData)

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
    })();
  }, [api])
  return (
    <div className='home'>
      <Box
        display="flex"
        justifyContent="flex"
        alignItems="center"
        padding="4.5rem 0px"
        bgcolor="rgb(32,35,41)"
        minHeight="calc(50vh - 60px)"

      >
        <Box display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          maxWidth="1920px">
          {fetchedData && <Card page="/" fetchResults={fetchedData} />}
        </Box>
      </Box>
    </div>
  )
}

export default Home