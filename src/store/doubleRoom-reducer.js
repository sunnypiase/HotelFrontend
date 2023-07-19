import double1Img from '../images/double/IMG_8232-scaled.jpg'
import double2Img from '../images/double/№9-scaled.jpg'
import double3Img from '../images/double/IMG_8239-scaled.jpg'

const initialState = {
    rooms: [
        {
            id: 1,
            images: [
                double1Img,
                double2Img,
                double3Img
            ]
        },
        {
            id: 2,
            images: [
                double1Img,
                double2Img,
                double3Img
            ]
        },
        {
            id: 3,
            images: [
                double1Img,
                double2Img,
                double3Img
            ]
        },
        {
            id: 4,
            images: [
                double1Img,
                double2Img,
                double3Img
            ]
        }
    ]
}

const doubleRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default doubleRoomReducer