import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import filteredUserSlice from './filteredUser'
import scheduleSlice from './schedule'
import assignmentSlice from './assignment'
import attendanceSlice from './attendance'
import attendanceRateSlice from './attendanceRate'
import clickedUserSlice from './clickedUser'
import messageSlice from './message'
import modalSlice from './modal'

const store = configureStore({
    reducer: {
        user: userSlice,
        filteredUser: filteredUserSlice,
        schedule: scheduleSlice,
        attendance: attendanceSlice,
        attendaceRate: attendanceRateSlice,
        assignment: assignmentSlice,
        clickedUser: clickedUserSlice,
        message: messageSlice,
        modal: modalSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store