import styled from "styled-components";

const CusH1 = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ color }) => color};
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

export const H1 = ({ children, color }) => {
  return <CusH1 color={color}>{children}</CusH1>;
};

const CusH2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ color }) => color};
  @media (max-width: 991px) {
    font-size: 22px;
  }
`;

export const H2 = ({ children, color }) => {
  return <CusH2 color={color}>{children}</CusH2>;
};
