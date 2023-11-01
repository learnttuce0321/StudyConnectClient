import Td from "../../Table/Td";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import { DateFormater } from "../../../utils/utils";
import { clickedScheduleActions } from "../../../store/ClickedSchedule";
import { ModalState, modalActions } from "../../../store/modal";
import type { SetClickedSchedulePayload } from "../../../store/ClickedSchedule";
import type { Schedule } from "../../../store/schedule";

export default function ScheduleTableItem({ schedule, index, length }: { schedule: Schedule, index: number, length: number }) {
    const dispatch = useAppDispatch()
    const scheduleValue = useAppSelector(state => state.schedule)

    const ClickScheduleHandler = (e: any): void => {
        const clickedScheduleId: string = e.currentTarget.id
        const payload: SetClickedSchedulePayload = {
            schedule: scheduleValue.find(schedule => schedule.id === clickedScheduleId)
        }
        dispatch(clickedScheduleActions.setClickedSchedule(payload))
        dispatch(modalActions.setModalState({ type: ModalState.CHECK_SCHEDULE }))
    }
    return (
        <tr id={schedule.id} onClick={ClickScheduleHandler}>
            <Td>{length - index}</Td>
            <Td>{schedule.name}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', schedule.date)}</Td>
            <Td>{schedule.time}</Td>
            <Td>{schedule.location}</Td>
        </tr>
    )
}
