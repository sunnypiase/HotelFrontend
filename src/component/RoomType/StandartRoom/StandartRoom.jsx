import RoomType from "../RoomType";
import {connect} from "react-redux";

const StandartRoom = ({rooms}) => {
    const description = [
        'Двоспальне ліжко',
        'Холодильник',
        'Телевізор',
        'Кондиціонер',
        'Душ',
        'Безкоштовне місце на парковці'
    ]
    const price = [
        '1-2 людини - 1100'
    ]

    return <RoomType
        title='Стандартний номер'
        description={description}
        price={price}
        rooms={rooms}
    />
}

const mapStateToProps = (state) => {
    return {
        rooms: state.standartRoom.rooms
    }
}
export default connect(mapStateToProps)(StandartRoom)