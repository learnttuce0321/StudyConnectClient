import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Study {
    id: string;
    name: string;
}
export interface SetStudyDataPayload {
    studies: Array<Study>;
}
const initialState: Array<Study> = []

const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        SetStudyData(state, action: PayloadAction<SetStudyDataPayload>) {
            return action.payload.studies
        } 
    }
})

export default studySlice.reducer
export const studyActions = studySlice.actions