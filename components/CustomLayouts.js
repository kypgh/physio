import styled from "styled-components";
import color from "../public/colors";

const CusContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 992px) {
    max-width: 1140px;
  }
`;

export const Container = ({ children }) => {
  return <CusContainer>{children}</CusContainer>;
};

const CusRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  height: 100%;
`;

export const Row = ({ children }) => {
  return <CusRow>{children}</CusRow>;
};

const CusCol12 = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  color: ${color.white};
`;

export const Col12 = ({ children }) => {
  return <CusCol12>{children}</CusCol12>;
};

const CusCol6 = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    max-width: 50%;
    flex: 0 0 50%;
  }
`;

export const Col6 = ({ children }) => {
  return <CusCol6>{children}</CusCol6>;
};

const CusCol4 = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    max-width: 33%;
    flex: 0 0 33%;
  }
`;

export const Col4 = ({ children }) => {
  return <CusCol4>{children}</CusCol4>;
};

const CusCol3 = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    max-width: 25%;
    flex: 0 0 25%;
  }
`;

export const Col3 = ({ children }) => {
  return <CusCol3>{children}</CusCol3>;
};

const CusSection = styled.div`
  padding: 70px 0;
  background-color: ${({ bg }) => bg};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const Section = ({ children, bgColor, bgImg }) => {
  return (
    <CusSection bg={bgColor} img={bgImg}>
      {children}
    </CusSection>
  );
};
