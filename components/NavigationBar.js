import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

import color from "../public/colors";
import { logo } from "../public/imagesConfig";
import { useWindowSize } from "../utils/functions";
import { navItemsArr } from "../public/data/navItemsArr";

const Position = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${color.lightBlue};
  box-shadow: 0px 5px 10px 0px ${color.grey};
  border-radius: 0px 0px 60px 0px;
  z-index: 5;

  @media (max-width: 991px) {
    border-radius: 0;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  max-width: 1140px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  margin: auto;
  @media (max-width: 991px) {
    padding: 10px 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  img {
    border-radius: 50%;
    margin: auto;
    max-width: 90px;
    height: auto;
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: ${color.white};
    z-index: 1;
    border-radius: 50%;
    filter: blur(20px);
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    position: fixed;
    top: 100px;
    left: ${({ open }) => (open ? "0px" : "-300px")};
    transition: 0.3s all ease;
    background-color: ${color.lightBlue};
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 300px;
    width: 100%;
    gap: 20px;
    padding-top: 20px;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  color: ${color.white};
  border-bottom: ${({ active }) =>
    active ? `2px solid ${color.white}` : "2px solid transparent"};
  transition: 0.3s all ease;
  cursor: pointer;
  text-transform: uppercase;
`;

const MobileItemContainer = styled.div`
  width: 50px;
  height: 50px;
  color: ${color.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NavigationBar() {
  const [navOpen, setNavOpen] = useState(false);

  const router = useRouter();
  const { width } = useWindowSize();

  // on click away to close mobile navigation
  const mobileNav = useRef();
  const openButton = useRef();
  useEffect(() => {
    if (!navOpen) return;
    function handleClick(event) {
      if (
        mobileNav.current &&
        !mobileNav.current?.contains(event.target) &&
        !openButton.current?.contains(event.target)
      ) {
        setNavOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [navOpen]);

  return (
    <Position>
      <NavBar>
        <Link href={"/"} passHref>
          <a>
            <LogoContainer>
              <img src={logo}></img>
            </LogoContainer>
          </a>
        </Link>

        <NavItemsContainer open={navOpen} ref={mobileNav}>
          {navItemsArr.map((x, idx) => (
            <Link key={idx} href={x.link} passHref>
              <NavItem active={x.link === router.pathname}>{x.item}</NavItem>
            </Link>
          ))}
        </NavItemsContainer>

        {width < 992 && (
          <MobileItemContainer
            ref={openButton}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? "x" : "✔"}
          </MobileItemContainer>
        )}
      </NavBar>
    </Position>
  );
}
