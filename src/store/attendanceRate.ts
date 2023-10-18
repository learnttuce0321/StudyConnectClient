import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Attendance } from "./attendance";

interface AttendanceRate {
    userId: number;
    rate: string;
}
export interface CalculateAttendaceRatePayload {
    userValue: Array<User>;
    attendanceValue: Array<Attendance>
}
export interface _AddAttendanceRatePayload {
    userId: number;
}
const initialState: Array<AttendanceRate> = [
    {
        userId: 1,
        rate: '0.0'
    },
    {
        userId: 2,
        rate: '0.0'
    },
    {
        userId: 3,
        rate: '0.0'
    },
    {
        userId: 4,
        rate: '0.0'
    },
    {
        userId: 5,
        rate: '0.0'
    }
]

const attendanceRateSlice = createSlice({
    name: 'attendanceRate',
    initialState,
    reducers: {
        CalculateAttendanceRate(state, action: PayloadAction<CalculateAttendaceRatePayload>) {
            const { userValue, attendanceValue } = action.payload

            const tempState: Array<AttendanceRate> = []
            
            for(let user of userValue) {
                const userAttendances: Array<Attendance> = attendanceValue.filter(attendance => attendance.userId === user.id)
                const userAttendanceLength: number = userAttendances.length
                const totalAttendce: number = (userAttendances.filter(userAttendace => userAttendace.isAttended)).length
                const userAttendanceRate = (totalAttendce * 100 /userAttendanceLength).toFixed(1)

                const AttendanceRateObj: AttendanceRate = {
                    userId: user.id,
                    rate: userAttendanceRate
                }
                tempState.push(AttendanceRateObj)
            }
            return tempState
        },
        _AddAttendanceRate(state, action: PayloadAction<_AddAttendanceRatePayload>) {
            const { userId } = action.payload

            const tempAttendanceRateObj: AttendanceRate = {
                userId,
                rate: '0.0'
            }
            state.push(tempAttendanceRateObj)
        }
    }
})

export const attendanceRateActions = attendanceRateSlice.actions
export default attendanceRateSlice.reducer