import styled from "styled-components";
import Image from "next/image";

const Outer = styled.div`
  position: relative;
  /* min-width: ${({ width }) => width}; */
  max-width: ${({ width }) => width};
  max-width: 100%;
  width: 100%;
  min-height: ${({ height }) => height};
  /* max-height: ${({ height }) => height}; */

  max-height: 100%;
  height: 100%;

  /* & span {
    height: 100% !important;
  }

  & span img {
    width: inherit !important;
    height: 100% !important;
  } */
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
      <Image src={children} priority layout="fill" />
    </Outer>
  );
}
