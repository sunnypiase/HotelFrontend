import {Stack, Box, Typography} from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {
    return <Stack spacing={1} direction='row' sx={{
        color: '#BDBDBD',
        background: '#303030',
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <PhoneAndroidIcon sx={{
            fontSize: '48px'
        }} />
        <Typography component='span' sx={{
            fontSize: '38px',
            fontWeight: 'bold'
        }}>
            +380 68 684 8880
        </Typography>
    </Stack>
}

export default Footer