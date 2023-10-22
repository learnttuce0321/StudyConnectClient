import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

interface Message {
    id: string
    content: string;
    userId: string;
    date: string;
    time: string;
}
export interface MessagePayload {
    content: string;
    userId: string;
    date: string;
    time: string
}

const initialState: Array<Message> = [
    {
        id: '1',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '2',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '3',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '4',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '5',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '6',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '7',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '8',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '9',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '10',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '11',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '12',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '13',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '14',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '15',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '16',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '17',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '18',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '19',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '20',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '21',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '22',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '23',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '24',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '25',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '26',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '27',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '28',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '29',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '30',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '31',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '32',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '33',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '34',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '35',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '36',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '37',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '38',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '39',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    },
    {
        id: '40',
        content: '',
        userId: '1',
        date: '2023 10 20',
        time: '00:00:00'
    }
]

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        AddMessage(state, action: PayloadAction<MessagePayload>) {
            const { content, userId, date, time } = action.payload

            state.push({
                id: uuidv4(),
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