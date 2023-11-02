import Td from "../../Table/Td";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { Submit } from "../../../store/submit";
import { submitActions } from "../../../store/submit";
import { submitRateActions } from "../../../store/submitRate";
import type { CheckSubmitPayload } from "../../../store/submit";
import type { CalculateSubmitRatePayload } from "../../../store/submitRate";


export default function SubmitTableItem({ submit }: { submit: Submit }) {
    const dispatch = useAppDispatch()

    const { studyId } = useParams()

    const ClickAssignmentCheckHandler = async (): Promise<any> => {
        const submitResult = await axios({
            method: 'PATCH',
            url: 'submit/check',
            data: {
                userId: submit.userId,
                assignmentId: submit.assignmentId,
                isSubmitted: submit.isSubmitted
            }
        })

        const submitRateResult = await axios({
            method: 'PATCH',
            url: 'submit-rate/calculate',
            data: {
                userId: submit.userId,
                studyId
            }
        })

        if (submitResult.data.result && submitRateResult.data.result) {
            const checkSubmitPayLoad: CheckSubmitPayload = {
                userId: submit.userId,
                assignmentId: submit.assignmentId
            }
            dispatch(submitActions.CheckSubmit(checkSubmitPayLoad))

            const calculateSubmitRatePayload: CalculateSubmitRatePayload = {
                userSubmitRate: submitRateResult.data.data
            }
            dispatch(submitRateActions.CalculateSubmitRate(calculateSubmitRatePayload))
        }
    }

    return (
        <Td>
            <Item type="checkbox" onChange={ClickAssignmentCheckHandler} id={submit.assignmentId + submit.userId} checked={submit.isSubmitted} />
            <label htmlFor={submit.assignmentId + submit.userId} />
        </Td>
    )
}

const Item = styled.input`
    &{
        display: none;
      }
    & + label{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border:3px solid #adacac;
        position: relative;
      }
    &:checked + label:after{
        content:'✔';
        font-size: 1.2rem;
        width: 1;
        height: 1.2rem;
        text-align: center;
        position: absolute;
        left: -1px;
        top: -10px;
        color: #4285f4;
        z-index: 2;
      }
`