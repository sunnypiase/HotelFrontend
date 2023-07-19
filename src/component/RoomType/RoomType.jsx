import {Box, Grid, Stack, Typography} from "@mui/material";
import RoomTypeInfo from "./RoomTypeInfo/RoomTypeInfo";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setRoom} from "../../store/room-reducer";
import RoomNumberInfo from "./RoomNumberInfo/RoomNumberInfo";
import Pagination from "./Pagination/Pagination";

const RoomType = ({title, description, price, rooms, room, setRoom}) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedPage, setSelectedPage] = useState(1)

    useEffect(() => {
        setRoom(rooms[0])
    }, [])

    const changePage = (page, index) => {
        setSelectedImage(0)
        setSelectedPage(page)
        setRoom(rooms[index])
    }

    return <Box sx={{
        color: '#2B2B2B',
        paddingTop: '30px'
    }}>
        <Typography variant='h2' sx={{
            textAlign: 'center'
        }}>{title}</Typography>
        <RoomTypeInfo
            description={description}
            price={price}
        />
        <Stack sx={{
            background: '#303030',
            padding: '24px',
            margin: '24px 0 0',
            minHeight: '600px'
        }}>
            <RoomNumberInfo
                direction='row'
                id={room.id}
                images={room.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            <Pagination
                selected={selectedPage}
                count={rooms.length}
                changePage={changePage}
            />
        </Stack>
    </Box>
}

const mapStateToProps = (state) => {
    return {
        room: state.room
    }
}

export default connect(mapStateToProps, {setRoom})(RoomType)