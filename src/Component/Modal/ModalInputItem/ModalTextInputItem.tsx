import { forwardRef, type LegacyRef } from 'react'
import ModalInputContainer from './ModalInputContainer'
import ModalInputName from './ModalInputName'

export default forwardRef(function ModalTextInputItem({ name, defaultValue, readOnly }: { name: string, defaultValue?: string, readOnly?: boolean }, ref: (LegacyRef<HTMLInputElement> | undefined)) {
    return (
        <ModalInputContainer>
            <ModalInputName>{name}</ModalInputName>
            <input type="text" ref={ref} defaultValue={defaultValue} readOnly={readOnly} />
        </ModalInputContainer>
    )
})

