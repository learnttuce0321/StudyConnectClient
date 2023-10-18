import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./user";

interface FilteredUser {
    filteredUser: Array<User>;
    isFiltering: boolean
}
const initialState: FilteredUser = {
    filteredUser: [],
    isFiltering: false
}

export interface FilteredUserPayoad {
    filteredUser: Array<User>;
    isFiltering: boolean
} 

const filteredUserSlice = createSlice({
    name: 'filteredUserSlice',
    initialState,
    reducers:{
        setFilteredUser(state, action: PayloadAction<FilteredUserPayoad>) {
            const { filteredUser, isFiltering } = action.payload

            return {filteredUser, isFiltering}
        },
    }
})

export default filteredUserSlice.reducer
export const filteredUserActions = filteredUserSlice.actions