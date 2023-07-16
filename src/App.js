import logo from './logo.svg';
import './App.css';
import todo from './models/todo';
import TodoList from './component/TodoList';

//1. Establish state
const state = {
  todo
  // todont,
}

function App() {// 2.Pass (insert) state in to each component within a closing tag </> in a div ( i.e return an html) 
  return (
    <div className="App">
      <TodoList allTodos= {state.todo}/>    
    </div>
  );
}

export default App;
