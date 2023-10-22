import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Schedule {
    id: string;
    name: string;
    date: string;
    location: string;
    time: string;
}
export interface AddSchedulePayload {
    id: string;
    name: string;
    date: string;
    location: string;
    time: string;
}
export interface _DeleteSchedulePayload {
    id: string;
}
export interface ModifySchedulePayload {
    id: string;
    name: string;
    date: string;
    location: string;
    time: string;
}

const initialState: Array<Schedule> = [
    {
        id: '1',
        name: '일정 1',
        date: '2023 10 15',
        location: '1',
        time: '00:00:00'
    },
    {
        id: '2',
        name: '일정 2',
        date: '2023 10 16',
        location: '2',
        time: '00:00:00'
    },
    {
        id: '3',
        name: '일정 3',
        date: '2023 10 17',
        location: '3',
        time: '00:00:00'
    },
    {
        id: '4',
        name: '일정 4',
        date: '2023 10 18',
        location: '4',
        time: '00:00:00'
    },
    {
        id: '5',
        name: '일정 5',
        date: '2023 10 18',
        location: '5',
        time: '00:00:00'
    },
]

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        AddSchedule(state, action: PayloadAction<AddSchedulePayload>) {
            const { id, name, date, location, time } = action.payload
            const nextSchedule: Schedule = {
                id,
                name,
                date,
                location,
                time
            }
            state.unshift(nextSchedule)
        },
        _DeleteSchedule(state, action: PayloadAction<_DeleteSchedulePayload>) {
            const { id } = action.payload

            const tempSchedules = state.filter(schedule => schedule.id !== id)
            return tempSchedules
        },
        _ModifySchedule(state, action: PayloadAction<ModifySchedulePayload>) {
            const { id, name, date, location, time } = action.payload
            const matchedScheduleObj = state.find(schedule => schedule.id === id)

            matchedScheduleObj!.name = name
            matchedScheduleObj!.date = date
            matchedScheduleObj!.time = time
            matchedScheduleObj!.location = location
        }
    }
})

export const scheduleActions = scheduleSlice.actions
export default scheduleSlice.reducer