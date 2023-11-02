import styled from "styled-components";

// table의 높이를 지정함
interface TableWrapperProps {
    height: string
}

const TableWrapper = styled.div<TableWrapperProps>`
    overflow: auto;
    scroll-snap-type: both mandatory;
    height: ${props => props.height};
`

export default TableWrapper