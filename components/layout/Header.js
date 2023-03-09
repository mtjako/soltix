import styled from "styled-components";

export default function Header({ title, subtitle, center }) {
  return (
    <HeaderWrapper center={center}>
      <h2>{subtitle}</h2>
      <h3>{title}</h3>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};
  max-width: ${(props) => (props.center ? "780px" : "100%")};
  width: 100%;
  margin: 0 auto;
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue500};
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
    margin-bottom: 12px;
    color: ${(props) => props.theme.neutral900};
    @media (max-width: 768px) {
      text-align: center;
      font-size:26px;
    }
  }
`;
