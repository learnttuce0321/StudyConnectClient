import styled from "styled-components";

const SubNavigationItem = styled.li`
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 2px solid white;
    transition: ease 0.3s;
    &.clicked {
        border-bottom: 2px solid #282828;
    }  
`
export default SubNavigationItem