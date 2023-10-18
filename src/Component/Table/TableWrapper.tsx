import styled from "styled-components";

interface TableWrapperProps {
    height: string
}
const TableWrapper = styled.div<TableWrapperProps>`
    overflow: auto;
    scroll-snap-type: both mandatory;
    height: ${props => props.height};
`

export default TableWrapper