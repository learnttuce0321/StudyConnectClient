import ModalInputContainer from './ModalInputContainer'
import ModalInputName from './ModalInputName'
import { forwardRef, type LegacyRef } from 'react'

export default forwardRef(function ModalTextInputItem({ name, value, readOnly }: { name: string, value?: string, readOnly?: boolean }, ref: (LegacyRef<HTMLInputElement> | undefined)) {
    return (
        <ModalInputContainer>
            <ModalInputName>{name}</ModalInputName>
            <input type="text" ref={ref} readOnly={readOnly} value={value} />
        </ModalInputContainer>
    )
})

