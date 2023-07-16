import {Box, Grid, Stack, Typography} from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import CheckIcon from '@mui/icons-material/Check';

const RoomType = ({title, description, price, numberRoom, images}) => {
    const enumeration = (item, icon) => {
        return <Stack direction='row' spacing={1}>
            {icon}
            <Typography>{item}</Typography>
        </Stack>
    }

    return <Box sx={{
        color: '#2B2B2B',
        padding: '24px'
    }}>
        <Typography variant='h2' sx={{
            textAlign: 'center'
        }}>{title}</Typography>
        <Grid container columnSpacing={2}>
            <Grid item xs={4}>
                <Box>
                    {description.map((item) => enumeration(item, <CheckIcon/>))}
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                    {price.map((item) => enumeration(item, <ManIcon/>))}
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                    <Typography>
                        +380 68 684 8880
                    </Typography>
                    <Typography>
                        +380 93 027 7738
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default RoomType