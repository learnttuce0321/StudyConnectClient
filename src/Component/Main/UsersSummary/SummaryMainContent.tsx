import UserAssignmnet from "./UserAssignment";
import UserInfo from "./UserInfo";
import { SummaryNavState } from "../../RouteComponent/MainPage";

export default function SummaryMainContent({ summaryNavState }: { summaryNavState: SummaryNavState }) {
    const SelectSummaryContent = (): (JSX.Element | undefined) => {
        switch (summaryNavState) {
            case SummaryNavState.USER:
                return <UserInfo />
            case SummaryNavState.ASSIGNMENT:
                return <UserAssignmnet />
        }
    }
    return (
        <>
            {SelectSummaryContent()}
        </>
    )
}