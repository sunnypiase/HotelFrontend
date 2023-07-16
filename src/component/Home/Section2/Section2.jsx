import {Stack, Grid, Typography} from "@mui/material";
import Item from "./Item/Item";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import WifiIcon from '@mui/icons-material/Wifi';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Section2 = () => {
    return <Stack direction='column' spacing={2} sx={{
            background: '#B7B7B7',
            textAlign: 'center',
            height: '100vh',
            justifyContent: 'center',
            padding: '0 24px'
        }}>
            <Typography variant='h2' sx={{
                margin: '0 0 20px'
            }}>Чому ми ?</Typography>
            <Grid container>
                <Item
                    icon={LocationOnIcon}
                    title='Затишна атмосфера'
                    description='Завдяки розташуванню готелю за межею міста, забезпечено відпочинок в
            тихій та затишній обстановці'
                />
                <Item
                    icon={PriceChangeIcon}
                    title='Привабливі ціни'
                    description='Номери на будь-який смак і бюджет'
                />
                <Item
                    icon={RoomServiceIcon}
                    title='Ресторан'
                    description='Ресторанна зона на території готельного комплексу'
                />
                <Item
                    icon={WifiIcon}
                    title='Wi-Fi'
                    description='Безкоштовний Wi-Fi на територіі комплекса'
                />
                <Item
                    icon={ThermostatIcon}
                    title='Комфорт'
                    description='У кімнатах встановлені фанкойли які забезпечують комфортну температуру,
            як взимку так і влітку'
                />
            </Grid>
    </Stack>
}

export default Section2