import { AssignmentState } from "../../RouteComponent/AssignmentPage";
import AssignmentTable from "../AssignmentTable/AssignmentTable";
import SubmitTable from "../SubmitTable/SubmitTable";

export default function AssignmentMainContent({ assignmentState }: { assignmentState: AssignmentState }) {
    const SelectContent = (): (JSX.Element | undefined) => {
        switch (assignmentState) {
            case AssignmentState.ASSIGNMENT:
                return <AssignmentTable />
            case AssignmentState.SUBMIT:
                return <SubmitTable />
        }
    }
    return (
        <>
            {SelectContent()}
        </>
    )
}