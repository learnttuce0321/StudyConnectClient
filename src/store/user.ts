import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Sex = 'male' | 'female'
export interface User {
    num?: number;
    id: string
    name: string;
    phone: string;
    sex: Sex;
    age: number;
    info: string;
    studyId: string;
}
export interface SetUserDataPayload {
    users: Array<User>;
}
export interface InfoPaylaod {
    id: string;
    info: string
}
export interface AddUserPayload {
    id: string;
    name: string;
    phone: string;
    age: number
    sex: string;
    info: string;
    studyId: string;
}

const initialState: Array<User> = []


const userSlice = createSlice({
    name: 'user',
    initialState,
    // set/add/change-info user-data
    reducers: {
        SetUserData(state, action: PayloadAction<SetUserDataPayload>) {
            return action.payload.users
        },
        ChangeInfo(state, action: PayloadAction<InfoPaylaod>) {
            const {id, info}: InfoPaylaod = action.payload
            const matchedUserObj = state.find(user => user.id === id)
            if(matchedUserObj) {
                matchedUserObj!.info = info
            }
        },
        addUser(state, action: PayloadAction<AddUserPayload>) {
            const { id, name, phone, age, sex, info, studyId } = action.payload

            const tempUser: User = {
                id,
                name,
                phone,
                age,
                sex: sex as Sex, 
                info,
                studyId
            }
            state.push(tempUser)
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer