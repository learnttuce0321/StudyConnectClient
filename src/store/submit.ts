import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface Submit {
    num?: number;
    userId: string;
    assignmentId: string;
    isSubmitted: boolean;
    studyId: string;
}
export interface SetSubmitDataPayload {
    submits: Array<Submit>;
}
export interface CheckSubmitPayload {
    userId: string;
    assignmentId: string;
}
export interface AddSubmitPayload {
    submits: Array<Submit>
}
export interface AddSubmitPayloadByUser {
    submits: Array<Submit>
}
export interface DeleteSubmitPayload {
    assignmentId: string;
}

const initialState: Array<Submit> = []

const submitSlice = createSlice({
    name: 'submit',
    initialState,
    // set/add/add-user/delete/modify/check submit-data
    reducers: {
        SetSutmitData(state, action: PayloadAction<SetSubmitDataPayload>) {
            return action.payload.submits
        },
        AddSubmit(state, action: PayloadAction<AddSubmitPayload>) {
            const { submits } = action.payload

            for(let submit of submits) {
                state.push(submit)
            }
        },
        CheckSubmit(state, action: PayloadAction<CheckSubmitPayload>) {
            const { assignmentId, userId } = action.payload
            
            const matchedAssignmentObj = state.find(submit => {
                const condition = submit.assignmentId === assignmentId && submit.userId === userId
                return condition
            })

            if(matchedAssignmentObj) {
                matchedAssignmentObj!.isSubmitted = !matchedAssignmentObj.isSubmitted
            }
        },
        AddSubmitByUser(state, action: PayloadAction<AddSubmitPayloadByUser>) {
            const { submits } = action.payload

            for(let submit of submits) {
                state.push(submit)
            }
        },
        DeleteSubmit(state, action: PayloadAction<DeleteSubmitPayload>) {
            const { assignmentId } = action.payload

            const tempSubmits = state.filter(submit => submit.assignmentId !== assignmentId)
            return tempSubmits
        }
    }
})

export default submitSlice.reducer
export const submitActions = submitSlice.actions