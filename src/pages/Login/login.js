import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import SnsLogin from "./components/SnsLogin";
import { flexCenter } from "../../styles/common";

function Login() {
    return (
        <S.Wrapper>
            <S.Content>
                <LoginForm />
                <S.FindBtnList>
                    <ul>
                        <li>
                            <a href="/">아이디 찾기</a>
                        </li>
                        <li>
                            <a href="/">비밀번호 찾기</a>
                        </li>
                    </ul>
                </S.FindBtnList>
                <SnsLogin />
            </S.Content>
        </S.Wrapper>
    );
}

export default Login;

const Wrapper = styled.section`
    background-color: #f7f7f7;
    height: 100vh;
`;

const Content = styled.div`
    width: 420px;
    margin: 0 auto;
    padding-bottom: 140px;
`;

const FindBtnList = styled.div`
    & > ul {
        ${flexCenter}
    }

    & > ul > li > a:hover {
        font-weight: 700;
    }

    & > ul > li:last-child::before {
        display: inline-block;
        content: "";
        width: 1px;
        height: 8px;
        background: #ccc;
        vertical-align: middle;
        margin: 0 8px;
    }

    margin-top: 30px;
`;

const S = {
    Wrapper,
    Content,
    FindBtnList,
};
