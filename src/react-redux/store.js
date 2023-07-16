
import { configureStore } from '@reduxjs/toolkit'
import addImages from './features/gallery/imageSlice'
import addMember from './features/committee/committeeSlice'
import addThumbnail from './features/gallery/thumbnailSlice'

const store = configureStore({
    reducer: {
        members: addMember,
        images: addImages,
        thumbnails: addThumbnail
    },
})

export default store