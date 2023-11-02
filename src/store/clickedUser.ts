import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./user";

const initialState: any = {}
export interface SetClickedUserPayload {
    user: User | {} | undefined;
}

const clickedUserSlice = createSlice({
    name: 'clickedUser',
    initialState,
    // set-clicked user-data
    reducers: {
        setClickedUser(state, action: PayloadAction<SetClickedUserPayload | Record<string, undefined>>) {
            const { user } = action.payload
            return user
        }
    }
})

export default clickedUserSlice.reducer
export const clickedUserActions = clickedUserSlice.actions