import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { scheduleData } from "../DummyData/scheduleData";

export interface Schedule {
    id: string;
    name: string;
    date: string;
    location: string;
    time: string;
    studyId: string;
}
export interface SetScheduleDataPayload {
    schedules: Array<Schedule>;
} 
export interface AddSchedulePayload {
    id: string;
    name: string;
    date: string;
    location: string;
    time: string;
    studyId: string;
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

const initialState: Array<Schedule> = []

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        SetSchduleData(state, action: PayloadAction<SetScheduleDataPayload>) {
            return action.payload.schedules
        },
        AddSchedule(state, action: PayloadAction<AddSchedulePayload>) {
            const { id, name, date, location, time, studyId } = action.payload
            const nextSchedule: Schedule = {
                id,
                name,
                date,
                location,
                time,
                studyId
            }
            state.push(nextSchedule)

            // todos : 삭제
            scheduleData.push(nextSchedule)
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