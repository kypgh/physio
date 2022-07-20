import styled from "styled-components";

import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { logo } from "../public/imagesConfig";
import color from "../public/colors";

const CusFooter = styled.div`
  width: 100%;
  background-color: ${color.white};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  margin: auto;
  padding: 15px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100px;
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

  @media (max-width: 991px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-width: 100%;
  width: 100%;
  /* margin: auto; */
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  width: fit-content;

  svg {
    color: ${color.primary};
    font-size: 22px;
  }
  p {
    font-size: 18px;
    color: ${color.secondary};
    font-weight: 700;
  }
  a {
    color: ${color.secondary};
    font-weight: 700;
  }
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
              <FaFacebook />
              <a
                href="https://www.facebook.com/physiotherapydemetrisioannou"
                target="_blank"
                rel="noreferrer"
              >
                Physiotherapy ioannou demetris
              </a>
            </Socials>
            <Socials>
              <MdEmail />
              <a href="mailto: ioannoydemetris@hotmail.com">
                ioannoydemetris@hotmail.com
              </a>
            </Socials>
            <Socials>
              <FaPhoneAlt />
              <p>9999999999</p>
            </Socials>
          </SocialsContainer>
        </InfoContainer>
      </Inner>
    </CusFooter>
  );
}
