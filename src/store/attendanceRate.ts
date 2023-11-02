import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AttendanceRate {
    id?: number;
    userId: string;
    rate: string;
    studyId: string;
}
export interface SetAttendanceRateDataPayload {
    attendanceRates: Array<AttendanceRate>;
}
export interface CalculateAttendaceRatePayload {
    userAttendanceRate: AttendanceRate
}
export interface CalculateAllAttendanceRatePayload {
    attendanceRates: Array<AttendanceRate>
}
export interface AddAttendanceRatePayload {
    attendanceRate: AttendanceRate;
}
const initialState: Array<AttendanceRate> = []

const attendanceRateSlice = createSlice({
    name: 'attendanceRate',
    initialState,
    // set/add/calculate/calculate-all attendance-rate-data
    reducers: {
        SetAttendanceRateData(state, action: PayloadAction<SetAttendanceRateDataPayload>) {
            return  action.payload.attendanceRates
        },
        CalculateAttendanceRate(state, action: PayloadAction<CalculateAttendaceRatePayload>) {
            const { userAttendanceRate } = action.payload

            const matchedAttendanceRateObj = state.find(attendanceRate => attendanceRate.userId === userAttendanceRate.userId)
            matchedAttendanceRateObj!.rate = userAttendanceRate.rate
        },
        CalculateAllAttendanceRate(state, action: PayloadAction<CalculateAllAttendanceRatePayload>) {
            const { attendanceRates } = action.payload

            for(let userAttendanceRate of attendanceRates) {
                const matchedAttendanceRateObj = state.find(attendanceRate => attendanceRate.userId === userAttendanceRate.userId)

                matchedAttendanceRateObj!.rate = userAttendanceRate.rate
            }
        },
        AddAttendanceRate(state, action: PayloadAction<AddAttendanceRatePayload>) {
            const { attendanceRate } = action.payload

            state.push(attendanceRate)
        }
    }
})

export const attendanceRateActions = attendanceRateSlice.actions
export default attendanceRateSlice.reducer