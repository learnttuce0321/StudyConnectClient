import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignmentData } from "../DummyData/assignmentData";

export interface Assignment {
    id: string;
    title: string;
    content: string
    deadLine: string;
    studyId: string;
}
export interface SetAssignmentDataPayload {
    assignments: Array<Assignment>;
}
export interface AddAssignmentPayload {
    id: string;
    title: string;
    content: string;
    deadLine: string;
    studyId: string;
}
export interface DeleteAssignmentPayload {
    id: string
}

export interface ModifyAssignmentPayload {
    id: string;
    title: string;
    content: string;
    deadLine: string;
}

const initialState: Array<Assignment> = []

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        SetAssignmentsData(state, action: PayloadAction<SetAssignmentDataPayload>) {
            return action.payload.assignments
        },
        AddAssignment(state, action: PayloadAction<AddAssignmentPayload>) {
            const { id, title, content, deadLine, studyId } = action.payload

            const nextAssignment = {
                id: id,
                title,
                content,
                deadLine,
                studyId
            }
            state.push(nextAssignment)

            // todos : 삭제
            assignmentData.push(nextAssignment)
        },
        DeleteAssignment(state, action: PayloadAction<DeleteAssignmentPayload>) {
            const { id } = action.payload

            const tempAssignments = state.filter(assignment => assignment.id !== id)
            return tempAssignments
        },
        ModifyAssignment(state, action: PayloadAction<ModifyAssignmentPayload>) {
            const { id, title, content, deadLine } = action.payload
            const matchedAssignmentObj = state.find(assignment => assignment.id === id)

            matchedAssignmentObj!.title = title
            matchedAssignmentObj!.content = content
            matchedAssignmentObj!.deadLine = deadLine
            
        }
    }
})

export const assignmentActions = assignmentSlice.actions
export default assignmentSlice.reducer