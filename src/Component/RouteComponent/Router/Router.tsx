import Navigation from '../../Navigation/MainNavigation/Navigation';
import MainPage from '../MainPage';
import UserPage from '../UserPage';
import MessagePage from '../MessagePage';
import SchedulePage from '../SchedulePage';
import AssignmentPage from '../AssignmentPage';
import MyPage from '../MyPage';
import FinePage from '../FinePage';
import StudyPage from '../StudyPage';
import Modal from '../../Modal/ModalWrapper/Modal';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ModalState } from '../../../store/modal';
import { useAppSelector } from '../../../store/hooks/storeHooks';

export default function Router() {

    const modalValue = useAppSelector(state => state.modal)
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <StudyPage />
                        {
                            modalValue.type !== ModalState.NONE && <Modal />
                        }
                    </>
                }
                />
                <Route path='/study/:studyId' element={
                    <>
                        <Navigation />
                        <Outlet />
                        {
                            modalValue.type !== ModalState.NONE && <Modal />
                        }
                    </>
                }>
                    <Route path='main' element={<MainPage />} />
                    <Route path='user' element={<UserPage />} />
                    <Route path='message' element={<MessagePage />} />
                    <Route path='schedule' element={<SchedulePage />} />
                    <Route path='assignment' element={<AssignmentPage />} />
                    <Route path='fine' element={<FinePage />} />
                    <Route path='mypage' element={<MyPage />} />
                </Route>
            </Routes>
        </>
    )
}