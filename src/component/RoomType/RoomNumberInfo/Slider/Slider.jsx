import {Box} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import s from './Slider.module.css'

const Slider = ({images, selectedImage, setSelectedImage}) => {
    const nextImage = () => {
        if (selectedImage < images.length - 1) {
            setSelectedImage(selectedImage + 1)
        } else {
            setSelectedImage(0)
        }
    }
    const prevImage = () => {
        if (selectedImage >= 1) {
            setSelectedImage(selectedImage - 1)
        } else {
            setSelectedImage(images.length - 1)
        }
    }

    return <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <NavigateBeforeIcon onClick={prevImage} sx={{
            fontSize: '80px',
            cursor: 'pointer'
        }}/>
        <img src={images[selectedImage]} className={s.image}/>
        <NavigateNextIcon onClick={nextImage} sx={{
            fontSize: '80px',
            cursor: 'pointer'
        }}/>
    </Box>
}

export default Slider