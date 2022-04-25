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
  max-width: 1140px;
  width: 100%;
  margin: auto;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 200px;
    height: auto;
    z-index: 1;
  }
  &:before {
    content: "";
    width: 70%;
    height: 70%;
    background-color: ${color.white};
    border-radius: 50%;
    /* z-index: 1; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  gap: 20px;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: fit-content;
  width: 100%;
  /* margin: auto; */
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: ${color.white};
  }
  a {
    color: ${color.white};
  }
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
          <SocialsContainer>
            <Socials>
              <h3>Facebook: </h3>
              <a
                href="https://www.facebook.com/physiotherapydemetrisioannou"
                target="_blank"
              >
                Physiotherapy ioannou demetris
              </a>
            </Socials>
            <Socials>
              <h3>Email: </h3>
              <a href="mailto: ioannoydemetris@hotmail.com">
                ioannoydemetris@hotmail.com
              </a>
            </Socials>
            <Socials>
              <h3>Tel: </h3>
              <p>9999999999</p>
            </Socials>
          </SocialsContainer>
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
