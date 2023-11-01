import ModalInputContainer from './ModalInputContainer'
import ModalInputName from './ModalInputName'
import { forwardRef, type LegacyRef } from 'react'

export default forwardRef(function ModalSelectItem({ name, children, onChange }: { name: string, children: React.ReactNode, onChange?: any }, ref: (LegacyRef<HTMLSelectElement> | undefined)) {
    return (
        <ModalInputContainer>
            <ModalInputName>{name}</ModalInputName>
            <select ref={ref} onChange={onChange}>
                {children}
            </select>
        </ModalInputContainer>
    )
})