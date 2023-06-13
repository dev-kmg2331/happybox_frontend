import { useState } from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../../../../styles/common";
import Select from "react-select";

const EmailForm = (props) => {
    const { required } = props;

    const [prefix, setPrefix] = useState("");
    const [suffix, setSuffix] = useState("");
    const [isCustomDomain, setIsCustomDomain] = useState(true);

    const selectOptions = [
        { value: "", label: "직접 입력" },
        { value: "gmail.com", label: "gmail.com" },
        { value: "naver.com", label: "naver.com" },
        { value: "daum.net", label: "daum.net" },
        { value: "nate.com", label: "nate.com" },
    ];

    const handleDomain = (selectedOption) => {
        // 직접 입력 여부
        let isBlank = selectedOption.value === "";

        setIsCustomDomain(isBlank);
        setSuffix(selectedOption);
    };

    // Select 커스텀 css
    const customStyles = {
        control: (provided) => ({
            ...provided,
        }),
    };

    return (
        <S.Wrapper>
            <p>
                이메일
                {required && <i className="required" />}
            </p>
            <S.InputWrap>
                <S.Input
                    type="text"
                    placeholder="이메일 주소"
                    onChange={(e) => setPrefix(e.target.value)}
                />
                <span className="email_divider">@</span>
                <S.Input type="text" placeholder="도메인 주소" onFocus={() => {}} onChange={() => {}} />
            </S.InputWrap>
        </S.Wrapper>
    );
};

export default EmailForm;

const Wrapper = styled.div`
    margin-top: 8px;

    p {
        margin-bottom: 8px;
    }

    .warning_text {
        margin-top: 3px;
        color: #eb3e0a;
    }

    & .required {
        width: 4px;
        height: 4px;
        background: #ff5938;
        display: inline-block;
        border-radius: 50%;
        margin-left: 6px;
        margin-top: 6px;
        vertical-align: super;
    }

    .email_divider {
        font-size: 21px;
        font-weight: 500;
        margin: 0 4px;
    }
`;

const InputWrap = styled.div`
    ${flexAlignCenter}
`;

const Input = styled.input`
    flex: 1;
    border-radius: 6px;
    height: 45px;
    padding: 3px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 13px;
    box-sizing: border-box;
    margin-bottom: 4px;

    ::placeholder {
        color: #999;
    }
`;

const SelectWrap = styled.div`
    ${flexAlignCenter}
    height: 35px;
    background-color: #f2f2f2;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
`;

const S = {
    Wrapper,
    InputWrap,
    Input,
    SelectWrap,
};
