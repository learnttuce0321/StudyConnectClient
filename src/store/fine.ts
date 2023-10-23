import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

export interface Fine {
    id: string;
    userId: string;
    deadLine: string;
    fine: number;
    isPaid: boolean;
    studyId: string;
}
export interface SetFineDataPayload {
    fines: Array<Fine>;
}
export interface CheckFinePayload {
    id: string;
}
export interface AddFinePayload {
    userId: string;
    deadLine: string;
    fine: number;
    studyId: string;
}
export interface DeleteFinePayload {
    id: string;
}
export interface ModifyFinePayload {
    id: string;
    deadLine: string;
    fine: number;
}
const initialState: Array<Fine> = []

const fineSlice = createSlice({
    name: 'fine',
    initialState,
    reducers: {
        SetFineData(state, action: PayloadAction<SetFineDataPayload>) {
            return action.payload.fines
        },
        CheckFine(state, action: PayloadAction<CheckFinePayload>) {
            const { id } = action.payload

            const matchedFineObj = state.find(fine => fine.id === id)
            matchedFineObj!.isPaid = !matchedFineObj!.isPaid
        },
        AddFine(state, action: PayloadAction<AddFinePayload>) {
            const { userId, deadLine, fine, studyId } = action.payload
            
            const tempFineObj: Fine = {
                id: uuidv4(),
                userId,
                deadLine,
                fine,
                isPaid: false,
                studyId
            }
            state.push(tempFineObj)
        },
        DeleteFine(state, action: PayloadAction<DeleteFinePayload>) {
            const { id } = action.payload

            const tempFines = state.filter(fine => fine.id !== id)
            return tempFines
        },
        ModifyFine(state, action: PayloadAction<ModifyFinePayload>) {
            const { id, deadLine, fine } = action.payload

            const matchedFineObj = state.find(fine => fine.id === id)
            matchedFineObj!.deadLine = deadLine
            matchedFineObj!.fine = fine
        }
    }
})

export default fineSlice.reducer
export const fineActions = fineSlice.actions