import Image from "next/image";
import styled from "styled-components";
import sanityClient from "../utils/sanity";

// import sanityClient from "@sanity/client";

import DefaultLayout from "../components/DefaultLayout";
import {
  Container,
  Row,
  Col12,
  Col6,
  Section,
} from "../components/CustomLayouts";
import { H1, H2 } from "../components/Styling";

export default function Home({ post }) {
  const { title } = post;
  return (
    <DefaultLayout>
      <Section>
        <Container>
          <Row>
            <Col12>
              <H1>homepage</H1>
              <H2>homepage asdas dasd asd </H2>
              {title}
            </Col12>
          </Row>
        </Container>
      </Section>
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
