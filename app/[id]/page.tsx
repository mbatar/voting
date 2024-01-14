"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSuspenseQuery } from "@apollo/client";
import { GET_ALL_LOGS, GET_EMPLOYEE } from "@/service/graphql";
import { IEmployee } from "@/components/employeeListItem/types";

const EmployeeDetailsWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmployeeInfoWrapper = styled.div`
  gap: 1rem;
  padding: 90px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmployeeDetailsContent = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ImageWrapper = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 100%;
  height: 200px;
  background-color: #81be8320;
  position: relative;
  & > img {
    position: absolute;
    left: 50%;
    bottom: -90px;
    transform: translateX(-50%);
    border-radius: 100%;
  }
`;

const CrownWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translatex(-50%);
  z-index: 1;
`;

const PointWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #81be8320;
  border: 1px solid #81be8320;
  color: #81be83;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoWrapper = styled.div`
  margin-top: 24px;
  border-top: 1px solid #81be8320;
  width: 100%;
  gap: 1rem;
  display: flex;
  height: 200px;
  padding: 24px;

  & > .wrapper-item {
    & > h5 {
      font-size: 1.1rem;
    }
    & > h6 {
      font-size: 0.9rem;
    }
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    &:nth-child(2) {
      border-left: 1px solid #81be8320;
      border-right: 1px solid #81be8320;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function EmployeeDetails({ params: { id } }: { params: { id: string } }) {
  const { data } = useSuspenseQuery<{ getEmployeeById: IEmployee }>(
    GET_EMPLOYEE,
    {
      variables: { getEmployeeByIdId: id },
    }
  );
  useSuspenseQuery(GET_ALL_LOGS);

  return (
    <EmployeeDetailsWrapper>
      <EmployeeDetailsContent>
        {data?.getEmployeeById?.isFirst && (
          <CrownWrapper>
            <Image src="/images/crown.svg" width={40} height={40} alt="crown" />
          </CrownWrapper>
        )}
        <ImageWrapper>
          {data?.getEmployeeById?.avatar && (
            <Image
              src={data?.getEmployeeById?.avatar}
              width={180}
              height={180}
              alt={data?.getEmployeeById?.name}
            />
          )}
        </ImageWrapper>
        <EmployeeInfoWrapper>
          <h1>{data?.getEmployeeById?.name}</h1>
          <h2>{data?.getEmployeeById?.position}</h2>
          <PointWrapper>
            <h2>{data?.getEmployeeById?.point}</h2>
          </PointWrapper>
          <InfoWrapper>
            <div className="wrapper-item">
              <h5>Address</h5>
              <h6>{data?.getEmployeeById?.address}</h6>
            </div>
            <div className="wrapper-item">
              <h5>Email</h5>
              <h6>{data?.getEmployeeById?.email}</h6>
            </div>
            <div className="wrapper-item">
              <h5>Phone</h5>
              <h6>{data?.getEmployeeById?.phone}</h6>
            </div>
          </InfoWrapper>
        </EmployeeInfoWrapper>
      </EmployeeDetailsContent>
    </EmployeeDetailsWrapper>
  );
}

export default EmployeeDetails;
