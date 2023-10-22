import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from "./user";
import type { Schedule } from "./schedule";

export interface Attendance {
    // id: string;
    scheduleId: string;
    userId: string;
    isAttended: boolean;
}

export interface addAttendancePayload {
    scheduleId: string;
    users: Array<User>;
}
export interface CheckAttendancePayload {
    scheduleId: string;
    userId: string;
}
export interface _AddAttendancePayload {
    schedules: Array<Schedule>;
    userId: string;
}
export interface _DeleteAttendancePayload {
    scheduleId: string;
}

const initialState: Array<Attendance> = [
    {   
        // id: '1',
        scheduleId: '1',
        userId: '1',
        isAttended: true
    },
    {
        // id: '2',
        scheduleId: '1',
        userId: '2',
        isAttended: true
    },
    {
        // id: '3',
        scheduleId: '1',
        userId: '3',
        isAttended: true
    },
    {
        // id: '4',
        scheduleId: '1',
        userId: '4',
        isAttended: true
    },
    {
        // id: '5',
        scheduleId: '1',
        userId: '5',
        isAttended: true
    },
    {
        // id: '6',
        scheduleId: '1',
        userId: '6',
        isAttended: true
    },
    {
        // id: '7',
        scheduleId: '1',
        userId: '7',
        isAttended: true
    },
    {
        // id: '8',
        scheduleId: '1',
        userId: '8',
        isAttended: true
    },
    {
        // id: '9',
        scheduleId: '1',
        userId: '9',
        isAttended: true
    },
    {
        // id: '10',
        scheduleId: '1',
        userId: '10',
        isAttended: true
    },
    {
        // id: '11',
        scheduleId: '1',
        userId: '11',
        isAttended: true
    },
    {
        // id: '12',
        scheduleId: '1',
        userId: '12',
        isAttended: true
    },
    {
        // id: '13',
        scheduleId: '1',
        userId: '13',
        isAttended: true
    },
    {
        // id: '14',
        scheduleId: '1',
        userId: '14',
        isAttended: true
    },
    {
        // id: '15',
        scheduleId: '1',
        userId: '15',
        isAttended: true
    },
    {
        // id: '16',
        scheduleId: '1',
        userId: '16',
        isAttended: true
    },
    {
        // id: '17',
        scheduleId: '1',
        userId: '17',
        isAttended: true
    },
    {
        // id: '18',
        scheduleId: '1',
        userId: '18',
        isAttended: true
    },
    {
        // id: '19',
        scheduleId: '1',
        userId: '19',
        isAttended: true
    },
    {
        // id: '20',
        scheduleId: '1',
        userId: '20',
        isAttended: true
    },
    {
        // id: '21',
        scheduleId: '2',
        userId: '1',
        isAttended: true
    },
    {
        // id: '22',
        scheduleId: '2',
        userId: '2',
        isAttended: true
    },
    {
        // id: '23',
        scheduleId: '2',
        userId: '3',
        isAttended: true
    },
    {
        // id: '24',
        scheduleId: '2',
        userId: '4',
        isAttended: true
    },
    {
        // id: '25',
        scheduleId: '2',
        userId: '5',
        isAttended: true
    },
    {
        // id: '26',
        scheduleId: '2',
        userId: '6',
        isAttended: true
    },
    {
        // id: '27',
        scheduleId: '2',
        userId: '7',
        isAttended: true
    },
    {
        // id: '28',
        scheduleId: '2',
        userId: '8',
        isAttended: true
    },
    {
        // id: '29',
        scheduleId: '2',
        userId: '9',
        isAttended: true
    },
    {
        // id: '30',
        scheduleId: '2',
        userId: '10',
        isAttended: true
    },
    {
        // id: '31',
        scheduleId: '2',
        userId: '11',
        isAttended: true
    },
    {
        // id: '32',
        scheduleId: '2',
        userId: '12',
        isAttended: true
    },
    {
        // id: '33',
        scheduleId: '2',
        userId: '13',
        isAttended: true
    },
    {
        // id: '34',
        scheduleId: '2',
        userId: '14',
        isAttended: true
    },
    {
        // id: '35',
        scheduleId: '2',
        userId: '15',
        isAttended: true
    },
    {
        // id: '36',
        scheduleId: '2',
        userId: '16',
        isAttended: true
    },
    {
        // id: '37',
        scheduleId: '2',
        userId: '17',
        isAttended: true
    },
    {
        // id: '38',
        scheduleId: '2',
        userId: '18',
        isAttended: true
    },
    {
        // id: '39',
        scheduleId: '2',
        userId: '19',
        isAttended: true
    },
    {
        // id: '40',
        scheduleId: '2',
        userId: '20',
        isAttended: true
    },
    {
        // id: '41',
        scheduleId: '3',
        userId: '1',
        isAttended: true
    },
    {
        // id: '42',
        scheduleId: '3',
        userId: '2',
        isAttended: true
    },
    {
        // id: '43',
        scheduleId: '3',
        userId: '3',
        isAttended: true
    },
    {
        // id: '44',
        scheduleId: '3',
        userId: '4',
        isAttended: true
    },
    {
        // id: '45',
        scheduleId: '3',
        userId: '5',
        isAttended: true
    },
    {
        // id: '46',
        scheduleId: '3',
        userId: '6',
        isAttended: true
    },
    {
        // id: '47',
        scheduleId: '3',
        userId: '7',
        isAttended: true
    },
    {
        // id: '48',
        scheduleId: '3',
        userId: '8',
        isAttended: true
    },
    {
        // id: '49',
        scheduleId: '3',
        userId: '9',
        isAttended: true
    },
    {
        // id: '50',
        scheduleId: '3',
        userId: '10',
        isAttended: true
    },
    {
        // id: '51',
        scheduleId: '3',
        userId: '11',
        isAttended: true
    },
    {
        // id: '52',
        scheduleId: '3',
        userId: '12',
        isAttended: true
    },
    {
        // id: '53',
        scheduleId: '3',
        userId: '13',
        isAttended: true
    },
    {
        // id: '54',
        scheduleId: '3',
        userId: '14',
        isAttended: false
    },
    {
        // id: '55',
        scheduleId: '3',
        userId: '15',
        isAttended: false
    },
    {
        // id: '56',
        scheduleId: '3',
        userId: '16',
        isAttended: false
    },
    {
        // id: '57',
        scheduleId: '3',
        userId: '17',
        isAttended: false
    },
    {
        // id: '58',
        scheduleId: '3',
        userId: '18',
        isAttended: false
    },
    {
        // id: '59',
        scheduleId: '3',
        userId: '19',
        isAttended: false
    },
    {
        // id: '60',
        scheduleId: '3',
        userId: '20',
        isAttended: false
    },
    {
        // id: '61',
        scheduleId: '4',
        userId: '1',
        isAttended: false
    },
    {
        // id: '62',
        scheduleId: '4',
        userId: '2',
        isAttended: false
    },
    {
        // id: '63',
        scheduleId: '4',
        userId: '3',
        isAttended: false
    },
    {
        // id: '64',
        scheduleId: '4',
        userId: '4',
        isAttended: false
    },
    {
        // id: '65',
        scheduleId: '4',
        userId: '5',
        isAttended: false
    },
    {
        // id: '66',
        scheduleId: '4',
        userId: '6',
        isAttended: false
    },
    {
        // id: '67',
        scheduleId: '4',
        userId: '7',
        isAttended: false
    },
    {
        // id: '68',
        scheduleId: '4',
        userId: '8',
        isAttended: false
    },
    {
        // id: '69',
        scheduleId: '4',
        userId: '9',
        isAttended: false
    },
    {
        // id: '70',
        scheduleId: '4',
        userId: '10',
        isAttended: false
    },
    {
        // id: '71',
        scheduleId: '4',
        userId: '11',
        isAttended: false
    },
    {
        // id: '72',
        scheduleId: '4',
        userId: '12',
        isAttended: false
    },
    {
        // id: '73',
        scheduleId: '4',
        userId: '13',
        isAttended: false
    },
    {
        // id: '74',
        scheduleId: '4',
        userId: '14',
        isAttended: false
    },
    {
        // id: '75',
        scheduleId: '4',
        userId: '15',
        isAttended: false
    },
    {
        // id: '76',
        scheduleId: '4',
        userId: '16',
        isAttended: false
    },
    {
        // id: '77',
        scheduleId: '4',
        userId: '17',
        isAttended: false
    },
    {
        // id: '78',
        scheduleId: '4',
        userId: '18',
        isAttended: false
    },
    {
        // id: '79',
        scheduleId: '4',
        userId: '19',
        isAttended: false
    },
    {
        // id: '80',
        scheduleId: '4',
        userId: '20',
        isAttended: false
    },
    {
        // id: '81',
        scheduleId: '5',
        userId: '1',
        isAttended: false
    },
    {
        // id: '82',
        scheduleId: '5',
        userId: '2',
        isAttended: false
    },
    {
        // id: '83',
        scheduleId: '5',
        userId: '3',
        isAttended: false
    },
    {
        // id: '84',
        scheduleId: '5',
        userId: '4',
        isAttended: false
    },
    {
        // id: '85',
        scheduleId: '5',
        userId: '5',
        isAttended: false
    },
    {
        // id: '86',
        scheduleId: '5',
        userId: '6',
        isAttended: false
    },
    {
        // id: '87',
        scheduleId: '5',
        userId: '7',
        isAttended: false
    },
    {
        // id: '88',
        scheduleId: '5',
        userId: '8',
        isAttended: false
    },
    {
        // id: '89',
        scheduleId: '5',
        userId: '9',
        isAttended: false
    },
    {
        // id: '90',
        scheduleId: '5',
        userId: '10',
        isAttended: false
    },
    {
        // id: '91',
        scheduleId: '5',
        userId: '11',
        isAttended: false
    },
    {
        // id: '92',
        scheduleId: '5',
        userId: '12',
        isAttended: false
    },
    {
        // id: '93',
        scheduleId: '5',
        userId: '13',
        isAttended: false
    },
    {
        // id: '94',
        scheduleId: '5',
        userId: '14',
        isAttended: false
    },
    {
        // id: '95',
        scheduleId: '5',
        userId: '15',
        isAttended: false
    },
    {
        // id: '96',
        scheduleId: '5',
        userId: '16',
        isAttended: false
    },
    {
        // id: '97',
        scheduleId: '5',
        userId: '17',
        isAttended: false
    },
    {
        // id: '98',
        scheduleId: '5',
        userId: '18',
        isAttended: false
    },
    {
        // id: '99',
        scheduleId: '5',
        userId: '19',
        isAttended: false
    },
    {
        // id: '100',
        scheduleId: '5',
        userId: '20',
        isAttended: false
    }
]

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        AddAttendance(state, action: PayloadAction<addAttendancePayload>) {
            
            const { users, scheduleId } = action.payload

            for(let user of users) {
                const tempAttendanceObj: Attendance = {
                    // id: state.length + 1,
                    scheduleId,
                    userId: user.id,
                    isAttended: false
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
            const { schedules, userId } = action.payload

            for(let schedule of schedules) {
                const tempAttendanceObj: Attendance = {
                    // id: state.length + 1,
                    scheduleId: schedule.id,
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

