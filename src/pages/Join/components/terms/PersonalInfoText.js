import styled from "styled-components";
import S from "../../style/TermsTextStyle";

const PersonalInfoText = ({ show }) => {
    return (
        <S.Wrapper show={show}>
            <TableWrap>
                <table>
                    <tbody>
                        <tr>
                            <th>개인정보 수집 · 이용 목적</th>
                            <td>회원 가입 및 회원 관리</td>
                        </tr>
                        <tr>
                            <th>개인정보 수집 항목</th>
                            <td>
                                아이디, 비밀번호, 본인확인정보(CI, DI, 생년월일, 성별,
                                내외국인구분), 휴대폰번호, 이메일
                            </td>
                        </tr>
                        <tr>
                            <th>개인정보 보유 및 이용 기간</th>
                            <td>
                                통신비밀보호법, 전자상거래 등에서의 소비자보호에 관한 법률 등
                                관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서
                                정한 일정한 기간 동안 회원정보 를 보관합니다. 이 경우 회사는
                                보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와
                                같습니다.
                                <br />
                                - (전자상거래법) 표시·광고에 관한 기록 : 6개월
                                <br />
                                - (전자상거래법) 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 :
                                5년
                                <br />
                                - (전자상거래법) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                                <br />
                                - (통신비밀보호법) 로그인 기록(로그기록, 접속지의 추적자료) : 3개월
                                <br />
                                <br />
                                회원에서 탈퇴한 후 회원 재가입, 임의해지 등을 반복적으로 행하여
                                회사가 제공하는 할인쿠폰, 이벤트 혜택 등으로 경제상의 이익을
                                취하거나 이 과정에서 명의를 무단으로 사용하는 편법과 불법행위를 하는
                                회원을 차단 하고자 회원 탈퇴 후 90일 동안 보관합니다
                                <br />- 부정이용기록에 대한 기록 : 1년
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={2} style={{ textAlign: "center" }}>
                                ※ 이용자(정보주체자)는 개인정보 수집 및 이용 동의를 거부할 권리가
                                있습니다.
                                <br />
                                단, 개인정보 수집 및 이용 동의 거부 시 서비스 이용에 제약이 있을 수
                                있습니다.
                            </th>
                        </tr>
                    </tbody>
                </table>
            </TableWrap>
        </S.Wrapper>
    );
};

export default PersonalInfoText;

const TableWrap = styled.div`
    padding: 12px 12px 12px 25px;

    table {
        border-collapse: separate;
        border-spacing: 10px;
    }

    & th {
        width: 30%;
        font-size: 13px;
        color: #333333;
        font-weight: 700;
        text-align: left;
    }
`;
