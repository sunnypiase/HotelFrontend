import axios from "axios";

const instance = axios.create({
    withCredentials: false, // changed from true to false
    baseURL: 'https://pegashotelapi.up.railway.app/',
    headers: {'content-type': 'application/json'}
});

export const bookingAPI = {
    update(data) {
        return instance.post('Booking', data)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    get() {
        return instance.get('booking')
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
}
