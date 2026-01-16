import axios from 'axios'
import React, { useEffect } from 'react'

const useGetMessages = () => {
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                axios.defaults.withCredentials=true
                const res = await axios.get(`http://localhost:8080/api/v1/message/696061ace01d6aa994d160d4`)
                console.log(res)

            } catch (error) {
                console.log(error)
            }
        }
        fetchMessage()
    }, [])
}

export default useGetMessages