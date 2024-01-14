"use client";

import styled from "styled-components";
import { IPointSection } from "./types";

const PointWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 100%;
  border: 1px solid #81be8320;
  background-color: #81be8320;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #81be83;
  font-weight: 700;
`;
function PointSection({ point }: IPointSection) {
  return <PointWrapper>{point}</PointWrapper>;
}

export default PointSection;
