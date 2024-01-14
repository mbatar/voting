"use client";

import styled from "styled-components";
import { IInfoSection } from "./types";

const InfoWrapper = styled.div`
  gap: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h5 {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
  }
  & > h6 {
    font-size: 1rem;
    font-weight: 400;
    color: #929292;
  }
`;
function Info({ name, position }: IInfoSection) {
  return (
    <InfoWrapper>
      <h5>{name}</h5>
      <h6>{position}</h6>
    </InfoWrapper>
  );
}

export default Info;
