import PropTypes from "prop-types";
import styled from "styled-components";

const UserInfo = (props) => {
    const {
        text, // input 항목 이름 (ex. 아이디, 비밀번호)
        placeholder, // placeholder 문구
        required, // 필수항목 여부
        onChangeCheckValid, // input 값 변경에 따라 정규식 검사
        warningText, // 정규식 통과 못할 시 경고문구
        isValid, // 정규식 통과여부 state
        type, // input type
    } = props;

    return (
        <S.Wrapper text={text}>
            {text && (
                <p>
                    {text}
                    {required && <i className="required" />}
                </p>
            )}
            <S.Input
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeCheckValid(e.target.value)}
            />
            {isValid !== null && !isValid && <p className="warning_text">{warningText}</p>}
        </S.Wrapper>
    );
};

// 필수 props
UserInfo.prototypes = {
    text : PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChangeCheckValid: PropTypes.func,
    warningText: PropTypes.string,
    isValid: PropTypes.bool,
    type: PropTypes.string,
};

export default UserInfo;

const Wrapper = styled.div`
    margin-top: ${({ text }) => (text ? "8px" : 0)};

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
`;

const Input = styled.input`
    width: 100%;
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

const S = {
    Wrapper,
    Input,
};
