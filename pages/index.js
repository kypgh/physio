import Image from "next/image";
import styled from "styled-components";
import sanityClient from "../utils/sanity";

import DefaultLayout from "../components/DefaultLayout";
import {
  Container,
  Row,
  Col12,
  Col6,
  Section,
} from "../components/CustomLayouts";
import { H1, H2 } from "../components/Styling";
import { homeHero } from "../public/imagesConfig";

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

export default function Home({ post }) {
  const { title } = post;
  return (
    <DefaultLayout>
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
    </DefaultLayout>
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
