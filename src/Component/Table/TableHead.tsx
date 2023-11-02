import styled from "styled-components"

// thead
export default function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <Thead>
            <tr>
                {children}
            </tr>
        </Thead>
    )
}

const Thead = styled.thead`
    z-index: 4;
    position: relative;
    & th {
        position: sticky;
        top: 0;
        border-top: 0;
        min-width: 3.8rem;
        background-clip: padding-box;
        text-align: center;
    }
    & th.pin {
        left: 0;
        z-index: 4;
        border-left: 0;
    }
    & tr th:last-child {
        border-right: 0;
    }
`