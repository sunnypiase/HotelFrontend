const SET_ROOM = 'SET_ROOM'
import {getRoom} from "../api/api";

let initialState = {
    room: []
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROOM:
            return {
                room: action.payload
            }
        default:
            return state
    }
}

export default roomReducer

const setRoom = (payload) => ({type: SET_ROOM, payload})

const getRoom = () => async (dispatch) => {
    const data = await getRoom()
    dispatch(setRoom(data))
}