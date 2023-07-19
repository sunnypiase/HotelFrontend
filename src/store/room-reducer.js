const SET_ROOM = 'SET_ROOM'

const initialState = {
    id: null,
    images: []
}

const roomReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ROOM:
            return {
                id: action.room.id,
                images: action.room.images
            }
        default:
            return state
    }
}

export default roomReducer

export const setRoom = (room) => ({type: SET_ROOM, room})