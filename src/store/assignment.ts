import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Assignment {
    id: string;
    title: string;
    content: string
    deadLine: string;
}
export interface AddAssignmentPayload {
    id: string;
    title: string;
    content: string;
    deadLine: string;
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

const initialState: Array<Assignment> = [
    {
        id: '1',
        title: '과제 1',
        content: 'asdf',
        deadLine: '2023 10 23'
    },
    {
        id: '2',
        title: '과제 2',
        content: 'asdf',
        deadLine: '2023 10 24'
    },
    {
        id: '3',
        title: '과제 3',
        content: 'asdf',
        deadLine: '2023 10 25'
    },
    {
        id: '4',
        title: '과제 4',
        content: 'asdf',
        deadLine: '2023 10 26'
    },
]

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        AddAssignment(state, action: PayloadAction<AddAssignmentPayload>) {
            const { id, title, content, deadLine } = action.payload

            const nextAssignment = {
                id: id,
                title,
                content,
                deadLine
            }
            state.push(nextAssignment)
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