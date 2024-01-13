"use client";

import Image from "next/image";
import styled from "styled-components";
import { IImageSection } from "./types";

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`;
function ImageSection({ avatar, alt }: IImageSection) {
  return (
    <ImageWrapper>
      <Image src={avatar} alt={alt} fill />
    </ImageWrapper>
  );
}

export default ImageSection;
