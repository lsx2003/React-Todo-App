import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  open,
  cancel,
  addContent,
  updateContent,
} from "../slice/addContentSlice";
import { add } from "../slice/todoSlice";
import { dateString } from "./Day";
import { BsXCircleFill } from "react-icons/bs";
import { cancel2 } from "../slice/addContentSlice";

const BtnContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  bottom: 0;
`;
const AddBtn = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #60a3bc;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border: none;
  font-size: 30px;
  color: white;
  margin: 0 0 30px 0;

  :hover {
    background-color: #7f8c8d;
  }
`;

const AddContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background-color: #cecece;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  font-size: 30px;
  color: #2c3e50;
  font-size: 21px;
  font-weight: 500;
  padding: 20px 15px 20px 15px;
  border: 1px solid #7f8c8d;
`;

const ContentInput = styled.input`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 30px;
  border: solid 3px lightgray;
  border-radius: 10px;
  font-size: 30px;
  color: white;
  font-size: 20px;
  color: #130f40;
  font-weight: 400;
  padding: 15px 5px 15px 5px;
  margin-top: 10px;
`;

const AddContentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #60a3bc;
  width: 100px;
  height: 35px;
  border-radius: 15px;
  margin: 20px 15px 5px 70%;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: white;
  :hover {
    background-color: #7f8c8d;
  }
`;

const UpdateTodo = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  min-width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: #cecece;
  border-radius: 15px;
  font-size: 30px;
  color: #2c3e50;
  font-size: 21px;
  font-weight: 500;
  padding: 20px 15px 20px 15px;
  border: 1px solid #7f8c8d;
  z-index: 1;
`;

const UpdateContentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #60a3bc;
  width: 100px;
  height: 35px;
  border-radius: 15px;
  margin: 20px 15px 5px 70%;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: white;

  :hover {
    background-color: #7f8c8d;
  }
`;
const CancelContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 99%;
  color: #2c3e50;
  font-size: 25px;
  cursor: pointer; ;
`;

export default function Addtodd() {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => {
    return state.content.isOpen;
  });

  const isOpened2 = useSelector((state) => {
    return state.content.isOpen2;
  });

  const content = useSelector((state) => {
    return state.content.addVal;
  });

  const newContent = useSelector((state) => {
    return state.content.updateVal;
  });

  const id = useSelector((state) => {
    return state.content.selected;
  });

  const addHandler = (id, date, done, content) => {
    if (content) {
      dispatch(add({ id: id, date: date, isDone: done, content: content }));
      addTodos(id, date, done, content);
    }
  };
  //  todo ????????????

  const addTodos = async (id, date, done, content) => {
    await fetch(`${process.env.REACT_APP_URL}/api/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        date,
        done,
        content,
      }),
    });
    window.location.reload();
  };
  // content ????????????
  const changeContent = async (id, content) => {
    await fetch(`${process.env.REACT_APP_URL}/api/todos/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        content,
      }),
    });
    window.location.reload();
  };

  return (
    <BtnContainer>
      {isOpened2 ? (
        <UpdateTodo>
          <CancelContainer>
            <BsXCircleFill onClick={() => dispatch(cancel2())}></BsXCircleFill>
          </CancelContainer>
          ????????? ????????? ???????????????!!
          <ContentInput
            onChange={(event) => {
              dispatch(updateContent(event.target.value));
            }}
          ></ContentInput>
          <UpdateContentBtn
            onClick={() => {
              changeContent(id, newContent);
            }}
          >
            ??? ???
          </UpdateContentBtn>
        </UpdateTodo>
      ) : null}
      {isOpened ? (
        <AddContent>
          <CancelContainer>
            <BsXCircleFill onClick={() => dispatch(cancel())}></BsXCircleFill>
          </CancelContainer>
          ????????? ?????? ???????????????!!
          <ContentInput
            onChange={(event) => {
              dispatch(addContent(event.target.value));
            }}
          ></ContentInput>
          <AddContentBtn
            onClick={() => {
              addHandler(null, dateString, false, content);
              dispatch(cancel());
              dispatch(addContent(null));
            }}
          >
            ??? ???
          </AddContentBtn>
        </AddContent>
      ) : (
        <AddBtn
          onClick={(e) => {
            e.stopPropagation();
            dispatch(open());
          }}
        >
          +
        </AddBtn>
      )}
    </BtnContainer>
  );
}
