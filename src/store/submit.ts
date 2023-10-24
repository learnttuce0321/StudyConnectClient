import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from './user';
import { Assignment } from './assignment';
import { submitData } from '../DummyData/submitData';
export interface Submit {
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
    users: Array<User>;
    assignmentId: string;
    studyId: string;
}
export interface _AddSubmitPayload {
    assignments: Array<Assignment>;
    userId: string;
    studyId: string;
}

export interface DeleteSubmitPayload {
    assignmentId: string;
}

const initialState: Array<Submit> = []

const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        SetSutmitData(state, action: PayloadAction<SetSubmitDataPayload>) {
            return action.payload.submits
        },
        AddSubmit(state, action: PayloadAction<AddSubmitPayload>) {
            const { users, assignmentId, studyId } = action.payload

            for(let user of users) {
                const tempSubmitObj: Submit = {
                    userId: user.id,
                    assignmentId,
                    isSubmitted: false,
                    studyId
                }
                state.push(tempSubmitObj)

                // todos : 삭제
                submitData.push(tempSubmitObj)
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
        _AddSubmit(state, action) {
            const { assignments, userId, studyId } = action.payload

            for(let assignment of assignments) {
                const tempSubmitObj: Submit = {
                    assignmentId: assignment.id,
                    userId,
                    isSubmitted: false,
                    studyId
                }
                state.push(tempSubmitObj)

                // todos : 삭제
                submitData.push(tempSubmitObj)
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