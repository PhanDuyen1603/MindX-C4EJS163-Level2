import TaskCard from "./TaskCard";
import { users, flags } from "../data";

function KanbanColumn({ status, tasks }) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="column-title">
          <span>{status.name}</span>
          <span className="task-count">{tasks.length}</span>
        </div>
        <div className="column-actions">
          <button className="icon-btn" aria-label="Thêm">+</button>
          <button className="icon-btn" aria-label="Tùy chọn">⋯</button>
        </div>
      </div>
      <div className="column-cards">
        {tasks.length === 0 ? (
          <div className="empty-state">No tasks</div>
        ) : (
         tasks.map((task) => {
          // Tìm user và flag theo id trong task
          const user = users.find((u) => u.userId === task.assignedTo);
          const flag = flags.find((f) => f.flagId === task.flagId);
          return <TaskCard key={task.taskId} task={task} user={user} flag={flag} />;
        })
        )}
      </div>
    </div>
  );
}

export default KanbanColumn;
