import styled from "styled-components";

export default function Wrapper({ children }) {
  return <WrapperWrapper>{children}</WrapperWrapper>;
}

const WrapperWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto 100px;
  position: relative;
  @media (max-width: 1172px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    padding: 64px;
  }
  @media (max-width: 568px) {
    padding: 32px;
  }
  @media (max-width: 468px) {
    padding: 16px;
  }
`;
