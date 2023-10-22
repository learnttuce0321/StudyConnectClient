import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user";
import { Submit } from "./submit";

export interface SubmitRate {
    userId: string;
    rate: string;
}
export interface CalculateSubmitRatePayload {
    userValue: Array<User>;
    submitValue: Array<Submit>
}
export interface _AddSubmitRatePayload {
    userId: string;
}
const initialState: Array<SubmitRate> = [
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

const submitRateSlice = createSlice({
    name: 'submitRate',
    initialState,
    reducers: {
        CalculateSubmitRate(state, action: PayloadAction<CalculateSubmitRatePayload>) {
            const { userValue, submitValue } = action.payload

            const tempState: Array<SubmitRate> = []
            
            for(let user of userValue) {
                const usersubmits: Array<Submit> = submitValue.filter(submit => submit.userId === user.id)
                const userSubmitLength: number = usersubmits.length
                const totalCheckedsubmitRateLength: number = (usersubmits.filter(usersubmit => usersubmit.isSubmitted)).length
                const userSubmitRate = (totalCheckedsubmitRateLength * 100 / userSubmitLength).toFixed(1)

                const submitRateObj: SubmitRate = {
                    userId: user.id,
                    rate: userSubmitRate
                }
                tempState.push(submitRateObj)
            }
            return tempState
        },
        _AddSubmitRate(state, action: PayloadAction<_AddSubmitRatePayload>) {
            const { userId } = action.payload

            const tempSubmitRateObj = {
                userId,
                rate: '0.0'
            }
            state.push(tempSubmitRateObj)
        }
    }
})

export default submitRateSlice.reducer
export const submitRateActions = submitRateSlice.actions