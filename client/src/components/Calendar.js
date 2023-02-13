import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { close } from "../slice/calendarSlice";

const Backgroud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2f3640;
  min-width: 350px;
  max-width: 500px;
  max-height: 800px;
  opacity: 0.7;
  border-radius: 15px;
  margin-left: 1px;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 800px;
  border-radius: 15px;
`;
const GoBackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background-color: #60a3bc;
  color: white;
  font-weight: 500;
  :hover {
    background-color: #30336b;
  }
`;
export default function Calendar() {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    console.log(selected);
    footer = <p>You picked {format(selected, "yyyy-MM-dd")}</p>;
  }
  return (
    <Backgroud>
      <CalendarContainer>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        ></DayPicker>
        <GoBackBtn
          onClick={(event) => {
            event.stopPropagation();
            return dispatch(close());
          }}
        >
          뒤로가기
        </GoBackBtn>
      </CalendarContainer>
    </Backgroud>
  );
}
