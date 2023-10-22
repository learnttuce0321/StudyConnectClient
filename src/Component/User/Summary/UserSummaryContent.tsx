import { ShowLogStatus } from "../../RouteComponent/UserPage"
import UserAssignmentSummary from "./UserAssignmentSummary"
import UserAttendanceSummary from "./UserAttendanceSummary"
import UserInfo from "./UserInfo"

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