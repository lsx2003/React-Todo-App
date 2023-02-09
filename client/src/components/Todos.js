import styled from "styled-components";
import {
  BsFillCheckCircleFill,
  BsEraserFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { open2, setId } from "../slice/addContentSlice";
import { add } from "../slice/todoSlice";
import { useEffect, useState } from "react";
const TodoContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const CheckBox = styled.div`
  box-sizing: border-box;
  text-align: center;
  background-color: white;
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 100%;
  border: 1px solid #60a3bc;
  cursor: pointer;

  :hover {
    background-color: beige;
  }
`;

const ClickedBox = styled.div`
  box-sizing: border-box;
  text-align: center;
  background-color: white;
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 100px;

  .check {
    color: #30336b;
    width: 30px;
    height: 30px;
  }
`;

const TodoContent = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 90%;
  height: 50px;
  background-color: white;
  list-style: none;
`;

const Cancel = styled.div`
  margin: 10px 5px 5px 15px;
  font-weight: 800;
  font-size: 1.2rem;
  color: #d35400;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const Eraser = styled.div`
  margin: 10px 5px 5px 5px;
  font-weight: 800;
  font-size: 1.2rem;
  color: #d35400;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 1000px;
  overflow: auto;
  padding: 10px;
`;

export default function Todos() {
  const [update, setUpdate] = useState();
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    console.log(state.todo[0]);
    return state.todo[0];
  });

  useEffect(() => {
    getTodos();
  });

  // 서버에서  todo 데이터 가져와서 state에 추가하기
  const getTodos = async () => {
    await fetch("http://localhost:4000/api/todos")
      .then((res) => res.json())
      .then((data) => dispatch(add(data)));
  };

  // 서버에서  todo 데이터 삭제 요청 후 state에 만 반영하기;
  const removeTodos = async (id) => {
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  const changeDone = async (id, isDone) => {
    await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone,
      }),
    });
    window.location.reload();
  };

  return (
    <Container>
      {todos &&
        todos.map((todo, idx) => {
          return (
            <TodoContainer key={todo.id}>
              {todo.isDone ? (
                <ClickedBox
                  onClick={() => {
                    changeDone(todo.id, todo.isDone);
                  }}
                >
                  <BsFillCheckCircleFill className="check"></BsFillCheckCircleFill>
                </ClickedBox>
              ) : (
                <CheckBox
                  onClick={() => {
                    changeDone(todo.id, todo.isDone);
                  }}
                ></CheckBox>
              )}

              <TodoContent>
                {todo.content}
                <Cancel
                  onClick={() => {
                    removeTodos(todo.id);
                  }}
                >
                  <BsFillTrashFill></BsFillTrashFill>
                </Cancel>
                <Eraser>
                  <BsEraserFill
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setId(todo.id));
                      dispatch(open2());
                    }}
                  ></BsEraserFill>
                </Eraser>
              </TodoContent>
            </TodoContainer>
          );
        })}
    </Container>
  );
}
