import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import { messageData } from "../DummyData/messageData";

interface Message {
    num?: number;
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
    reducers: {
        SetMessageData(state, action: PayloadAction<SetMessageDataPayload>) {
            return action.payload.messages
        },
        AddMessage(state, action: PayloadAction<AddMessagePayload>) {
            const { content, userId, date, time, studyId } = action.payload

            const tempMessageObj: Message = {
                id: uuidv4(),
                content, 
                userId, 
                date, 
                time,
                studyId
            }

            state.push(tempMessageObj)

            // todos: 삭제
            messageData.push(tempMessageObj)
        }
    }
})

export const messageActions = messageSlice.actions
export default messageSlice.reducer
export type { Message }