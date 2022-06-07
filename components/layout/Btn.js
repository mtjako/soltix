import styled from "styled-components";
import Link from "next/link";

export default function Btn({ children, link }) {
  return (
    <div>
      {link ? (
        <BtnWrapper href={link}>
          <BtnBtn>{children}</BtnBtn>
        </BtnWrapper>
      ) : (
        <BtnBtn>{children}</BtnBtn>
      )}
    </div>
  );
}

const BtnWrapper = styled(Link)``;

const BtnBtn = styled.button`
  margin-top: 24px;
  padding: 12px 48px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.orange600} 0%,
    ${(props) => props.theme.orange400} 100%
  );
`;
