import { useEffect } from 'react';
import './App.css';
import Router from './Component/RouteComponent/Router/Router';
import axios from 'axios';

import { userData } from './DummyData/userData';
import { attendanceData } from './DummyData/attendanceData';
import { scheduleData } from './DummyData/scheduleData';
import { studyData } from './DummyData/studyData';
import { attendanceRateData } from './DummyData/attendaneRateData';
import { assignmentData } from './DummyData/assignmentData';
import { submitData } from './DummyData/submitData';
import { submitRateData } from './DummyData/sutmitRateData';
import { fineData } from './DummyData/fineData';
import { messageData } from './DummyData/messageData';
function App() {
    useEffect(() => {
        // const foo = async () => {
        //     for (let study of studyData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/s',
        //             data: study,

        //         })
        //     }

        //     for (let user of userData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/user',
        //             data: user,

        //         })
        //     }

        //     for (let schedule of scheduleData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/schedule',
        //             data: schedule,

        //         })
        //     }
        //     for (let attendance of attendanceData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/attendance',
        //             data: attendance,

        //         })
        //     }
        //     for (let attendanceRate of attendanceRateData) {

        //         await axios({
        //             method: 'POST',
        //             url: '/attendanceRate',
        //             data: attendanceRate,

        //         })
        //     }

        //     for (let assignment of assignmentData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/assignment',
        //             data: assignment,

        //         })
        //     }
        //     for (let submit of submitData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/submit',
        //             data: submit,

        //         })
        //     }
        //     for (let submitRate of submitRateData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/submitRate',
        //             data: submitRate,

        //         })
        //     }
        //     for (let fine of fineData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/fine',
        //             data: fine,

        //         })
        //     }
        //     for (let message of messageData) {
        //         await axios({
        //             method: 'POST',
        //             url: '/message',
        //             data: message,

        //         })
        //     }
        // }
        // foo()
    }, [])
    return (
        <>
            <Router />
        </>
    );
}

export default App;
