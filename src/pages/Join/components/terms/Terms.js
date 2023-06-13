import React, { useState } from "react";
import styled from "styled-components";
import TermsCheckLabel from "./TermsCheckLabel";
import JoinFormDefaultStyle from "../../style/JoinFormDefaultStyle";
import NextButton from "../NextButton";

const Terms = ({ setTermsChecked }) => {
    const [validChecked, setValidChecked] = useState(false);

    return (
        <S.Wrapper>
            <S.TermsHead>
                <h3>이용약관 동의</h3>
                <p>HappyBox 회원가입을 위해 이용약관을 동의해주세요.</p>
            </S.TermsHead>
            <S.TermsToggleBox>
                <TermsCheckLabel setValidChecked={setValidChecked} />
            </S.TermsToggleBox>
            <S.Notice>
                <li>회원정보 수정에서 언제든지 수신거부 하실 수 있습니다.</li>
                <li>상품 구매정보는 수신동의 여부 관계없이 받아 보실 수 있습니다.</li>
            </S.Notice>
            <S.NextButtonWrap>
                <NextButton
                    text={"다음"}
                    validChecked={validChecked}
                    onClick={() => setTermsChecked(true)}
                />
            </S.NextButtonWrap>
        </S.Wrapper>
    );
};

export default Terms;

const Wrapper = styled.div`
    ${JoinFormDefaultStyle}
`;

const TermsHead = styled.div`
    h3 {
        font-size: 26px;
        color: #2e2e2e;
        font-weight: 700;
        padding-bottom: 4px;
    }

    p {
        font-size: 13px;
        color: #999999;
        font-weight: 400;
    }
`;

const TermsToggleBox = styled.div`
    padding: 24px 0;
    border-bottom: 1px solid #ccc;
`;

const Notice = styled.ul`
    margin-top: 24px;

    li {
        color: #999;
        font-size: 12px;
        padding-left: 15px;
        margin-bottom: 12px;
        word-break: break-word;
        text-align: left;

        ::before {
            content: "※";
            display: inline-block;
            vertical-align: middle;
            margin: -3px 5px 0 -15px;
        }
    }
`;

const NextButtonWrap = styled.div`
    padding-top: 24px;
`;

const S = {
    Wrapper,
    TermsHead,
    TermsToggleBox,
    Notice,
    NextButtonWrap,
};
