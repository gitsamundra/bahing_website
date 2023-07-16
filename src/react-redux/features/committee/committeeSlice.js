import { createSlice } from "@reduxjs/toolkit";
import { members } from "../../../data/members";

const memberSlice = createSlice({
    name: 'members',
    initialState: {members},
    reducers: {
        addMember: (state, action) => {
            state.members[action.payload.id] = action.payload
        }
    }
})

export const {addMember} = memberSlice.actions
export default memberSlice.reducer
