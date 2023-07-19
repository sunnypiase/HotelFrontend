import RoomType from "../RoomType";
import {connect} from "react-redux";

const HostelRoom = ({rooms}) => {
    const description = [
        '6 ліжок',
        'Холодильник (на вимогу)',
        'Душ',
        'Безкоштовне місце на парковці'
    ]
    const price = [
        '1 людина - 370'
    ]

    return <RoomType
        title='Хостел'
        description={description}
        price={price}
        rooms={rooms}
    />
}

const mapStateToProps = (state) => {
    return {
        rooms: state.hostelRoom.rooms
    }
}
export default connect(mapStateToProps)(HostelRoom)