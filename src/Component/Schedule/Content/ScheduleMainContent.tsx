import AttendanceTable from "../AttendanceTable/AttendanceTable";
import ScheduleTable from "../ScheduleTable/ScheduleTable";
import { ScheduleState } from "../../RouteComponent/SchedulePage";

export default function ScheduleMainContent({ scheduleState }: { scheduleState: ScheduleState }) {
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