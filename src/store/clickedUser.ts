import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./user";

const initialState: any = {}
export interface setClickedUserPayload {
    user: User | {} | undefined;
}

const clickedUserSlice = createSlice({
    name: 'clickedUser',
    initialState,
    reducers: {
        setClickedUser(state, action: PayloadAction<setClickedUserPayload | Record<string, undefined>>) {
            const { user } = action.payload
            return user
        }
    }
})

export default clickedUserSlice.reducer
export const clickedUserActions = clickedUserSlice.actions