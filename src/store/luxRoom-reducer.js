import lux1Img from '../images/lux/2.1-1-scaled.jpg'
import lux2Img from '../images/lux/2.2-scaled.jpg'
import lux3Img from '../images/lux/2.3-scaled.jpg'
import lux4Img from '../images/lux/2.4-scaled.jpg'
import lux5Img from '../images/lux/2.5-scaled.jpg'

const initialState = {
    rooms: [
        {
            id: 9,
            images: [
                lux1Img,
                lux2Img,
                lux3Img,
                lux4Img,
                lux5Img
            ]
        },
        {
            id: 10,
            images: [
                lux1Img,
                lux2Img,
                lux3Img,
                lux4Img,
                lux5Img
            ]
        },
        {
            id: 11,
            images: [
                lux1Img,
                lux2Img,
                lux3Img,
                lux4Img,
                lux5Img
            ]
        },
        {
            id: 12,
            images: [
                lux1Img,
                lux2Img,
                lux3Img,
                lux4Img,
                lux5Img
            ]
        }
    ]
}

const luxRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default luxRoomReducer