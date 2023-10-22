import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks";
import type { Submit } from "../../../store/submit";
import type { SubmitRate } from '../../../store/submitRate';
import UserAssignmentTable from "../UserAssignmentTable/UserAssignmentTable";
import styled from "styled-components";

export default function UserAssignmentSummary() {
    const clickedUserValue = useAppSelector(state => state.clickedUser)
    const assignmentValue = useAppSelector(state => state.assignment)
    const submitValue = useAppSelector(state => state.submit)
    const submitRateValue = useAppSelector(state => state.submitRate)

    const tempUserSubmits: Array<Submit> = submitValue.filter(submit => submit.userId === clickedUserValue.id)
    const userSubmits: any = []
    for (let userSubmit of tempUserSubmits) {
        const matchedAssignmentObj = assignmentValue.find(assignment => assignment.id === userSubmit.assignmentId)
        const tempSubmitObj = { ...userSubmit, deadLine: matchedAssignmentObj!.deadLine, title: matchedAssignmentObj!.title }
        userSubmits.push(tempSubmitObj)
    }

    const userAssignmentRate: (SubmitRate | undefined) = submitRateValue.find(submitRate => submitRate.userId === clickedUserValue.id)

    const titleColor = useMemo((): string => {
        const rate = Number(userAssignmentRate!.rate)

        if (0 <= rate && rate < 33.3) {
            return 'red'
        } else if (33.3 <= rate && rate < 66.6) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [userAssignmentRate])

    return (
        <>
            <RateTitle color={titleColor}>{userAssignmentRate!.rate}</RateTitle>
            <UserAssignmentTable userSubmits={userSubmits} />
        </>
    )
}
interface RateTitleProps {
    color: string
}
const RateTitle = styled.h2<RateTitleProps>`
    color: ${props => props.color};
    margin-bottom: 0.6rem;
`