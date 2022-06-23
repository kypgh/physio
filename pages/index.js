import Image from "next/image";
import styled from "styled-components";

import ImageWrapper from "../components/ImageWrapper";
import sanityClient from "../utils/sanity";
import {
  Container,
  Row,
  Col12,
  Col6,
  Section,
} from "../components/CustomLayouts";
import { H1, H2 } from "../components/Styling";
import { homeHero } from "../public/imagesConfig";
import { servicesArr } from "../public/data/servicesArr";
import color from "../public/colors";

const Hero = styled.div`
  padding: 70px 0;
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(1, 17, 46, 1) 20%,
      rgba(0, 0, 0, 60%) 100%
    ),
    url(${homeHero});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
  display: flex;
  align-content: center;

  @media (max-width: 991px) {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(1, 17, 46, 1) 100%
    );
    min-height: unset;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 15px;
`;

const ServicesContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServicesItem = styled.div`
  background-color: violet;
  max-width: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: calc(50% - 20px);
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    transition: 0.3s all ease;
  }

  &:hover img {
    filter: grayscale(0.5);
    transform: scale(1.1);
  }
`;

const TextOverflow = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.lightBlue};
  color: ${color.white};
  padding: 5px 10px;
  top: calc(100% - 32px - 5px - 5px);
  transition: 0.3s all ease;
  @media (hover: hover) {
    ${ServicesItem}:hover & {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media (hover: none) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & h2 {
    font-size: 22px;
    font-weight: 700;
    align-self: center;
  }
`;

export default function Home({ post }) {
  const { title } = post;
  // console.log(servicesArr[0].img);

  return (
    <>
      <Hero>
        <Container>
          <Row>
            <Col12>
              <Title>
                <H1 color={color.white}>Physiotherapy Ioannou Demetris</H1>
                <H2 color={color.white}>
                  What Makes Us Better, Makes You Better.
                </H2>
                <p style={{ color: "#ffffff" }}>{title}</p>
              </Title>
            </Col12>
          </Row>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Row>
            <Col12 mb={5}>
              <H2 center color={color.black}>
                Our Services
              </H2>
            </Col12>
            <Col12>
              <ServicesContainer>
                {servicesArr.slice(0, 6).map((el, idx) => (
                  <ServicesItem key={idx}>
                    {/* <img src={el.img} /> */}
                    <ImageWrapper width={el.img.width} height={el.img.height}>
                      {el.img}
                    </ImageWrapper>
                    <TextOverflow>
                      <H2 mb={1}>{el.name}</H2>
                      <p>{el.desc}</p>
                    </TextOverflow>
                  </ServicesItem>
                ))}
              </ServicesContainer>
            </Col12>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col12>
              <H2 color={color.black} mb={5} center>
                About Us
              </H2>
            </Col12>
            <Col6>
              <img src="/images/physiotherapy.jpg" />
            </Col6>
            <Col6>
              <AboutList>
                <h2>Demetris Ioannou</h2>
                <p>Address: Viotas 6, Agia Zwni Limassol</p>
                <p>Tel: 99999999</p>
              </AboutList>
            </Col6>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export async function getStaticProps(context) {
  const post = await sanityClient.fetch('*[title != ""][0]').then((res) => res);
  return {
    props: {
      post,
    },
  };
}
