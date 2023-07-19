import hostel1Img from '../images/hostel/IMG_8288-scaled.jpg'
import hostel2Img from '../images/hostel/IMG_8292-scaled.jpg'
import hostel3Img from '../images/hostel/IMG_8291-scaled.jpg'
import hostel4Img from '../images/hostel/IMG_8295-scaled.jpg'

const initialState = {
    rooms: [
        {
            id: 5,
            images: [
                hostel1Img,
                hostel2Img,
                hostel3Img,
                hostel4Img
            ]
        },
        {
            id: 6,
            images: [
                hostel1Img,
                hostel2Img,
                hostel3Img,
                hostel4Img
            ]
        },
        {
            id: 7,
            images: [
                hostel1Img,
                hostel2Img,
                hostel3Img,
                hostel4Img
            ]
        },
        {
            id: 8,
            images: [
                hostel1Img,
                hostel2Img,
                hostel3Img,
                hostel4Img
            ]
        }
    ]
}

const hostelRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default hostelRoomReducer