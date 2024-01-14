"use client";

import Link from "next/link";
import Image from "next/image";
import { IEmployee } from "./types";
import Button from "../button/Button";
import styled from "styled-components";
import InfoSection from "../infoSection/InfoSection";
import ImageSection from "../imageSection/ImageSection";
import PointSection from "../pointSection/PointSection";

const ListItemWrapper = styled.div`
  gap: 2rem;
  display: flex;
  cursor: pointer;
  position: relative;
  padding: 40px 0px 40px 0px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  & > * {
    user-select: none;
  }
  @media (max-width: 768px) {
    padding: 60px 60px;
    gap: 2.5rem;
    &:active {
      outline: none;
      &:after {
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0.1;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        background-color: #81be83;
      }
    }
  }

  @media (min-width: 768px) {
    &:hover:not(:active) {
      scale: 1.01;
      box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
  }
`;

const CrownWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translatex(-50%);
`;

function EmployeeListItem({ employee }: { employee: IEmployee }) {
  return (
    <Link href={`/${employee.id}`}>
      <ListItemWrapper>
        {employee.isFirst && (
          <CrownWrapper>
            <Image src="/images/crown.svg" width={30} height={30} alt="crown" />
          </CrownWrapper>
        )}
        <PointSection point={employee.point} />
        <ImageSection avatar={employee.avatar} alt={employee.name} />
        <InfoSection name={employee.name} position={employee.position} />
        <Button id={employee.id} />
      </ListItemWrapper>
    </Link>
  );
}

export default EmployeeListItem;
