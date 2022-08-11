import styled, {keyframes} from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Nav>
      <NavWrap>
        <Link href="/" passHref>
          <div>
            <Logo src={"/logo/logo.svg"} alt="logo" width={150} height={58} />
          </div>
        </Link>
        <Menu>
          <Link href="/modeofaction" passHref>
            <MenuItem>Jak wyglądają darmowe warsztaty?</MenuItem>
          </Link>
          <DropdownBtn>
            <MenuItem onClick={() => setDropdownOpen(!dropdownOpen)}>
              <p>Jak usprawnimy działanie</p>
              <Image
                src="/home/hero/chevron.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </MenuItem>
            {dropdownOpen && (
              <Dropdown>
                <Link href="/firmyProdukcyjne">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Firmy produkcyjnej
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Firmy transportowej
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Magazynu
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Kancelarii prawnej
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Sklepu internetowego
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Działu HR
                  </DropdownItem>
                </Link>
                <Link href="/firmyTransportowe">
                  <DropdownItem onClick={() => setDropdownOpen(false)}>
                    Firmy usługowej
                  </DropdownItem>
                </Link>
              </Dropdown>
            )}
          </DropdownBtn>
          <Link href="/startup" passHref>
            <MenuItem>Masz pomysł na start’up?</MenuItem>
          </Link>
          <Link href="/contact" passHref>
            <MenuItem>Kontakt</MenuItem>
          </Link>
        </Menu>
        <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </HamburgerIcon>
        <HamburgerMenu className={isOpen ? "active" : ""}>
          <Link href="/modeofaction" passHref>
            <HamburgerMenuItem>
              Jak wyglądają darmowe warsztaty?
            </HamburgerMenuItem>
          </Link>

          <HamburgerMenuItem>Jak usprawnimy działanie</HamburgerMenuItem>
          <div>
            <Link href="/firmyProdukcyjne">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Firmy produkcyjnej
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Firmy transportowej
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Magazynu
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Kancelarii prawnej
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Sklepu internetowego
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Działu HR
              </DropdownItem>
            </Link>
            <Link href="/firmyTransportowe">
              <DropdownItem onClick={() => setDropdownOpen(false)}>
                Firmy usługowej
              </DropdownItem>
            </Link>
          </div>

          <Link href="/contact" passHref>
            <HamburgerMenuItem>Masz pomysł na start’up?</HamburgerMenuItem>
          </Link>
          <Link href="/contact" passHref>
            <HamburgerMenuItem>Kontakt</HamburgerMenuItem>
          </Link>
        </HamburgerMenu>
      </NavWrap>
    </Nav>
  );
}

const show = keyframes`
  from {
    opacity: 0;
    top: 0;
  }

  to {
    opacity: 1;
  top: 48px;
  }
`;

const Dropdown = styled.div`
  background-color: #fff;
  width: max-content;
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  box-shadow: 0px 7px 20px 0px rgb(42 22 139 / 8%);
  animation: ${show} .25s ease-in-out;

`;


const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownBtn = styled.div`
  position: relative;
`;

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
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    color: inherit;
    margin-right: 4px;
  }
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
  overflow-y: scroll;
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
