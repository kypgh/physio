import styled from "styled-components";

const CusH1 = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ color }) => color};
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-bottom: ${({ mb }) => mb || "0"};
  margin-top: ${({ mt }) => mt || "0"};
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

export const H1 = ({ children, color, styles, center, mb, mt }) => {
  let stylesController = {
    1: "10px",
    2: "15px",
    3: "20px",
    4: "25px",
    5: "30px",
  };
  return (
    <CusH1
      style={styles}
      center={center}
      mb={stylesController[mb]}
      mt={stylesController[mt]}
      color={color}
    >
      {children}
    </CusH1>
  );
};

const CusH2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ color }) => color};
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-bottom: ${({ mb }) => mb || "0"};
  margin-top: ${({ mt }) => mt || "0"};
  @media (max-width: 991px) {
    font-size: 22px;
  }
`;

export const H2 = ({ children, color, styles, center, mb, mt }) => {
  let stylesController = {
    1: "10px",
    2: "15px",
    3: "20px",
    4: "25px",
    5: "30px",
  };
  return (
    <CusH2
      style={styles}
      center={center}
      mb={stylesController[mb]}
      mt={stylesController[mt]}
      color={color}
    >
      {children}
    </CusH2>
  );
};
