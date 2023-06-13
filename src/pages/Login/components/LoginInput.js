import styled from "styled-components";

function LoginInput() {
    return (
        <S.InputWrap>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
        </S.InputWrap>
    );
}

export default LoginInput;

const InputWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
        height: 50px;
        padding: 3px 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 16px;

        ::placeholder {
            font-family: "Pretendard";
            font-size: 14px;
            color: #ccc;
        }
    }
`;

const S = {
    InputWrap,
};
