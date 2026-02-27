import { taskStatus, tasks } from "./data"; 
import { useState } from "react";
import KanbanColumn from "./components/KanbanColumn";
import searchIcon from "./assets/icons/search.svg";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app">
      <header className="header">
        <div className="search-box">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search Items" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <button className="btn-new">New Item</button>
      </header>

      <main className="kanban-board">
        {taskStatus.map((status) => {
          // Lọc tasks thuộc cột này (statusId khớp nhau)
          const columnTasks = tasks.filter((task) => {
            const matchesStatus = task.statusId === status.statusId;
            if(searchText.trim() === "") {
              return matchesStatus; // Nếu search rỗng, chỉ lọc theo status
            }

            const search = searchText.toLowerCase();

            const matchTitle = task.title.toLowerCase().includes(search);
            const matcheDesc = task.description && task.description.toLowerCase().includes(search);
            return matchesStatus && (matchTitle || matcheDesc);
          });
          return <KanbanColumn key={status.statusId} status={status} tasks={columnTasks} />;
        })}
      </main>
    </div>
  );
}

export default App;
