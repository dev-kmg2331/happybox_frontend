import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import theme from "../../../styles/theme";

const NextButton = (props) => {
    const { text, validChecked, onClick } = props;
    return (
        <Button validChecked={validChecked} onClick={onClick} disabled={!validChecked}>
            {text}
        </Button>
    );
};

const Button = styled.button`
    width: 100%;
    ${flexCenter}
    border-radius: 5px;
    padding: 16px 0;
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    background-color: ${({ validChecked }) => (validChecked ? theme.PALETE.primary : "#ccc")};
    transition: background-color 0.5s ease;

    :disabled {
        cursor: default;
    }
`;

export default NextButton;
