import {AppBar, Stack, Toolbar, Typography, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return <AppBar position='static' sx={{
        backgroundColor: '#303030'
    }}>
        <Toolbar>
            <Typography sx={{
                flexGrow: 1
            }}>
                <NavLink to='/home' className={s.logo}>Pegas Hotel</NavLink>
            </Typography>
            <Stack direction='row' >
                <Button color='inherit'>
                    <NavLink to='/home' className={s.link}>Головна</NavLink>
                </Button>
            </Stack>
        </Toolbar>
    </AppBar>
}

export default Navbar