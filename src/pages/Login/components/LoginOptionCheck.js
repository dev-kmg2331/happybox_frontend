import styled, { keyframes } from "styled-components";
import { useState } from "react";
import CheckLabel from "../../../common/CheckLabel";

function LoginOptionCheck() {
    const [autoLoginCheck, setAutoLoginCheck] = useState(false);

    const changeAutoLoginCheck = () => {
        setAutoLoginCheck(!autoLoginCheck);
    };

    return (
        <S.CheckArea>
            <CheckLabel check={autoLoginCheck}>
                <input type="checkbox" onChange={changeAutoLoginCheck} />
                자동로그인
            </CheckLabel>
        </S.CheckArea>
    );
}

export default LoginOptionCheck;

const CheckArea = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 16px;
`;

const S = {
    CheckArea,
};
