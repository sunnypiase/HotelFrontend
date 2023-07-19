import {Box, Grid, Stack, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ManIcon from "@mui/icons-material/Man";

const RoomTypeInfo = ({description, price}) => {
    const enumeration = (item, icon, index) => {
        return <Stack direction='row' spacing={1} key={index} sx={{
            width: 'max-content',
            alignItems: 'center'
        }}>
            {icon}
            <Typography sx={{
                fontSize: '20px'
            }}>{item}</Typography>
        </Stack>
    }

    return <Grid container columnSpacing={2} sx={{
        padding: '24px'
    }}>
        <Grid item xs={4}>
            <Box sx={{
                width: 'min-content',
                margin: '0 auto'
            }}>
                <Typography sx={{
                    fontSize: '34px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Привілеї</Typography>
                {description.map((item, index) => enumeration(item, <CheckIcon sx={{
                    fontSize: '30px'
                }}/>, index))}
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box sx={{
                width: 'min-content',
                margin: '0 auto'
            }}>
                <Typography sx={{
                    fontSize: '34px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Ціна</Typography>
                {price.map((item, index) => enumeration(item, <ManIcon sx={{
                    fontSize: '30px'
                }}/>, index))}
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Box sx={{
                width: 'max-content',
                margin: '0 auto'
            }}>
                <Typography sx={{
                    fontSize: '34px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Замовити</Typography>
                <Typography sx={{
                    fontSize: '20px'
                }}>
                    +380 68 684 8880
                </Typography>
                <Typography sx={{
                    fontSize: '20px'
                }}>
                    +380 93 027 7738
                </Typography>
            </Box>
        </Grid>
    </Grid>
}

export default RoomTypeInfo