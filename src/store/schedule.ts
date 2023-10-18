import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// todos: date 어떻게 해야 할까?
// todos: time의 type 어떻게 해야 할까?
export interface Schedule {
    id: number;
    scheduleId: string;
    date: string;
    location: string;
    time: string;
}
export interface AddSchedulePayload {
    scheduleId: string;
    date: string;
    location: string;
    time: string;
}
export interface _DeleteSchedulePayload {
    scheduleId: string;
}
const initialState: Array<Schedule> = [
    {
        id: 1,
        scheduleId: '아니',
        date: '2023 10 15',
        location: '5',
        time: '00:00:00'
    },
    {
        id: 2,
        scheduleId: '이름',
        date: '2023 10 16',
        location: '4',
        time: '00:00:00'
    },
    {
        id: 3,
        scheduleId: '별로다',
        date: '2023 10 17',
        location: '3',
        time: '00:00:00'
    },
]

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        AddSchedule(state, action: PayloadAction<AddSchedulePayload>) {
            const { scheduleId, date, location, time } = action.payload
            const nextSchedule: Schedule = {
                id: state.length + 1,
                scheduleId,
                date,
                location,
                time
            }
            state.unshift(nextSchedule)
        },
        _DeleteSchedule(state, action: PayloadAction<_DeleteSchedulePayload>) {
            const { scheduleId } = action.payload

            const tempSchedules = state.filter(schedule => schedule.scheduleId !== scheduleId)
            return tempSchedules
        },
        _ModifySchedule(state, action: PayloadAction<AddSchedulePayload>) {
            const { scheduleId, date, location, time } = action.payload
            const matchedScheduleObj = state.find(schedule => schedule.scheduleId === scheduleId)

            matchedScheduleObj!.date = date
            matchedScheduleObj!.time = time
            matchedScheduleObj!.location = location
        }
    }
})

export const scheduleActions = scheduleSlice.actions
export default scheduleSlice.reducer