import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Schedule } from "./schedule";

export interface Attendance {
    id: number;
    scheduleId: string;
    date: string;
    userId: number;
    isAttended: boolean;
}

export interface addAttendancePayload {
    scheduleId: string;
    date: string;
    users: Array<User>;
}
export interface ChangeAttendancePayload {
    scheduleId: string;
    userId: number;
}
export interface _AddAttendancePayload {
    schedules: Array<Schedule>;
    userId: number;
}
export interface _DeleteAttendancePayload {
    scheduleId: string;
}

const initialState: Array<Attendance> = [
    {
        id: 1,
        scheduleId: '아니',
        date: '2023 10 15',
        userId: 1,
        isAttended: false
    },
    {
        id: 2,
        scheduleId: '아니',
        date: '2023 10 15',
        userId: 2,
        isAttended: false
    },
    {
        id: 3,
        scheduleId: '아니',
        date: '2023 10 15',
        userId: 3,
        isAttended: false
    },
    {
        id: 4,
        scheduleId: '아니',
        date: '2023 10 15',
        userId: 4,
        isAttended: false
    },
    {
        id: 5,
        scheduleId: '아니',
        date: '2023 10 15',
        userId: 5,
        isAttended: false
    },
    {
        id: 6,
        scheduleId: '이름',
        date: '2023 10 16',
        userId: 1,
        isAttended: false
    },
    {
        id: 7,
        scheduleId: '이름',
        date: '2023 10 16',
        userId: 2,
        isAttended: false
    },
    {
        id: 8,
        scheduleId: '이름',
        date: '2023 10 16',
        userId: 3,
        isAttended: false
    },
    {
        id: 9,
        scheduleId: '이름',
        date: '2023 10 16',
        userId: 4,
        isAttended: false
    },
    {
        id: 10,
        scheduleId: '이름',
        date: '2023 10 16',
        userId: 5,
        isAttended: true
    },
    {
        id: 11,
        scheduleId: '별로다',
        date: '2023 10 17',
        userId: 1,
        isAttended: false
    },
    {
        id: 12,
        scheduleId: '별로다',
        date: '2023 10 17',
        userId: 2,
        isAttended: false
    },
    {
        id: 13,
        scheduleId: '별로다',
        date: '2023 10 17',
        userId: 3,
        isAttended: false
    },
    {
        id: 14,
        scheduleId: '별로다',
        date: '2023 10 17',
        userId: 4,
        isAttended: false
    },
    {
        id: 15,
        scheduleId: '별로다',
        date: '2023 10 17',
        userId: 5,
        isAttended: false
    },    
]

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        AddAttendance(state, action: PayloadAction<addAttendancePayload>) {
            const { scheduleId, users, date } = action.payload

            for(let user of users) {
                const tempAttendanceObj: Attendance = {
                    id: state.length + 1,
                    scheduleId,
                    date,
                    userId: user.id,
                    isAttended: false
                }
                state.push(tempAttendanceObj)
            }
        },
        checkAttendance(state, action: PayloadAction<ChangeAttendancePayload>) {
            const { scheduleId, userId } = action.payload
            
            const matchedAttendanceObj = state.find(attendance => {
                const findAttendanceObjCondition = attendance.scheduleId === scheduleId && attendance.userId === userId

                return findAttendanceObjCondition
            })  

            if(matchedAttendanceObj) {
                matchedAttendanceObj!.isAttended = !matchedAttendanceObj.isAttended
            }
        },
        _AddAttendance(state, action: PayloadAction<_AddAttendancePayload>) {
            const { schedules, userId } = action.payload

            for(let schedule of schedules) {
                const tempAttendanceObj: Attendance = {
                    id: state.length + 1,
                    scheduleId: schedule.scheduleId,
                    date: schedule.date,
                    userId,
                    isAttended: false
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