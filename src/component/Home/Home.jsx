import React from 'react'
import {Box, Typography} from "@mui/material";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Rooms from "./Rooms/Rooms";

const Home = () => {
    return <Box sx={{
        background: 'black',
    }}>
        <Section1/>
        <Section2/>
        <Rooms/>
    </Box>
}

export default Home