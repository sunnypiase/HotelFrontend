import {Box, Typography} from "@mui/material";
import React from "react";

const Section1 = () => {
    return <Box  sx={{
        height: '777px',
        display: 'flex',
        alignItems: 'center',
    }}>
        <Box sx={{
            color: '#E3D9D9C7',
            textAlign: 'center',
            margin: '0 auto'
        }}>
            <Typography variant='h1'>Пегас</Typography>
            <Typography component='div' sx={{
                fontSize: '29px',
                fontWeight: 'bold'
            }}>
                Ласкаво просимо до найзатишнішого готеля міста Обухів
            </Typography>
        </Box>
    </Box>
}

export default Section1