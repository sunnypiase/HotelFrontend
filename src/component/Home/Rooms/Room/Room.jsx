import {Box, Button, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import s from './Room.module.css'

const Room = ({direction, src, title, path, backgroundColor, color}) => {
    return <Stack direction={`${direction}`} spacing={2} sx={{
        backgroundColor,
        height: '777px',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '24px'
    }}>
        <img src={src} alt={title} className={s.image} />
        <Stack spacing={1} sx={{
            flexDirection: 'column',
            alignItems: `${direction === 'row' ? 'start' : 'end'}`
        }}>
            <Typography variant='h2' sx={{
                color: `${color}`
            }}>{title}</Typography>
            <Button sx={{
                background: `${color}`,
                '&:hover': {
                    background: '#fff'
                },
                borderRadius: 0,
                padding: 0,
            }}>
                <Link to={path} className={s.link} style={{
                    color: `${color === '#BDBDBD' ? '#000' : '#fff'}`
                }}>ДЕТАЛІ</Link>
            </Button>
        </Stack>
    </Stack>
}

export default Room