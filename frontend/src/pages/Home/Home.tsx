import React, { useState, useEffect } from 'react'
import { Box } from "@mui/material"


interface ApiInfo {
  count: number,
  next: string,
  pages: number,
}

interface CharacterName {
  name: string,
  status: string,
  species: string,
  type: string,
}

interface CharacterInfo {
  id: number,
  name: CharacterName,

}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState<any>([])
  const { info, results } = fetchedData;
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
      <Box width="80x" margin="80px auto">
        
      </Box>
    </div>
  )
}

export default Home