import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import axios, { AxiosResponse } from "axios"


const UserInfo = () => {

    const [userData, setuserData] = useState<AxiosResponse | null>(null)

    const data = JSON.parse(sessionStorage.getItem("user") || "{}")

    const parseJwt = (token: any) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const userId = (parseJwt(data.token).userId)

    const api = `http://localhost:8000/user/info/${userId}`

    useEffect(() => {

        (async function () {
            const data = await axios.get(api)
            setuserData(data)

        })()

    }, [api])


    return (
        <Box
            display="flex"
            width="100%"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                justifyContent="flex"
                alignItems="flex"
                flexDirection="column"
            >
                <span> Email:  {userData?.data.email} </span>
                {userData?.data.bio ? (
                    <span>Bio: {userData?.data.bio}</span>
                ) : (
                    <span>Bio: User has provided no bio</span>
                )}
            </Box>

        </Box>
    )
}

export default UserInfo