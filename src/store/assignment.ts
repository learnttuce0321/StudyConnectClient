import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
    id: number;
    title: string;
    content: string
    deadLine: string;
}
const initialState: Array<Assignment> = [
    {
        id: 1,
        title: '과제 1',
        content: 'asdf',
        deadLine: '2023 10 23'
    },
    {
        id: 2,
        title: '과제 2',
        content: 'asdf',
        deadLine: '2023 10 24'
    },
    {
        id: 3,
        title: '과제 3',
        content: 'asdf',
        deadLine: '2023 10 25'
    },
    {
        id: 4,
        title: '과제 4',
        content: 'asdf',
        deadLine: '2023 10 26'
    },
]

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {}
})

export const assignmentActions = assignmentSlice.actions
export default assignmentSlice.reducer
export type { Assignment }