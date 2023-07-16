import { useSelector } from "react-redux"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {useParams} from 'react-router-dom'


const ListImage = () => {
    const {images} = useSelector(state => state.images)
    const {imageId} = useParams()
    if (imageId === null) {
        return <h4>No images available.</h4>
    } else {
        return (
            <>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        {images[imageId].length > 0 ? (
                            images[imageId].map((item, i) => (
                                <img
                                    key={i}
                                    src={item.img}
                                    style={{width: "100%", display: "block"}}
                                    alt={item.title}
                                />
                            ))) : (
                                <h4>No image</h4>
                            ) 
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </>
        )
    }
}

export default ListImage