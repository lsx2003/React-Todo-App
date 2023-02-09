import React from "react";

import styled from "styled-components";

const DayContainer = styled.div`
  min-width: 231px;
  min-height: 110px;
  padding-bottom: 15px;
  border-bottom: solid 1px lightgray;
  padding: 0 10px 20px 10px;
`;
const Days = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 231px;
  min-height: 50px;
  font-size: 25px;
  color: black;
  margin: 15px 0 15px 0;
  padding: 0 10px 0 10px;
`;
const DayOfWeek = styled.div`
  min-width: 231px;
  font-size: 22px;
  color: #636e72;
  margin: 10px 0 10px 0;
  padding: 0 10px 0 10px;
`;

const today = new Date();

const dateString = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

export default function Day() {
  return (
    <>
      <DayContainer>
        <Days>{dateString} </Days>
        <DayOfWeek>{dayName}</DayOfWeek>
      </DayContainer>
    </>
  );
}
export { dateString };
