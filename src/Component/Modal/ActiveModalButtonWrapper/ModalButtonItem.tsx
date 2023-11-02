import styled from "styled-components";

// 모달창을 띄워주는 버튼 Item
const ModalButtonItem = styled.li`
    height: 2.5rem;
    flex-grow: 1;
    text-align: center;
    line-height: 2.5rem;
    cursor: pointer;
    
    &:active {
        background-color: #282828;
        color: white;
    }
`

export default ModalButtonItem