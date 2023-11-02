import ScheduleTable from "../ScheduleTable/ScheduleTable";
import AttendanceTable from "../AttendanceTable/AttendanceTable";
import { ScheduleState } from "../../RouteComponent/SchedulePage";

export default function ScheduleMainContent({ scheduleState }: { scheduleState: ScheduleState }) {
    /**
     * scheduleState값에 따른 content반환
     * @returns 
     */
    const SelectContent = (): (JSX.Element | undefined) => {
        switch (scheduleState) {
            case ScheduleState.SCHEDULE:
                return <ScheduleTable />
            case ScheduleState.ATTENDANCE:
                return <AttendanceTable />
        }
    }

    return (
        <>
            {SelectContent()}
        </>
    )
}