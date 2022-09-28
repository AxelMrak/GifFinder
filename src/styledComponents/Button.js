// Imports
import styled from "@emotion/styled";

// BUTTON WITH STYLED COMPONENTS
export const Button = styled.button`
    background-color: #EF233C;
    color: black;
    border: 1px solid black;
    padding: 0.7rem;
    font-weight: 700;
    border-radius: 25px;
    cursor: pointer;
    transition: all 1s;
    &:hover {
        background-color: black;
        color: white;
        border-color: white;
    }
`