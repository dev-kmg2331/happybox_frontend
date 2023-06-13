import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import JoinFormDefaultStyle from "../../style/JoinFormDefaultStyle";
import EmailForm from "./EmailForm";

const UserInfoWrap = (props) => {
    // 정규식
    const regExp = {
        id: /^[A-Za-z]{1}[A-Za-z0-9]{3,11}$/,
        pw: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    };

    // 회원정보 유효
    const [isIdValid, setIsIdValid] = useState(null); //
    const [isPwValid, setIsPwValid] = useState(null);
    const [isPwSame, setIsPwSame] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);

    // 비밀번호 같은지 검사
    const [firstPw, setFirstPw] = useState();

    const userInfoProps = [
        // 아이디 input
        {
            text: "아이디",
            placeholder: "4~12자 이상 영문 또는 숫자만 사용 가능",
            required: true,
            warningText: "아이디 형식이 맞지 않습니다.",
            isValid: isIdValid,
            type: "text",
            onChange: (text) => {
                setIsIdValid(regExp.id.test(text));
            },
        },
        // 비밀번호 input
        {
            text: "비밀번호",
            placeholder: "8 ~ 16자 영문, 숫자, 특수문자 1개 이상씩 혼용 필수",
            required: true,
            warningText: "비밀번호 형식이 올바르지 않습니다.",
            isValid: isPwValid,
            type: "password",
            onChange: (text) => {
                setIsPwValid(regExp.pw.test(text));
                setFirstPw(text);
            },
        },
        {
            placeholder: "비밀번호 확인",
            required: true,
            type: "password",
            warningText: "비밀번호가 같지 않습니다.",
            isValid: isPwSame,
            onChange: (text) => {
                setIsPwSame(firstPw === text);
            },
        },
    ];

    // props 설명은 UserInfo 컴포넌트에
    return (
        <S.Wrapper>
            <h2>일반 회원가입</h2>
            {userInfoProps.map((e, i) => (
                <UserInfo
                    key={i}
                    text={e.text}
                    placeholder={e.placeholder}
                    required={e.required}
                    isValid={e.isValid}
                    onChangeCheckValid={e.onChange}
                    warningText={e.warningText}
                    type={e.type}
                />
            ))}
            <EmailForm required={true}/>
        </S.Wrapper>
    );
};

export default UserInfoWrap;

const Wrapper = styled.div`
    margin: 0 auto;
    ${JoinFormDefaultStyle}

    h2 {
        font-size: 26px;
        color: #333;
        font-weight: 700;
        text-align: left;
        margin-bottom: 40px;
    }
`;

const S = {
    Wrapper,
};
