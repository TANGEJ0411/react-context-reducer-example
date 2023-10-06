import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";
import TodoForm from "./TodoForm";

function App() {

  return (
    <TodoProvider>
      <div className="App">
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;
