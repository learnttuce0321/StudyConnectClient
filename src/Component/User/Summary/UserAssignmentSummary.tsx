import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks";
import type { SubmitRate } from '../../../store/submitRate';
import UserAssignmentTable from "../UserAssignmentTable/UserAssignmentTable";
import styled from "styled-components";

export default function UserAssignmentSummary() {

    const clickedUserValue = useAppSelector(state => state.clickedUser)
    const submitRateValue = useAppSelector(state => state.submitRate)

    const userSubmitRate: (SubmitRate | undefined) = submitRateValue.find(submitRate => submitRate.userId === clickedUserValue.id)

    const titleColor = useMemo((): string => {
        const rate = Number(userSubmitRate!.rate)

        if (0 <= rate && rate < 33.3) {
            return 'red'
        } else if (33.3 <= rate && rate < 66.6) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [userSubmitRate])

    return (
        <>
            <RateTitle color={titleColor}>{userSubmitRate!.rate}%</RateTitle>
            <UserAssignmentTable />
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