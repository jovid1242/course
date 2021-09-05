import axios from 'axios'

const http = axios.create({
    baseURL: 'https://englishapi.delphi.school/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default http
