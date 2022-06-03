import Image from "next/image";
import styled from "styled-components";
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

  @media (max-width: 991px) {
    max-width: calc(50% - 20px);
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default function Home({ post }) {
  const { title } = post;
  return (
    <>
      <Hero>
        <Container>
          <Row>
            <Col12>
              <Title>
                <H1>Physiotherapy Ioannou Demetris</H1>
                <H2>What Makes Us Better, Makes You Better.</H2>
                {title}
              </Title>
            </Col12>
          </Row>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Row>
            <Col12>
              <H2 center color={color.black} mb={5}>
                Our Services
              </H2>
              <ServicesContainer>
                {servicesArr.slice(0, 6).map((el, idx) => (
                  <ServicesItem key={idx}>
                    <img src={el.img} />
                    <H2>{el.name}</H2>
                  </ServicesItem>
                ))}
              </ServicesContainer>
            </Col12>
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
