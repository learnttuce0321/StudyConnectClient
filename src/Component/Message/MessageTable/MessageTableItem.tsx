import Td from "../../Table/Td";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import { DateFormater } from "../../../utils/utils";
import { User } from "../../../store/user";
import type { Message } from "../../../store/message";

export default function MessageTableItem({ message }: { message: Message }) {
    const userValue = useAppSelector(state => state.user)
    const matchedUser: (User | undefined) = userValue.find(user => user.id === message.userId)

    return (
        <tr>
            <Td>{message.id}</Td>
            <Td>{message.content.length > 3 ? message.content.slice(0, 3) + '...' : message.content}</Td>
            <Td>{matchedUser!.name}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', message.date)}</Td>
            <Td>{message.time}</Td>
        </tr>
    )
}