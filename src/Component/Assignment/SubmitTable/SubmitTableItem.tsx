import Td from "../../Table/Td";
import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { Submit } from "../../../store/submit";
import { CheckSubmitPayload, submitActions } from "../../../store/submit";
import styled from "styled-components";

export default function SubmitTableItem({ submit }: { submit: Submit }) {
    const dispatch = useAppDispatch()

    const ClickAssignmentCheckHandler = (): void => {
        const payLoad: CheckSubmitPayload = {
            userId: submit.userId,
            assignmentId: submit.assignmentId
        }
        dispatch(submitActions.CheckSubmit(payLoad))
    }
    return (
        <Td key={submit.id}>
            <Item type="checkbox" onChange={ClickAssignmentCheckHandler} id={submit.id.toString()} checked={submit.isSubmitted} />
            <label htmlFor={submit.id.toString()} />
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