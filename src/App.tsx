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
        const foo = async () => {
            // for (let study of studyData) {
            //     axios({
            //         method: 'POST',
            //         url: '/s',
            //         data: study,

            //     }).then(res => console.log(res))
            // }

            // for (let user of userData) {
            //     axios({
            //         method: 'POST',
            //         url: '/user',
            //         data: user,

            //     }).then(res => console.log(res))
            // }

            // for (let schedule of scheduleData) {
            //     axios({
            //         method: 'POST',
            //         url: '/schedule',
            //         data: schedule,

            //     }).then(res => console.log(res))
            // }
            // for (let attendance of attendanceData) {
            //     axios({
            //         method: 'POST',
            //         url: '/attendance',
            //         data: attendance,

            //     }).then(res => console.log(res))
            // }
            for (let attendanceRate of attendanceRateData) {

                const res = await axios({
                    method: 'POST',
                    url: '/attendanceRate',
                    data: attendanceRate,

                })
                console.log(res)
            }

            // for (let assignment of assignmentData) {
            //     axios({
            //         method: 'POST',
            //         url: '/assignment',
            //         data: assignment,

            //     }).then(res => console.log(res))
            // }
            // for (let submit of submitData) {
            //     axios({
            //         method: 'POST',
            //         url: '/submit',
            //         data: submit,

            //     }).then(res => console.log(res))
            // }
            for (let submitRate of submitRateData) {
                await axios({
                    method: 'POST',
                    url: '/submitRate',
                    data: submitRate,

                }).then(res => console.log(res))
            }
            // for (let fine of fineData) {
            //     axios({
            //         method: 'POST',
            //         url: '/fine',
            //         data: fine,

            //     }).then(res => console.log(res))
            // }
            // for (let message of messageData) {
            //     axios({
            //         method: 'POST',
            //         url: '/message',
            //         data: message,

            //     }).then(res => console.log(res))
            // }
        }
        foo()
    }, [])
    return (
        <>
            <Router />
        </>
    );
}

export default App;
