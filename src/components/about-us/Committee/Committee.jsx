import { Box, Paper, Typography } from "@mui/material"
import noname from '../../../img/no-photo.png'
import Image from 'mui-image'
import {useParams} from 'react-router-dom'




const Committee = ({data}) => {
    const {id} = useParams()
    
    if(id === undefined) {
        return <h1>Loading...</h1>
    } else {
        const values = data[id]
        return (
            <section>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 160,
                        height: 160,
                        padding: '10px',
                        justifyContent: 'center'
                        },
                    }}
                >
                    {
                        values.map((item, i) =>(
                        <Paper elevation={16} key={i} sx={{alignItems: 'center'}}>
                            <Image src={item.img || noname} showLoading style={{borderRadius: '50%'}} width='90px' height='90px'/>
                            <div style={{paddingLeft: '2%'}}>
                                <Typography variant = 'h6'>{item.title}</Typography>
                                <Typography>{item.name}</Typography>
                            </div>
                        </Paper>
                        ))
                    }
                </Box>
            </section>
        )
    }
}

export default Committee