import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Schedule } from "./schedule";
import { attendanceData } from "../DummyData/attendanceData";

export interface Attendance {
    id?: number;
    scheduleId: string;
    userId: string;
    isAttended: boolean;
    studyId: string;
}
export interface SetAttendanceDataPayload { 
    attendanes: Array<Attendance>;
}
export interface AddAttendanceByschedulePayload {
    attendances: Array<Attendance>
}
export interface CheckAttendancePayload {
    scheduleId: string;
    userId: string;
}
export interface AddAttendanceByUserPayload {
    attendances: Array<Attendance>
}
export interface DeleteAttendancePayload {
    scheduleId: string;
}

const initialState: Array<Attendance> = []

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        SetAttendanceData(state, action: PayloadAction<SetAttendanceDataPayload>) {
            return action.payload.attendanes
        },
        AddAttendance(state, action: PayloadAction<AddAttendanceByschedulePayload>) {
            const { attendances } = action.payload

            for(let attendance of attendances) {
                state.push(attendance)
            }
        },
        checkAttendance(state, action: PayloadAction<CheckAttendancePayload>) {
            const { scheduleId, userId } = action.payload
            
            const matchedAttendanceObj = state.find(attendance => {
                const condition = attendance.scheduleId === scheduleId && attendance.userId === userId

                return condition
            })  

            if(matchedAttendanceObj) {
                matchedAttendanceObj!.isAttended = !matchedAttendanceObj.isAttended
            }
        },
        AddAttendanceByUser(state, action: PayloadAction<AddAttendanceByUserPayload>) {
            const { attendances } = action.payload

            for(let attendance of attendances) {
                state.push(attendance)
            }
        },
        _DeleteAttendance(state, action: PayloadAction<DeleteAttendancePayload>) {
            const { scheduleId } = action.payload

            const tempAttendaces = state.filter(attendance => attendance.scheduleId !== scheduleId)
            return tempAttendaces
        }
    }
})

export const attendanceActions = attendanceSlice.actions
export default attendanceSlice.reducer

