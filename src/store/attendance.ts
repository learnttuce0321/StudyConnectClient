import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Schedule } from "./schedule";

export interface Attendance {
    scheduleId: string;
    userId: string;
    isAttended: boolean;
    studyId: string;
}
export interface SetAttendanceDataPayload { 
    attendanes: Array<Attendance>;
}
export interface addAttendancePayload {
    scheduleId: string;
    users: Array<User>;
    studyId: string;
}
export interface CheckAttendancePayload {
    scheduleId: string;
    userId: string;
}
export interface _AddAttendancePayload {
    schedules: Array<Schedule>;
    userId: string;
    studyId: string;
}
export interface _DeleteAttendancePayload {
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
        AddAttendance(state, action: PayloadAction<addAttendancePayload>) {
            
            const { users, scheduleId, studyId } = action.payload

            for(let user of users) {
                const tempAttendanceObj: Attendance = {
                    scheduleId,
                    userId: user.id,
                    isAttended: false,
                    studyId
                }
                state.push(tempAttendanceObj)
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
        _AddAttendance(state, action: PayloadAction<_AddAttendancePayload>) {
            const { schedules, userId, studyId } = action.payload

            for(let schedule of schedules) {
                const tempAttendanceObj: Attendance = {
                    scheduleId: schedule.id,
                    userId,
                    isAttended: false,
                    studyId
                }
                state.push(tempAttendanceObj)
            }
        },
        _DeleteAttendance(state, action: PayloadAction<_DeleteAttendancePayload>) {
            const { scheduleId } = action.payload

            const tempAttendaces = state.filter(attendance => attendance.scheduleId !== scheduleId)
            return tempAttendaces
        }
    }
})

export const attendanceActions = attendanceSlice.actions
export default attendanceSlice.reducer

