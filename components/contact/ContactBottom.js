import styled from "styled-components";

export default function ContactBottom({ prev, next, step, steps }) {
  return (
    <ContactBottomWrapper>
      {step > 0 && <PrevBtn onClick={() => prev()}>Wstecz</PrevBtn>}
      {step < steps && <NextBtn onClick={() => next()}>Dalej</NextBtn>}
      {step == steps && <NextBtn onClick={() => next()}>Wyślij</NextBtn>}
    </ContactBottomWrapper>
  );
}

const ContactBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrevBtn = styled.button`
  background-color: ${(props) => props.theme.neutral100};
  border: none;
  color: ${(props) => props.theme.neutral600};
  padding: 8px 32px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
`;

const NextBtn = styled.button`
  background-color: ${(props) => props.theme.blue700};
  color: ${(props) => props.theme.neutral050};
  border: none;
  padding: 8px 32px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
`;
