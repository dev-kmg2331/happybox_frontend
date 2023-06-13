import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckLabel from "../../../../common/CheckLabel";
import { flexCenter } from "../../../../styles/common";
import JoinTermsText from "./JoinTermsText";
import PersonalInfoText from "./PersonalInfoText";

const TermsCheckLabel = ({ setValidChecked }) => {
    // 체크박스
    const [checkAll, setCheckAll] = useState(false);
    const [joinTermsCheck, setJoinTermsCheck] = useState(false);
    const [personalInfoCheck, setPersonalInfoCheck] = useState(false);
    const [emailReceptionCheck, setEmailReceptionCheck] = useState(false);
    const [smsReceptionCheck, setSmsReceptionCheck] = useState(false);

    // 약관내용
    const [showJoinTermsText, setShowJoinTermsText] = useState(false);
    const [showPersonalInfoText, setShowPersonalInfoText] = useState(false);

    // 전체동의 눌렀을 때
    const checkTemsAll = () => {
        setCheckAll(!checkAll);
        changeAllChecks(!checkAll);
    };

    // 전체동의 눌렀을 때 모든 항목 동의 or 비동의
    const changeAllChecks = (checkAll) => {
        setJoinTermsCheck(checkAll);
        setPersonalInfoCheck(checkAll);
        setEmailReceptionCheck(checkAll);
        setSmsReceptionCheck(checkAll);
    };

    // 항목 체크할때마다 전체 체크되어있는지 검사
    const isAllChecked = (check, callback) => {
        callback(!check);
    };

    // 모든 항목이 체크되었을 때
    useEffect(() => {
        // 다음 버튼 활성화
        if (joinTermsCheck && personalInfoCheck) setValidChecked(true);
        else setValidChecked(false);

        if (joinTermsCheck && personalInfoCheck && emailReceptionCheck && smsReceptionCheck) {
            setCheckAll(true);
        } else setCheckAll(false);
    }, [joinTermsCheck, personalInfoCheck, emailReceptionCheck, smsReceptionCheck]);

    return (
        <S.Wrapper>
            <CheckLabel check={checkAll} className="join_check_box check_all">
                <input type="checkBox" onChange={checkTemsAll} />
                약관 전체동의
            </CheckLabel>
            <S.LabelWrapper>
                <CheckLabel check={joinTermsCheck} className="join_check_box">
                    <input
                        type="checkBox"
                        onChange={() => isAllChecked(joinTermsCheck, setJoinTermsCheck)}
                    />
                    <S.Option>(필수)</S.Option>회원가입 약관동의
                    <S.ShowTermsText onClick={() => setShowJoinTermsText(!showJoinTermsText)}>
                        상세보기
                    </S.ShowTermsText>
                </CheckLabel>
                <JoinTermsText show={showJoinTermsText} />
            </S.LabelWrapper>
            <S.LabelWrapper>
                <CheckLabel check={personalInfoCheck} className="join_check_box">
                    <input
                        type="checkBox"
                        onChange={() => isAllChecked(personalInfoCheck, setPersonalInfoCheck)}
                    />
                    <S.Option>(필수)</S.Option>개인정보 수집 및 이용 동의
                    <S.ShowTermsText onClick={() => setShowPersonalInfoText(!showPersonalInfoText)}>
                        상세보기
                    </S.ShowTermsText>
                </CheckLabel>
                <PersonalInfoText show={showPersonalInfoText} />
            </S.LabelWrapper>
            <S.LabelWrapper>
                <CheckLabel check={emailReceptionCheck} className="join_check_box">
                    <input
                        type="checkBox"
                        onChange={() => isAllChecked(emailReceptionCheck, setEmailReceptionCheck)}
                    />
                    <S.Option>(선택)</S.Option>이메일 수신 동의(상품 및 서비스 안내, 이벤트 정보 및
                    혜택제공)
                </CheckLabel>
            </S.LabelWrapper>
            <S.LabelWrapper>
                <CheckLabel check={smsReceptionCheck} className="join_check_box">
                    <input
                        type="checkBox"
                        onChange={() => isAllChecked(smsReceptionCheck, setSmsReceptionCheck)}
                    />
                    <S.Option>(선택)</S.Option> SMS(문자, 카카오톡) 수신동의
                    <br />
                    (상품 및 서비스 안내,이벤트 정보 및 혜택제공)
                </CheckLabel>
            </S.LabelWrapper>
        </S.Wrapper>
    );
};

export default TermsCheckLabel;

const Wrapper = styled.div`
    & > label {
        display: flex;
    }

    .check_all {
        font-weight: 700;
    }

    .check_all::before {
        font-weight: 500;
    }

    .join_check_box {
        flex: 1;
        position: relative;
    }

    .join_check_box:not(:first-child) {
        font-size: 13px;
        color: #666;
    }

    .join_check_box input {
        display: hidden;
    }

    .join_check_box::before {
        width: 17px !important;
        height: 17px !important;
        ${flexCenter}
    }
`;

const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 18px;
    gap: 10px;
`;

const Option = styled.span`
    font-size: 12px;
    color: #999;
    font-weight: normal;
    margin-right: 3px;
`;

const ShowTermsText = styled.button`
    position: absolute;
    right: 0;
    padding: 4px 6px;
    font-size: 9px;
    color: #2e2e2e;
    font-weight: bold;

    :hover {
        background-color: #dddddd;
    }
`;

const S = {
    Wrapper,
    LabelWrapper,
    Option,
    ShowTermsText,
};
