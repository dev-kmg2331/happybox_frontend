import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginOptionCheck from "./LoginOptionCheck";
import theme from "../../../styles/theme";
import { flexCenter } from "../../../styles/common";

function LoginForm() {
    return (
        <form>
            <S.Greeting>
                <strong>안녕하세요 :)</strong>
                <p>
                    <S.LoginIcon />
                    입니다.
                </p>
            </S.Greeting>
            <LoginInput />
            <LoginOptionCheck />
            <S.Button>
                <div className="button_fill"/>
                <span>로그인</span>
            </S.Button>
        </form>
    );
}

export default LoginForm;

const Greeting = styled.div`
    padding-top: 100px;
    font-size: 32px;
    color: #000;
    font-weight: 500;
    margin-bottom: 20px;

    strong {
        font-weight: normal;
    }

    p {
        line-height: 1.6;
        vertical-align: top;
        margin-right: 5px;
        margin-bottom: 20px;
    }
`;

const LoginIcon = styled.i`
    vertical-align: top;
    margin-right: 5px;
    width: 182px;
    height: 40px;
    display: inline-block;
`;

const Button = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 15px;
    border-radius: 5px;
    font-weight: 700;
    overflow: hidden;
    ${flexCenter}
    position: relative;

    .button_fill {
        height: 100%;
        width: 0;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.4s;
        background-color: transparent;
    }

    & > span {
        z-index: 10;
        transition: color 0.4s;
    }

    :hover > .button_fill {
        width: 100%;
        background-color: ${({theme}) => theme.PALETE.primary};
    }

    :hover > span {
        color: white;
    }
`;

const S = {
    Greeting,
    LoginIcon,
    Button,
};
