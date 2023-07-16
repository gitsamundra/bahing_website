import './style.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Image from 'mui-image'
import noimage from '../../img/no-photo.png'
import { Box, Paper, Typography } from '@mui/material';




// eslint-disable-next-line react/prop-types
const ImageSlider = ({thumbnails, setImageId}) => {
    const years = Object.keys(thumbnails)
    const navigate = useNavigate()
    const handleClick = (id) => {
        setImageId(id)
        navigate('/imageList' + id)
    }

    return (
        <section>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 260,
                    height: 160,
                    padding: '10px',
                    justifyContent: 'center'
                    },
                }}
            >
                {years.map((year, i) =>(
                    <Paper elevation={16} key={i} >
                        {year ? (
                            // eslint-disable-next-line react/prop-types
                            thumbnails[year].map((y, i) => (
                                    <Image  src={y.image || noimage} showLoading height='80%' key={i} /> 
                                ))
                            ) : (
                                <h4>No image</h4>
                            )
                        }
                        <Link 
                            to={`/imageList/${year}`} 
                            onClick={() => handleClick(year)}
                        >
                            <Typography >
                                Anual party {year}
                            </Typography>
                        </Link>
                    </Paper>
                    ))
                }
            </Box>
            <Outlet />
        </section>
    )
}
export default ImageSlider