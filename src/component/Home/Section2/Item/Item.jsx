import { Box, Grid, Typography } from "@mui/material";
const Item = ({ icon: IconComponent, title, description }) => {
    return (
        <Grid item xs={2.4}>
            <Box>
                <Box>
                    <IconComponent sx={{
                        fontSize: '50px'
                    }}/>
                </Box>
                <Typography sx={{
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>{title}</Typography>
                <Typography sx={{
                    color: '#4E4D4D',
                    maxWidth: '254px'
                }}>{description}</Typography>
            </Box>
        </Grid>
    );
};

export default Item;