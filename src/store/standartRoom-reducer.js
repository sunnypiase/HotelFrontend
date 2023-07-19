import standart1Img from '../images/standart/IMG_8200-scaled.jpg'
import standart2Img from '../images/standart/IMG_8197-scaled.jpg'
import standart3Img from '../images/standart/1.3-1-scaled.jpg'
import standart4Img from '../images/standart/IMG_8204-scaled.jpg'

const initialState = {
    rooms: [
        {
            id: 13,
            images: [
                standart1Img,
                standart2Img,
                standart3Img,
                standart4Img
            ]
        },
        {
            id: 14,
            images: [
                standart1Img,
                standart2Img,
                standart3Img,
                standart4Img
            ]
        },
        {
            id: 15,
            images: [
                standart1Img,
                standart2Img,
                standart3Img,
                standart4Img
            ]
        },
        {
            id: 16,
            images: [
                standart1Img,
                standart2Img,
                standart3Img,
                standart4Img
            ]
        }
    ]
}

const standartRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default standartRoomReducer