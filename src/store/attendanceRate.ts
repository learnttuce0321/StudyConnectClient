import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Attendance } from "./attendance";

export interface AttendanceRate {
    userId: string;
    rate: string;
}
export interface CalculateAttendaceRatePayload {
    userValue: Array<User>;
    attendanceValue: Array<Attendance>
}
export interface _AddAttendanceRatePayload {
    userId: string;
}
const initialState: Array<AttendanceRate> = [
    {
        userId: '1',
        rate: '0.0'
    },
    {
        userId: '2',
        rate: '0.0'
    },
    {
        userId: '3',
        rate: '0.0'
    },
    {
        userId: '4',
        rate: '0.0'
    },
    {
        userId: '5',
        rate: '0.0'
    },
    {
        userId: '6',
        rate: '0.0'
    },
    {
        userId: '7',
        rate: '0.0'
    },
    {
        userId: '8',
        rate: '0.0'
    },
    {
        userId: '9',
        rate: '0.0'
    },
    {
        userId: '10',
        rate: '0.0'
    },
    {
        userId: '11',
        rate: '0.0'
    },
    {
        userId: '12',
        rate: '0.0'
    },
    {
        userId: '13',
        rate: '0.0'
    },
    {
        userId: '14',
        rate: '0.0'
    },
    {
        userId: '15',
        rate: '0.0'
    },
    {
        userId: '16',
        rate: '0.0'
    },
    {
        userId: '17',
        rate: '0.0'
    },
    {
        userId: '18',
        rate: '0.0'
    },
    {
        userId: '19',
        rate: '0.0'
    },
    {
        userId: '20',
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
                const totalCheckedAttendceLength: number = (userAttendances.filter(userAttendace => userAttendace.isAttended)).length
                const userAttendanceRate = (totalCheckedAttendceLength * 100 /userAttendanceLength).toFixed(1)

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