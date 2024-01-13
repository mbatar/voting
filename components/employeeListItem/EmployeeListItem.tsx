"use client";

import styled from "styled-components";
import Button from "../button/Button";
import InfoSection from "../infoSection/InfoSection";
import ImageSection from "../imageSection/ImageSection";
import PointSection from "../pointSection/PointSection";
import { IEmployeeListItem } from "./types";
import Link from "next/link";

const ListItemWrapper = styled.div`
  gap: 2rem;
  display: flex;
  cursor: pointer;
  position: relative;
  padding: 40px 0px;
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

function EmployeeListItem({ employee }: IEmployeeListItem) {
  return (
    <Link href={`/${employee.id}`}>
      <ListItemWrapper>
        <PointSection point={employee.point} />
        <ImageSection avatar={employee.avatar} alt={employee.name} />
        <InfoSection name={employee.name} position={employee.position} />
        <Button id={employee.id} />
      </ListItemWrapper>
    </Link>
  );
}

export default EmployeeListItem;
