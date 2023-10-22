import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../../navigation/MainNavigation/Navigation';
import MainPage from '../MainPage';
import UserPage from '../UserPage';
import MessagePage from '../MessagePage';
import SchedulePage from '../SchedulePage';
import AssignmentPage from '../AssignmentPage';
import MyPage from '../MyPage';
import FinePage from '../FinePage';

export default function Router() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/user' element={<UserPage />} />
                <Route path='/message' element={<MessagePage />} />
                <Route path='/attendance' element={<SchedulePage />} />
                <Route path='/assignment' element={<AssignmentPage />} />
                <Route path='/fine' element={<FinePage />} />
                <Route path='/mypage' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    )
}