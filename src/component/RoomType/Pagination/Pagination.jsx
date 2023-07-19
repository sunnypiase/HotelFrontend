import {Stack} from "@mui/material";
import s from './Pagination.module.css'

const Pagination = ({selected, count, changePage}) => {
    const pages = []

    for (let i = 1; i <= count; i++) {
        pages.push(i)
    }

    return <Stack direction='row' sx={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '24px'
    }}>
        {pages.map((page, index) => {
            return <button
                onClick={() => changePage(page, index)}
                className={selected === page ? s.selected : s.page}
                key={index}
            >
                {page}
            </button>
        })}
    </Stack>
}

export default Pagination