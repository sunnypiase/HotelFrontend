import {bookingAPI} from "../api/api";

const UPDATE_BOOKING = 'UPDATE_BOOKING'
const GET_BOOKING = 'GET_BOOKING'

const initialState = {
    booking: null
}

const bookingReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_BOOKING:
        case GET_BOOKING:
            return {
                booking: action.data
            }
        default:
            return state
    }
}

export default bookingReducer

const setBooking = (data) => ({type: GET_BOOKING, data})
export const getBooking = ()  => async (dispatch) => {
    const data = await bookingAPI.get()
    dispatch(setBooking(data))
}
