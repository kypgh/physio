import styled from "styled-components";

const Outer = styled.div`
  position: relative;
  min-width: ${({ width }) => width};
  /* max-width: ${({ width }) => width}; */
  max-width: 100%;
  width: 100%;
  min-height: ${({ height }) => height};
  max-height: 100%;
  height: auto;

  & span {
    height: 100% !important;
  }

  & span img {
    width: inherit !important;
    height: 100% !important;
  }
`;

export default function ImageWrapper({
  children,
  width = "100px",
  height = "100px",
}) {
  if (typeof width === "number") width = width + "px";
  if (typeof height === "number") height = height + "px";

  return (
    <Outer width={width} height={height}>
      {children}
    </Outer>
  );
}
