import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { fineActions, type CheckFinePayload } from "../../../store/fine";
import { DateFormater } from "../../../utils/utils";
import Td from "../../Table/Td";
import styled from "styled-components";

export default function FineTableItem({ userFine, index, length }: { userFine: any, index: number, length: number }) {

    const dispatch = useAppDispatch()

    const ClickFineCheckHandler = (): void => {
        const payload: CheckFinePayload = {
            id: userFine.id
        }
        dispatch(fineActions.CheckFine(payload))
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