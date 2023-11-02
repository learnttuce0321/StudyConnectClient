// 타입이 radio인 input
export default function ModalRadioInputItem({ setSexValue, value }: { setSexValue: React.Dispatch<React.SetStateAction<string | undefined>>, value: string }) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSexValue(e.target.value)
    }

    return (
        <>
            <input type="radio" id={value} name="sex" onChange={(e) => { onChange(e) }} value={value} />
            <label htmlFor={value}>{value === 'male' ? '남자' : '여자'}</label>
        </>
    )
}
