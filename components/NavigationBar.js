import styled from "styled-components";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import color from "../public/colors";
import { logo } from "../public/imagesConfig";
import { useWindowSize } from "../utils/functions";
import { navItemsArr } from "../public/data/navItemsArr";
import { openIcon, closeIcon } from "../public/imagesConfig";

const Position = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${color.white};
  box-shadow: 0px 1px 10px 0px ${color.grey};
  z-index: 5;

  @media (max-width: 991px) {
    border-radius: 0;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  max-width: 1140px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  margin: auto;
  position: relative;
  background-color: ${color.white};

  @media (max-width: 991px) {
    padding: 0px 15px;
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
    max-width: 70px;
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
    position: absolute;
    top: ${({ open }) => (open ? "100%" : "0")};
    transform: translateY(${({ open }) => (open ? "0px" : "-100%")});
    left: 0;
    transition: 0.3s all ease;
    background-color: ${color.white};
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    padding: 20px 0;
    height: fit-content;
    z-index: -1;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  color: ${({ active }) => (active ? color.primary : color.grey)};
  border-bottom: ${({ active }) =>
    active ? `2px solid ${color.primary}` : "2px solid transparent"};
  transition: 0.3s all ease;
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 991px) {
    color: ${({ active }) => (active ? color.primary : color.grey)};
    border: none;
  }
`;

const MobileItemContainer = styled.div`
  width: 30px;
  height: 30px;
  color: ${color.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export default function NavigationBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

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
        <Link href={"#hero"} passHref>
          <a onClick={() => setSelectedTab(0)}>
            <LogoContainer>
              <img src={logo}></img>
            </LogoContainer>
          </a>
        </Link>

        <NavItemsContainer open={navOpen} ref={mobileNav}>
          {navItemsArr.map((x, idx) => (
            <Link key={idx} href={x.link} passHref>
              <NavItem
                active={idx === selectedTab}
                onClick={() => setSelectedTab(idx)}
              >
                {x.item}
              </NavItem>
            </Link>
          ))}
        </NavItemsContainer>

        {width < 992 && (
          <MobileItemContainer
            ref={openButton}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <img src={closeIcon} /> : <img src={openIcon} />}
          </MobileItemContainer>
        )}
      </NavBar>
    </Position>
  );
}
