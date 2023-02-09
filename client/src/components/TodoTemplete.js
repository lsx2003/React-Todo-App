import styled from "styled-components";
import Day from "./Day";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Calendar from "./Calendar";
import { useSelector } from "react-redux";

const Backgroud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 231px;
  min-height: 1000px;
  max-height: 1500px;
`;

const Templete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  min-width: 600px;
  min-height: 900px;
  max-width: 500px;
  max-height: 800px;
  border-radius: 15px;
  border: solid 0.9px lightgray;
  position: absolute;
  margin: auto;
  box-shadow: 2px 2px 1px 1px gray;
  background-color: white;

  opacity: 0.98;
`;

export default function TodoTemplete() {
  const isClicked = useSelector((state) => {
    return state.calendar.clicked;
  });
  return (
    <Backgroud className="a">
      <Templete>
        {isClicked ? (
          <Calendar></Calendar>
        ) : (
          <>
            <Header></Header>
            <Day></Day>
            <Todos></Todos>
            <AddTodo></AddTodo>
          </>
        )}
      </Templete>
    </Backgroud>
  );
}
