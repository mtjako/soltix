import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <FootWrap>
        <div>
          <Image
            src={"/logo/logo-white.svg"}
            alt="logo"
            width={150}
            height={58}
          />
          <p className="header other">Godziny pracy</p>
          <p>w dni robocze od 8:00 do 16:00</p>
        </div>
        <div>
          <p className="header">Szybkie linki</p>
          <ul>
            <li>
              <Link href="/">Strona Główna</Link>
            </li>
            <li>
              <Link href="/modeofaction">Jak wyglądają darmowe warsztaty?</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="header">Kontakt</p>
          <ul>
            <li>
              SOLTIX Software House <br />
              ul. Gen. W. Sikorskiego 19 <br />
              65-454 Zielona Góra, Polska
            </li>
            <li>soltix@soltix.pl</li>
            <li>+48 603 197 858</li>
          </ul>
        </div>
        <div className="footer">
          <p>&copy; 2021 Soltix | All Rights Reserved</p>
        </div>
      </FootWrap>
    </Foot>
  );
}

const Foot = styled.div`
  margin-top: 100px;
  padding-top: 150px;
  width: 100%;
  background-image: url("/footer/footerbg.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const FootWrap = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  color: ${(props) => props.theme.neutral050};
  div {
    p.header {
      color: inherit;
      font-weight: 600;
      font-size: 18px;
      padding: 8px 0 16px;
      &.other {
        padding: 8px 0 4px;
      }
    }
    p {
      color: inherit;
    }
    ul {
      list-style-type: none;
      li {
        color: inherit;
        padding-bottom: 10px;
      }
    }
    &.footer {
      grid-column: 1/-1;
      text-align: center;
      padding: 24px 0;
      margin-top: 64px;
      border-top: 1px solid ${(props) => props.theme.neutral400};
      color: ${(props) => props.theme.neutral300};
      font-size: 14px;
    }
  }
`;
