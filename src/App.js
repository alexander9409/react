import logo from './platzi.webp';
import './App.css';
import {ToDoCounter} from "./ToDoCounter";
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './toDoList';
import { ToDoItems } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

function App() {
  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
      </ToDoList>
      <CreateToDoButton/>
      

    </div>
  );
}





export default App;
