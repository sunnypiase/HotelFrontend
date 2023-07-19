import RoomType from "../RoomType";
import {connect} from "react-redux";

const DoubleRoom = ({rooms}) => {
    const description = [
        'Два односпальних ліжка',
        'Холодильник',
        'Телевізор',
        'Душ',
        'Кондиціонер',
        'Безкоштовне місце на парковці'
    ]
    const price = [
        '1-2 людини - 1100'
    ]

    return <RoomType
        title='Двомісцевий номер'
        description={description}
        price={price}
        rooms={rooms}
    />
}

const mapStateToProps = (state) => {
    return {
        rooms: state.doubleRoom.rooms
    }
}
export default connect(mapStateToProps)(DoubleRoom)