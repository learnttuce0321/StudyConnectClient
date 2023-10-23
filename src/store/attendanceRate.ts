import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Attendance } from "./attendance";

export interface AttendanceRate {
    userId: string;
    rate: string;
    studyId: string;
}
export interface SetAttendanceRateDataPayload {
    attendanceRates: Array<AttendanceRate>;
}
export interface CalculateAttendaceRatePayload {
    userValue: Array<User>;
    attendanceValue: Array<Attendance>
    studyId: string;
}
export interface _AddAttendanceRatePayload {
    userId: string;
    studyId: string;
}
const initialState: Array<AttendanceRate> = []

const attendanceRateSlice = createSlice({
    name: 'attendanceRate',
    initialState,
    reducers: {
        SetAttendanceRateData(state, action: PayloadAction<SetAttendanceRateDataPayload>) {
            return  action.payload.attendanceRates
        },
        CalculateAttendanceRate(state, action: PayloadAction<CalculateAttendaceRatePayload>) {
            const { userValue, attendanceValue, studyId } = action.payload

            const tempState: Array<AttendanceRate> = []
            
            for(let user of userValue) {
                const userAttendances: Array<Attendance> = attendanceValue.filter(attendance => attendance.userId === user.id)
                const userAttendanceLength: number = userAttendances.length
                const totalCheckedAttendceLength: number = (userAttendances.filter(userAttendace => userAttendace.isAttended)).length
                const userAttendanceRate = (totalCheckedAttendceLength * 100 /userAttendanceLength).toFixed(1)

                const AttendanceRateObj: AttendanceRate = {
                    userId: user.id,
                    rate: userAttendanceRate,
                    studyId
                }
                tempState.push(AttendanceRateObj)
            }
            return tempState
        },
        _AddAttendanceRate(state, action: PayloadAction<_AddAttendanceRatePayload>) {
            const { userId, studyId } = action.payload

            const tempAttendanceRateObj: AttendanceRate = {
                userId,
                rate: '0.0',
                studyId
            }
            state.push(tempAttendanceRateObj)
        }
    }
})

export const attendanceRateActions = attendanceRateSlice.actions
export default attendanceRateSlice.reducer