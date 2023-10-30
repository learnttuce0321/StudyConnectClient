import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user";
import { Submit } from "./submit";
import { submitRateData } from "../DummyData/sutmitRateData";

export interface SubmitRate {
    num?: number;
    userId: string;
    rate: string;
    studyId: string;
}
export interface SetSubmitRateDataPayload {
    submitRates: Array<SubmitRate>;
}
export interface CalculateSubmitRatePayload {
    userValue: Array<User>;
    submitValue: Array<Submit>;
    studyId: string;
}
export interface AddSubmitRatePayload {
    submitRate: SubmitRate
}
const initialState: Array<SubmitRate> = []

const submitRateSlice = createSlice({
    name: 'submitRate',
    initialState,
    reducers: {
        SetSubmitData(state, action: PayloadAction<SetSubmitRateDataPayload>) {
            return action.payload.submitRates  
        },
        CalculateSubmitRate(state, action: PayloadAction<CalculateSubmitRatePayload>) {
            const { userValue, submitValue, studyId } = action.payload

            const tempState: Array<SubmitRate> = []
            
            for(let user of userValue) {
                const usersubmits: Array<Submit> = submitValue.filter(submit => submit.userId === user.id)
                const userSubmitLength: number = usersubmits.length
                const totalCheckedsubmitRateLength: number = (usersubmits.filter(usersubmit => usersubmit.isSubmitted)).length
                const userSubmitRate = (totalCheckedsubmitRateLength * 100 / userSubmitLength).toFixed(1)

                const submitRateObj: SubmitRate = {
                    userId: user.id,
                    rate: userSubmitRate === 'NaN' ? '0.0' : userSubmitRate,
                    studyId
                }
                tempState.push(submitRateObj)
            }
            return tempState
        },
        AddSubmitRate(state, action: PayloadAction<AddSubmitRatePayload>) {
            const { submitRate } = action.payload

            state.push(submitRate)
        }
    }
})

export default submitRateSlice.reducer
export const submitRateActions = submitRateSlice.actions