import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from './user';
import { Assignment } from './assignment';
import { v4 as uuidv4 } from 'uuid'
export interface Submit {
    // id: string;
    userId: string;
    assignmentId: string;
    isSubmitted: boolean;
}
export interface CheckSubmitPayload {
    userId: string;
    assignmentId: string;
}
export interface AddSubmitPayload {
    users: Array<User>;
    assignmentId: string;
}
export interface _AddSubmitPayload {
    assignments: Array<Assignment>;
    userId: string
}

export interface DeleteSubmitPayload {
    assignmentId: string
}

const initialState: Array<Submit> = [
    {
        // id: '1',
        userId: '1',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '2',
        userId: '2',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '3',
        userId: '3',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '4',
        userId: '4',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '5',
        userId: '5',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '6',
        userId: '6',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '7',
        userId: '7',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '8',
        userId: '8',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '9',
        userId: '9',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '10',
        userId: '10',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '11',
        userId: '11',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '12',
        userId: '12',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '13',
        userId: '13',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '14',
        userId: '14',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '15',
        userId: '15',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '16',
        userId: '16',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '17',
        userId: '17',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '18',
        userId: '18',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '19',
        userId: '19',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '20',
        userId: '20',
        assignmentId: '1',
        isSubmitted: true
    },
    {
        // id: '21',
        userId: '1',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '22',
        userId: '2',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '23',
        userId: '3',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '24',
        userId: '4',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '25',
        userId: '5',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '26',
        userId: '6',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '27',
        userId: '7',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '28',
        userId: '8',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '29',
        userId: '9',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '30',
        userId: '10',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '31',
        userId: '11',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '32',
        userId: '12',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '33',
        userId: '13',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '34',
        userId: '14',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '35',
        userId: '15',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '36',
        userId: '16',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '37',
        userId: '17',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '38',
        userId: '18',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '39',
        userId: '19',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '40',
        userId: '20',
        assignmentId: '2',
        isSubmitted: true
    },
    {
        // id: '41',
        userId: '1',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '42',
        userId: '2',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '43',
        userId: '3',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '44',
        userId: '4',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '45',
        userId: '5',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '46',
        userId: '6',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '47',
        userId: '7',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '48',
        userId: '8',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '49',
        userId: '9',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '50',
        userId: '10',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '51',
        userId: '11',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '52',
        userId: '12',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '53',
        userId: '13',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '54',
        userId: '14',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '55',
        userId: '15',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '56',
        userId: '16',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '57',
        userId: '17',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '58',
        userId: '18',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '59',
        userId: '19',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '60',
        userId: '20',
        assignmentId: '3',
        isSubmitted: true
    },
    {
        // id: '61',
        userId: '1',
        assignmentId: '4',
        isSubmitted: true
    },
    {
        // id: '62',
        userId: '2',
        assignmentId: '4',
        isSubmitted: true
    },
    {
        // id: '63',
        userId: '3',
        assignmentId: '4',
        isSubmitted: true
    },
    {
        // id: '64',
        userId: '4',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '65',
        userId: '5',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '66',
        userId: '6',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '67',
        userId: '7',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '68',
        userId: '8',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '69',
        userId: '9',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '70',
        userId: '10',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '71',
        userId: '11',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '72',
        userId: '12',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '73',
        userId: '13',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '74',
        userId: '14',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '75',
        userId: '15',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '76',
        userId: '16',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '77',
        userId: '17',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '78',
        userId: '18',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '79',
        userId: '19',
        assignmentId: '4',
        isSubmitted: false
    },
    {
        // id: '80',
        userId: '20',
        assignmentId: '4',
        isSubmitted: false
    }
]

const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        AddSubmit(state, action: PayloadAction<AddSubmitPayload>) {
            const { users, assignmentId } = action.payload

            for(let user of users) {
                const tempSubmitObj: Submit = {
                    // id: users.length + 1,
                    userId: user.id,
                    assignmentId,
                    isSubmitted: false
                }
                state.push(tempSubmitObj)
            }
        },
        CheckSubmit(state, action: PayloadAction<CheckSubmitPayload>) {
            const { assignmentId, userId } = action.payload
            
            const matchedAssignmentObj = state.find(submit => {
                const condition = submit.assignmentId === assignmentId && submit.userId === userId
                return condition
            })

            if(matchedAssignmentObj) {
                matchedAssignmentObj!.isSubmitted = !matchedAssignmentObj.isSubmitted
            }
        },
        _AddSubmit(state, action) {
            const { assignments, userId } = action.payload

            for(let assignment of assignments) {
                const tempSubmitObj: Submit = {
                    // id: assignments.length + 1,
                    assignmentId: assignment.id,
                    userId,
                    isSubmitted: false
                }
                state.push(tempSubmitObj)
            }
        },
        DeleteSubmit(state, action: PayloadAction<DeleteSubmitPayload>) {
            const { assignmentId } = action.payload

            const tempSubmits = state.filter(submit => submit.assignmentId !== assignmentId)
            return tempSubmits
        }
    }
})

export default submitSlice.reducer
export const submitActions = submitSlice.actions