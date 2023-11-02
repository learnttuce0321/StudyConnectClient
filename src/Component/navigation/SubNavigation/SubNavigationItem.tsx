import styled from "styled-components";

//보조 네비게이션 바 아이템
const SubNavigationItem = styled.li`
    cursor: pointer;
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 2px solid white;
    transition: ease 0.3s;
    
    &.clicked {
        border-bottom: 2px solid #282828;
    }  
`

export default SubNavigationItem