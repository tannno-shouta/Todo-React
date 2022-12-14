import {Header} from "./components/Header";
import {InputToDo} from "./components/InputToDo";
import {Filter} from "./components/Filter";
import {ToDo} from "./components/ToDo";
import { useState, useEffect } from "react";
import axios from "axios";

export const ToDoApp = () => {

  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2);

  // stateを作成
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  // 入力値をtodos(配列)に設定
  const handleAdd = text => {
    axios.post('http://localhost:3300', {
      text
    }).then(res => {
      setToDos(res.data)
    })
  };

  // フィルターの切り替え
  const handleFilterChange = value => setFilter(value);

  // フィルターに応じたToDoを表示
  const displayToDos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !todo.done;
    if (filter === 'DONE') return todo.done;
  });


  // チェックボックス判定
  const handleCheck = checked => {
    // チェックがついたToDoの真偽値(done)を変更
    const newToDos = todos.map(todo => {
      if (todo.id === checked.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const handleDelete = id => {
    axios.delete("http://localhost:3300", {data: {id}}).then((response) => {
      console.log(response.data)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3300").then((response) => {
      console.log(response.data)
      setToDos(response.data)
    });
  }, []);


  return (
    < >
      <Header></Header>

      <InputToDo
        onAdd={handleAdd}>
      </InputToDo>

      <Filter
        onChange={handleFilterChange}
        value={filter}>
      </Filter>

      {todos.map((todo) => (
        <ToDo
          key={todo.key}
          todo={todo}
          onCheck={handleCheck}
          onClick={handleDelete}
        >
        </ToDo>
      ))}
    </>
  );
};

export default ToDoApp;