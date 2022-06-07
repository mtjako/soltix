import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavWrap>
        <Link href="/" passHref>
          <div>
            <Logo src={"/logo/logo.svg"} alt="logo" width={150} height={58} />
          </div>
        </Link>
        <Menu>
          <Link href="/dedicatedsoftware" passHref>
            <MenuItem>Oprogramowanie dedykowane</MenuItem>
          </Link>
          <Link href="/modeofaction" passHref>
            <MenuItem>Sposób działania</MenuItem>
          </Link>
          <Link href="/contact" passHref>
            <MenuItem>Kontakt</MenuItem>
          </Link>
        </Menu>
        <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </HamburgerIcon>
        <HamburgerMenu className={isOpen ? "active" : ""}>
          <Link href="/dedicatedsoftware" passHref>
            <HamburgerMenuItem>Oprogramowanie dedykowane</HamburgerMenuItem>
          </Link>
          <Link href="/modeofaction" passHref>
            <HamburgerMenuItem>Sposób działania</HamburgerMenuItem>
          </Link>
          <Link href="/contact" passHref>
            <HamburgerMenuItem>Kontakt</HamburgerMenuItem>
          </Link>
        </HamburgerMenu>
      </NavWrap>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 10;
  background-color: #fffa;
  backdrop-filter: saturate(180%) blur(20px);
  top: 0;
  left: 0;
`;

const NavWrap = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 150px;
  height: 80px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width: 750px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  padding: 0 20px;
  font-weight: 500;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
`;

const HamburgerIcon = styled.div`
  padding: 0 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 72px);
  position: absolute;
  top: 72px;
  right: -100vw;
  transition: right 0.75s;
  &.active {
    right: 0;
  }
  padding: 0 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const HamburgerMenuItem = styled.div`
  padding: 20px;
  font-weight: 500;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
`;
