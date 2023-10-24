import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Study {
    id: string;
    name: string;
}
export interface SetStudyDataPayload {
    studies: Array<Study>;
}
export interface AddStudyPayload {
    id: string;
    name: string;
}
const initialState: Array<Study> = []

const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        SetStudyData(state, action: PayloadAction<SetStudyDataPayload>) {
            return action.payload.studies
        },
        AddStudy(state, action: PayloadAction<AddStudyPayload>) {
            const { id, name } = action.payload

            const tempStudyObj: Study = {
                id,
                name,
            }
            state.unshift(tempStudyObj)
        }
    }
})

export default studySlice.reducer
export const studyActions = studySlice.actions