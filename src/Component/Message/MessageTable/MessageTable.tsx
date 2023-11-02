import TableWrapper from "../../Table/TableWrapper";
import Table from "../../Table/Table";
import TableHead from "../../Table/TableHead";
import Talbebody from "../../Table/TableBody";
import Th from "../../Table/Th";
import MessageTableItem from "./MessageTableItem";
import { useAppSelector } from "../../../store/hooks/storeHooks";

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
                        messageValue.slice(0).reverse().map((message, index, arr) => <MessageTableItem message={message} index={index} length={arr.length} key={message.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}