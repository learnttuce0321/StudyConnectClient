import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user";
import { Submit } from "./submit";
import { submitRateData } from "../DummyData/sutmitRateData";

export interface SubmitRate {
    id?: number;
    userId: string;
    rate: string;
    studyId: string;
}
export interface SetSubmitRateDataPayload {
    submitRates: Array<SubmitRate>;
}
export interface CalculateSubmitRatePayload {
    userSubmitRate: SubmitRate
}
export interface CalculateAllSubmitRatePayload {
    submitRates: Array<SubmitRate>
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
            const { userSubmitRate } = action.payload

            const matchedSubmitRateObj = state.find(submitRate => submitRate.userId === userSubmitRate.userId)
            matchedSubmitRateObj!.rate = userSubmitRate.rate
        },
        CalculateAllSubmitRate(state, action: PayloadAction<CalculateAllSubmitRatePayload>) {
            const { submitRates } = action.payload

            for(let userSubmitRate of submitRates) {
                const matchedSubmitRateObj = state.find(submitRate => submitRate.userId === userSubmitRate.userId)    

                matchedSubmitRateObj!.rate = userSubmitRate.rate
            }
        },
        AddSubmitRate(state, action: PayloadAction<AddSubmitRatePayload>) {
            const { submitRate } = action.payload

            state.push(submitRate)
        }
    }
})

export default submitRateSlice.reducer
export const submitRateActions = submitRateSlice.actions