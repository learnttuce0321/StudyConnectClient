import { useAppSelector } from "../../../store/hooks/storeHooks";
import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import ScheduleTableItem from "./ScheduleTableItem";

export default function ScheduleTable() {
    const scheduleValue = useAppSelector(state => state.schedule)

    return (
        <>
            <TableWrapper height="90%">
                <Table>
                    <TableHead>
                        <Th>일정번호</Th>
                        <Th>일정이름</Th>
                        <Th>날짜</Th>
                        <Th>시간</Th>
                        <Th>장소</Th>
                    </TableHead>
                    <Talbebody>
                        {
                            scheduleValue.slice(0).reverse().map((schedule, index, arr) => <ScheduleTableItem schedule={schedule} index={index} length={arr.length} key={schedule.id} />)
                        }
                    </Talbebody>
                </Table>
            </TableWrapper>
        </>
    )
}