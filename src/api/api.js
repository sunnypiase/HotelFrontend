import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pegashotelapi.up.railway.app/',
    headers: {'content-type': 'application/json'}
})

export const getRoom = () => {
    return instance.get('room')
        .then(response => response.data)
}