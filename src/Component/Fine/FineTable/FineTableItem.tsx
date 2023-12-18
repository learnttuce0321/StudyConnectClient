import Td from "../../Table/Td";
import styled from "styled-components";
import axios from "axios";
import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { DateFormater } from "../../../utils/utils";
import { fineActions } from "../../../store/fine";
import type { CheckFinePayload } from "../../../store/fine";
import { useParams } from "react-router-dom";

export default function FineTableItem({ userFine, index, length }: { userFine: any, index: number, length: number }) {
    const dispatch = useAppDispatch()
    const { studyId } = useParams()

    const ClickFineCheckHandler = async (): Promise<any> => {
        const result = await axios({
            method: 'PATCH',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/fine/check`,
            data: {
                id: userFine.id
            }
        })

        if (result.data.result) {
            const payload: CheckFinePayload = {
                id: userFine.id
            }
            dispatch(fineActions.CheckFine(payload))
        }
    }

    return (
        <tr>
            <Td>{length - index}</Td>
            <Td>{userFine.name}</Td>
            <Td>{userFine.fine.toLocaleString('ko-KR')} 원</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', userFine.deadLine)}</Td>
            <Td>
                <Item type="checkbox" id={userFine.id + userFine.userId} onChange={ClickFineCheckHandler} checked={userFine.isPaid}></Item>
                <label htmlFor={userFine.id + userFine.userId} />
            </Td>
        </tr>
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