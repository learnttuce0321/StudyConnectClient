import { configureStore } from '@reduxjs/toolkit'
import studySlice from './study'
import userSlice from './user'
import filteredUserSlice from './filteredUser'
import scheduleSlice from './schedule'
import clickedScheduleSlice from './ClickedSchedule'
import assignmentSlice from './assignment'
import clickedAssignmentSlice from './clickedAssignment'
import attendanceSlice from './attendance'
import attendanceRateSlice from './attendanceRate'
import clickedUserSlice from './clickedUser'
import messageSlice from './message'
import clickedMessageSlice from './clickedMessage'
import modalSlice from './modal'
import submitSlice from './submit'
import submitRateSlice from './submitRate'
import fineSlice from './fine'

const store = configureStore({
    reducer: {
        study: studySlice,
        user: userSlice,
        filteredUser: filteredUserSlice,
        clickedUser: clickedUserSlice,
        schedule: scheduleSlice,
        clickedSchedule: clickedScheduleSlice,
        attendance: attendanceSlice,
        attendaceRate: attendanceRateSlice,
        assignment: assignmentSlice,
        clickedAssignment: clickedAssignmentSlice,
        message: messageSlice,
        clickedMessage: clickedMessageSlice,
        modal: modalSlice,
        submit: submitSlice,
        submitRate: submitRateSlice,
        fine: fineSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
