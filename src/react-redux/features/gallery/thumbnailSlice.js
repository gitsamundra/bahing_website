import { createSlice } from "@reduxjs/toolkit";
import { thumbnails } from "../../../data/thumbnails";

const thumbnailSlice = createSlice({
    name: 'thumbnails',
    initialState: {
        thumbnails
    },
    reducers: {
        addThumnail: (state, action) => {
            state.thumbnails[action.payload.id] = action.payload
        }
    }
})

export const {addCard} = thumbnailSlice.actions
export default thumbnailSlice.reducer
