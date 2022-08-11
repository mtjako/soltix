import styled from "styled-components";

export default function ContactTop({ step, steps }) {
  return (
    <ContactTopWrapper>
      <Title>Darmowe Warsztaty</Title>
      <ProgressWrap>
        <ProgressBar progress={(100 / steps) * step} />
        <ProgressText>
          <p>Krok</p>
          <p>
            {step}/{steps}
          </p>
        </ProgressText>
      </ProgressWrap>
    </ContactTopWrapper>
  );
}

const ContactTopWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  row-gap: 16px;
  grid-template-columns: 1fr 256px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProgressWrap = styled.div`
  width: 100%;
`;
const ProgressText = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: ${(props) => props.theme.neutral700};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.blue100};
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: ${(props) => props.progress}%;
    transition: 1s;
    height: 100%;
    border-radius: 4px;
    background-color: ${(props) => props.theme.blue500};
  }
`;
