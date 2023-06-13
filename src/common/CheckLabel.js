import styled from "styled-components";
import { flexAlignCenter } from "../styles/common";
import theme from "../styles/theme";

const CheckLabel = styled.label`
    position: relative;
    min-height: 22px;
    line-height: 17px;
    cursor: pointer;
    ${flexAlignCenter}

    input {
        display: none;
    }

    ::before {
        content: "✓";
        display: inline-block;
        text-align: center;
        font-size: 14px;
        color: white;
        width: 22px;
        height: 22px;
        border-radius: 3px;
        background-color: ${({ check }) => (check ? theme.PALETE.primary : "rgba(128, 128, 128, 0.1)")};
        transition: background-color 0.3s ease;
        margin-right: 8px;
    }

    .check {
        position: absolute;
        left: 4px;
    }
`;

export default CheckLabel;
