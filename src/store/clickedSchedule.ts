import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Schedule } from './schedule';

const initialState: any = {};

export interface SetClickedSchedulePayload {
    schedule: Schedule | {} | undefined;
}

const clickedScheduleSlice = createSlice({
    name: 'clickedSchedule',
    initialState,
    reducers: {
        setClickedSchedule(
            state,
            action: PayloadAction<SetClickedSchedulePayload>
        ) {
            const { schedule } = action.payload;
            return schedule;
        },
    },
});

export default clickedScheduleSlice.reducer;
export const clickedScheduleActions = clickedScheduleSlice.actions;
