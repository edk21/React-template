import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? "#023e8a" : "#010606")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${({dark}) => (dark ? "#ade8f4" : "#fff")};
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? "#fff" : "#023e8a")};
        color: ${({dark}) => (dark ? "#000" : "#ade8f4")};
    }
`