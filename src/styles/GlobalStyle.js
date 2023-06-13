import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
            format("woff");
        font-weight: 700;
        font-style: normal;
    }
        @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 500;
        font-style: normal;
    }
        @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }

    body{
        padding: 0;
        margin: 0;
        height: 100%;
        color: #333;
        font-size: 14px;
        font-weight: 400;
        /* line-height: 1.4; */
        font-family: 'Pretendard', sans-serif;
        word-break: break-all;
    };

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
        border: none;
        padding: 0;
    };

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }

    a {
        background: transparent;
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
