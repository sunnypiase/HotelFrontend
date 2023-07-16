import {Box, Typography} from "@mui/material";
import standartImg from '../../../images/1.3-1-1536x1024.jpg'
import twoRoomsImg from '../../../images/2.1-1536x1024.jpg'
import hostel from '../../../images/1.3-1-1536x1024.jpg'
import twoPlacesImg from '../../../images/№9-1536x1024.jpg'
import Room from "./Room/Room";

const Rooms = () => {
    return <Box sx={{
        marginTop: '400px',
        background: '#303030',
        color: '#BDBDBD',
    }}>
        <Typography variant='h2' sx={{
            padding: '60px 60px 0'
        }}>Наші номера</Typography>
        <Room
            direction='row'
            src={twoRoomsImg}
            title='Двокімнатний напівлюкс'
            path='/lux-room'
            backgroundColor='#303030'
            color='#BDBDBD'
        />
        <Room
            direction='row-reverse'
            src={twoPlacesImg}
            title='Двомісцевий номер'
            path='#'
            backgroundColor='#B7B7B7'
            color='#2B2B2B'
        />
        <Room
            direction='row'
            src={standartImg}
            title='Стандарт'
            path='#'
            backgroundColor='#303030'
            color='#BDBDBD'
        />
        <Room
            direction='row-reverse'
            src={hostel}
            title='Хостел'
            path='#'
            backgroundColor='#B7B7B7'
            color='#2B2B2B'
        />
    </Box>
}

export default Rooms