
import {Header} from "./components/Header";
import {InputToDo} from "./components/InputToDo";
import {ToDo} from "./components/ToDo";
import { useState } from "react";

export const App =() => {
  const [todo, setToDo] = useState([
    {
      done:true,
      text:'text1'
    },
    {
      done:true,
      text:'text2'
    }
  ])
  return(
    < >
      <Header></Header>
      <InputToDo></InputToDo>
      <ToDo todo={todo}></ToDo>
    </>
  );
};

export default App;
