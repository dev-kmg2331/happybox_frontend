import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

function SnsLogin() {
    return (
        <S.List>
            <li className="kakao_talk">
                <a href="/">
                    <div></div>
                </a>
            </li>
            <li className="naver">
                <a href="/">
                    <div></div>
                </a>
            </li>
        </S.List>
    );
}

export default SnsLogin;

const List = styled.ul`
    ${flexCenter}
    gap: 32px;
    margin: 40px 0;

    & > li > a > div {
        height: 42px;
        width: 42px;
        background-size: cover;
    }

    & > li.kakao_talk > a > div {
        background-image: url('https://cdn1.iconfinder.com/data/icons/rounded-social-media/512/kakao-64.png');
    }

    & > li.naver > a > div {
        background-image: url('https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png');
    }
`;

const S = {
    List
}