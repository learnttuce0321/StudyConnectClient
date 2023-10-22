import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Sex = 'male' | 'female'
export interface User {
    id: number
    name: string;
    phone: string;
    sex: Sex;
    age: number;
    info: string;
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
    },
    {
        id: 2,
        name: '황동준',    
        phone: '010-1111-2222',
        sex: 'female',
        age: 20,
        info: '',
    },
    {
        id: 3,
        name: '장창현',    
        phone: '010-3333-3333',
        sex: 'male',
        age: 25,
        info: '',
    },
    {
        id: 4,
        name: '김종현',    
        phone: '010-5555-6666',
        sex: 'female',
        age: 30,
        info: '',
    },
    {
        id: 5,
        name: '홍지훈',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 6,
        name: 'aaa',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 7,
        name: 'bbb',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 8,
        name: 'ccc',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 9,
        name: 'ddd',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 10,
        name: 'eee',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 11,
        name: 'fff',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 12,
        name: 'ggg',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 13,
        name: 'hhh',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 14,
        name: 'iii',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 15,
        name: 'jjj',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 16,
        name: 'kkk',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 17,
        name: 'lll',    
        phone: '010-0101-0101',
        sex: 'female',
        age: 27,
        info: '',
    },
    {
        id: 18,
        name: 'mmm',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 19,
        name: 'nnn',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },
    {
        id: 20,
        name: 'ooo',    
        phone: '010-0101-0101',
        sex: 'male',
        age: 27,
        info: '',
    },

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
            }

            state.push(tempUser)
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer