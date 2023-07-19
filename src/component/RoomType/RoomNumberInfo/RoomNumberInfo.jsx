import { Box, Stack, Typography } from "@mui/material";
import Slider from "./Slider/Slider";
import Calendar from './Calendar/Calendar'
import { connect } from "react-redux";
import { getBooking } from "../../../store/booking-reducer";
import { useEffect, useState } from "react";

function RoomNumberInfo({ direction, id, images, selectedImage, setSelectedImage, getBooking, booking }) {
    useEffect(() => {
        getBooking();
    }, []);

    return (
        <Box sx={{ color: '#fff' }}>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>Кімната № {id}</Typography>
            <Stack direction={direction} sx={{ marginTop: '24px' }}>
                <Slider images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                <Calendar booking={booking} roomId={id} />
            </Stack>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        booking: state.booking.booking
    }
}

export default connect(mapStateToProps, { getBooking })(RoomNumberInfo);
