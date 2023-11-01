import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Assignment } from "./assignment";

const initialState: any = {}

export interface SetClickedAssignmentPayload {
    assignment: Assignment | {} | undefined
}

const clickedAssignmentSlice = createSlice({
    name: 'clickedAssignment',
    initialState,
    reducers: {
        setClickedAssignment(state, action: PayloadAction<SetClickedAssignmentPayload>) {
            const { assignment } = action.payload
            return assignment
        }
    }   
})

export default clickedAssignmentSlice.reducer
export const clickedAssignmentActions = clickedAssignmentSlice.actions