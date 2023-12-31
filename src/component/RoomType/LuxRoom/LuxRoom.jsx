import RoomType from "../RoomType";
import {connect} from "react-redux";

const LuxRoom = ({rooms}) => {
    const description = [
        'Двоспальне ліжко',
        'Розкладний двоспальний диван',
        'Холодильник',
        'Телевізор',
        'Душ',
        'Кондиціонер',
        'Безкоштовне місце на парковці'
    ]
    const price = [
        '1-2 людини - 1200',
        '3-4 людини - 1400'
    ]

    return <RoomType
        title='Двокімнатний люкс'
        description={description}
        price={price}
        rooms={rooms}
    />
}

const mapStateToProps = (state) => {
    return {
        rooms: state.luxRoom.rooms
    }
}
export default connect(mapStateToProps)(LuxRoom)