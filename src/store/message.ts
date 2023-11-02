import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Message {
    id: string,
    content: string;
    userId: string;
    date: string;
    time: string;
    studyId: string;
}
export interface SetMessageDataPayload {
    messages: Array<Message>;
}
export interface AddMessagePayload {
    id: string;
    content: string;
    userId: string;
    date: string;
    time: string;
    studyId: string;
}

const initialState: Array<Message> = []

const messageSlice = createSlice({
    name: 'message',
    initialState,
    // set/add message-data
    reducers: {
        SetMessageData(state, action: PayloadAction<SetMessageDataPayload>) {
            return action.payload.messages
        },
        AddMessage(state, action: PayloadAction<AddMessagePayload>) {
            const { id, content, userId, date, time, studyId } = action.payload

            const tempMessageObj: Message = {
                id,
                content, 
                userId, 
                date, 
                time,
                studyId
            }

            state.push(tempMessageObj)
        }
    }
})

export const messageActions = messageSlice.actions
export default messageSlice.reducer
export type { Message }