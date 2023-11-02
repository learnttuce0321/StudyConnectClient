import UserAssignmentSummary from "./UserAssignmentSummary"
import UserAttendanceSummary from "./UserAttendanceSummary"
import UserInfo from "./UserInfo"
import { ShowLogStatus } from "../../RouteComponent/UserPage"

export default function UserSummaryContent({ showLog }: { showLog: ShowLogStatus }) {
    const ShowLogComponent = (): (JSX.Element | undefined) => {
        switch (showLog) {
            case ShowLogStatus.ATTENDANCE:
                return (
                    <>
                        <UserAttendanceSummary />
                    </>
                )
            case ShowLogStatus.ASSIGNMENT:
                return <UserAssignmentSummary />
        }
    }

    return (
        <>
            <UserInfo />
            <hr />
            {ShowLogComponent()}
        </>
    )
}