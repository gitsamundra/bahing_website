import { Card, Typography } from "@mui/material"
import './style.css'
import { Outlet } from "react-router-dom"
import ImageSlider from "./ImageSlider"



// eslint-disable-next-line react/prop-types
const Gallery = ({thumbnails, setImageId}) => {
    return (
        <section>
            <h1>Gallery</h1>
            <Card variant="outlined" sx={{ maxWidth: 1200}}>
                <Typography level="body1" p='20px'>
                    Yosemite National Park is a national park spanning 747,956 acres (1,169.4 sq
                    mi; 3,025.2 km2) in the western Sierra Nevada of Central California.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, 
                    quaerat totam assumenda, 
                    image 
                    nostrum delectus sint aspernatur at ipsam numquam vitae veniam 
                </Typography>
                <div style={{ alignItems: 'center'}}>
                    <ImageSlider  thumbnails={thumbnails} setImageId={setImageId}/>
                </div>
            </Card>
            <Outlet />
        </section>
    )
}


export default Gallery