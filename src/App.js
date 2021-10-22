import TodosList from "./components/TodosList";
import './App.css'

function App() {
  return (
    <div className="App">
      <h2 style={{marginBottom: '1.5rem'}}>Kim's Todo App</h2>
      <TodosList />
    </div>
  );
}

export default App;
