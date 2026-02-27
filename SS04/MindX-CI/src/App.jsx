import { taskStatus, tasks } from "./data";
import KanbanColumn from "./components/KanbanColumn";
import searchIcon from "./assets/icons/search.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="search-box">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search Items" />
        </div>
        <button className="btn-new">New Item</button>
      </header>

      <main className="kanban-board">
        {taskStatus.map((status) => {
          // Lọc tasks thuộc cột này (statusId khớp nhau)
          const columnTasks = tasks.filter((task) => task.statusId === status.statusId);
          return <KanbanColumn key={status.statusId} status={status} tasks={columnTasks} />;
        })}
      </main>
    </div>
  );
}

export default App;
