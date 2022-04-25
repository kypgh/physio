import styled from "styled-components";
import Link from "next/link";

import { logo } from "../public/imagesConfig";
import color from "../public/colors";
import { navItemsArr } from "../public/data/navItemsArr";

const CusFooter = styled.div`
  padding: 15px;
  width: 100%;
  background-color: ${color.lightBlue};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 200px;
    height: auto;
    z-index: 2;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${color.white};
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(20px);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: fit-content;
  width: 100%;
  /* margin: auto; */
`;

const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  color: ${color.white};
  cursor: pointer;
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <CusFooter>
      <Inner>
        <LogoContainer>
          <img src={logo}></img>
        </LogoContainer>
        <InfoContainer>
          <SocialsContainer>socials</SocialsContainer>
          <MenuItemsContainer>
            {navItemsArr.map((x, idx) => (
              <Link key={idx} href={x.link} passHref>
                <MenuItem>{x.item}</MenuItem>
              </Link>
            ))}
          </MenuItemsContainer>
        </InfoContainer>
      </Inner>
    </CusFooter>
  );
}
