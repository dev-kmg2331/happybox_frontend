import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import Terms from "./components/terms/Terms";
import MemberForm from "./components/memberForm/MemberForm";

const Join = () => {
    const [termsChecked, setTermsChecked] = useState(false);

    return (
        <S.Wrapper>
            {!termsChecked && <Terms setTermsChecked={setTermsChecked} />}
            {termsChecked && <MemberForm />}
        </S.Wrapper>
    );
};

export default Join;

const Wrapper = styled.section`
    ${flexCenter}
    height: 100vh;
`;

const S = {
    Wrapper,
};
