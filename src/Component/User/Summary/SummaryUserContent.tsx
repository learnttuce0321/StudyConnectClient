import UserAttendancesummary from "./UserAttendanceSummary"
import { ShowLogStatus } from "../../RouteComponent/UserPage"
import UserAssignmentSummary from "./UserAssignmentSummary"
export default function SummaryUserContent({ userId, showLog }: { userId: number, showLog: ShowLogStatus }) {
    const ShowLogComponent = (userId: number): (JSX.Element | undefined) => {
        switch (showLog) {
            case ShowLogStatus.ATTENDANCE:
                return <UserAttendancesummary userId={userId} />
            case ShowLogStatus.ASSIGNMENT:
                return <UserAssignmentSummary />
        }
    }
    return (
        <>
            {ShowLogComponent(userId)}
        </>
    )
}