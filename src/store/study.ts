import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Study {
    num?: number;
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
    // set study-data
    reducers: {
        SetStudyData(state, action: PayloadAction<SetStudyDataPayload>) {
            return action.payload.studies
        }
    }
})

export default studySlice.reducer
export const studyActions = studySlice.actions