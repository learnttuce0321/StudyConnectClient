import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Sex = 'male' | 'female'
export interface User {
    id: number
    name: string;
    phone: string;
    sex: Sex;
    age: number;
    info: string;
    submissionRate: number;
}

export interface InfoPaylaod {
    id: number;
    info: string
}
export interface AddUserPayload {
    name: string;
    phone: string;
    age: number
    sex: string;
}

const initialState: Array<User> = [
    {
        id: 1,
        name: '주상후',    
        phone: '010-1234-5678',
        sex: 'male',
        age: 22,
        info: '',
        submissionRate: 100,
    },
    {
        id: 2,
        name: '황동준',    
        phone: '010-1111-2222',
        sex: 'female',
        age: 20,
        info: '',
        submissionRate: 100,
    },
    {
        id: 3,
        name: '장창현',    
        phone: '010-3333-3333',
        sex: 'male',
        age: 25,
        info: '',
        submissionRate: 100,
    },
    {
        id: 4,
        name: '김종현',    
        phone: '010-5555-6666',
        sex: 'female',
        age: 30,
        info: '',
        submissionRate: 90,
    },
    {
        id: 5,
        name: '홍지훈',    
        phone: '010-7777-7777',
        sex: 'male',
        age: 27,
        info: '',
        submissionRate: 100,
    }
]


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ChangeInfo(state, action: PayloadAction<InfoPaylaod>) {
            const {id, info}: InfoPaylaod = action.payload
            const matchedUserObj = state.find(user => user.id === id)
            if(matchedUserObj) {
                matchedUserObj!.info = info
            }
        },
        addUser(state, action: PayloadAction<AddUserPayload>) {
            const { name, phone, age, sex } = action.payload

            const tempUser: User = {
                id: state.length + 1,
                name,
                phone,
                age,
                sex: sex as Sex, 
                info: '',
                submissionRate: 0
            }

            state.push(tempUser)
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer