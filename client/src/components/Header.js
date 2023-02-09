import { useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "../img/logo.png";
import title from "../img/title.png";
import { open } from "../slice/calendarSlice";

const HeaderContaioner = styled.div`
  min-width: 231px;
  min-height: 60px;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 10px 0 lightgray;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  min-width: 35px;

  margin: 10px 5px 10px 10px;
`;
const Title = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  min-width: 110px;
  height: 50px;
  background-color: white;
  margin: auto;
`;

const CalendarBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  min-width: 50px;
  height: 60px;
  background-color: white;
  font-size: 1rem;
  color: #60a3bc;
  font-weight: 600;
  margin: auto;
  border-radius: 15px 15px 0 0;
  padding-left: 20px;
`;

export default function Header() {
  const dispatch = useDispatch();

  return (
    <HeaderContaioner>
      <Logo src={logo} alt="logo"></Logo>
      <Title src={title} alt="title"></Title>
      <CalendarBtn
        onClick={(e) => {
          e.stopPropagation();
          dispatch(open());
        }}
      >
        달력 보기
      </CalendarBtn>
    </HeaderContaioner>
  );
}
