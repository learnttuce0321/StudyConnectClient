import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Message {
    id: number
    content: string;
    userId: number;
    date: string;
    time: string;
}
export interface MessagePayload {
    content: string;
    userId: number;
    date: string;
    time: string
}

const initialState: Array<Message> = [
]

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        AddMessage(state, action: PayloadAction<MessagePayload>) {
            const { content, userId, date, time } = action.payload

            state.push({
                id: state.length + 1,
                content, 
                userId, 
                date, 
                time
            })
        }
    }
})

export const messageActions = messageSlice.actions
export default messageSlice.reducer
export type { Message }