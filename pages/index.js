import Image from "next/image";
import styled from "styled-components";

import DefaultLayout from "../components/DefaultLayout";
import {
  Container,
  Row,
  Col12,
  Col6,
  Section,
} from "../components/CustomLayouts";
import { H1, H2 } from "../components/Styling";

export default function Home() {
  return (
    <DefaultLayout>
      <Section>
        <Container>
          <Row>
            <Col12>
              <H1>homepage</H1>
              <H2>homepage asdas dasd asd </H2>
            </Col12>
          </Row>
        </Container>
      </Section>
    </DefaultLayout>
  );
}
