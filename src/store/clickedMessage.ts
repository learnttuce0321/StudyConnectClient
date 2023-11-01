import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "./message";

const initialState: any = {}

export interface SetClickedMessagePayload {
    message: Message | {} | undefined
}

const clickedMessageSlice = createSlice({
    name: 'clickedMessage',
    initialState,
    reducers: {
        setClickedMessage(state, action: PayloadAction<SetClickedMessagePayload>) {
            const { message } = action.payload
            return message
        }
    }   
})

export default clickedMessageSlice.reducer
export const clickedMessageActions = clickedMessageSlice.actions