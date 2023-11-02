import ModalInputContainer from './ModalInputContainer'
import ModalInputName from './ModalInputName'
import { forwardRef, type LegacyRef } from 'react'

// type이 text인 input
export default forwardRef(function ModalTextInputItem({ name, defaultValue, value, readOnly, onChangeHandler }: { name: string, defaultValue?: string, value?: string, readOnly?: boolean, onChangeHandler?: (e: any) => void }, ref: (LegacyRef<HTMLInputElement> | undefined)) {
    return (
        <ModalInputContainer>
            <ModalInputName>{name}</ModalInputName>
            <input type="text" ref={ref} readOnly={readOnly} onChange={onChangeHandler} defaultValue={defaultValue} value={value} />
        </ModalInputContainer>
    )
})

