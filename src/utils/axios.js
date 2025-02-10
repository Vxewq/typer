import axios from 'axios'

export const words = axios.create({
    baseURL: "https://random-word-api.vercel.app/api?words=20"
})