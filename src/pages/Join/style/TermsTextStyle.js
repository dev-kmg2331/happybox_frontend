import styled from "styled-components";

const Wrapper = styled.div`
    background: #f8f8f8;
    max-height: ${({ show }) => (show ? "125px" : "0")};
    overflow-y: auto;
    color: #333;
    font-size: 13px;
    line-height: 18px;
    transition: max-height 0.5s ease;

    div {
        padding: 12px 12px 12px 25px;
    }

    ::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
    }

    /* 스크롤바 핸들 (그립) 스타일 설정 */
    ::-webkit-scrollbar-thumb {
        background: #888; /* 스크롤바 핸들 색상 */
        border-radius: 5px; /* 스크롤바 핸들의 모서리 둥근 정도 */
    }

    /* 스크롤바 핸들 호버 상태 스타일 설정 */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; /* 마우스가 오버된 상태에서 스크롤바 핸들 색상 */
    }

    /* 스크롤바 트랙 (경로) 스타일 설정 */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 트랙 색상 */
        border-radius: 5px; /* 스크롤바 트랙의 모서리 둥근 정도 */
    }
`;

const S = {
    Wrapper,
};

export default S;
