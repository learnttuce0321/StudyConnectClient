import TableWrapper from "../../Table/TableWrapper";
import Table from "../../Table/Table";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import TableHead from "../../Table/TableHead";
import Talbebody from "../../Table/TableBody";
import Th from "../../Table/Th";
import MessageTableItem from "./MessageTableItem";

export default function MessageTable() {

    const messageValue = useAppSelector(state => state.message)

    return (
        <TableWrapper height="100%">
            <Table>
                <TableHead>
                    <Th>번호</Th>
                    <Th>내용</Th>
                    <Th>수신</Th>
                    <Th>발송 날짜</Th>
                    <Th>발송 시간</Th>
                </TableHead>
                <Talbebody>
                    {
                        messageValue.map(message => <MessageTableItem message={message} key={message.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}