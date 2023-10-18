import styled from "styled-components"

const Talbebody = styled.tbody`
    z-index: 3;
    position: relative;
    & th {
        background-clip: padding-box;
        border-left: 0;
        min-width: 8.2rem;
        position: sticky;
        left: 0;
    }
    & tr:last-child th {
        border-bottom: 0;
    }
    & tr:last-child td {
        border-bottom: 0;
    }
    & tr td:last-child {
        border-right: 0;
    }
`

export default Talbebody