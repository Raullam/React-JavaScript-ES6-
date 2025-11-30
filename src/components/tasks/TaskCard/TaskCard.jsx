import './TaskCard.css';

function TaskCard({ task, moduleName }) {
  return (
    <div className={`task-card task-${task.estado}`}>
      <div className="task-header">
        <h3>{task.titulo}</h3>
        <span className={`badge badge-${task.prioridad}`}>
          {task.prioridad}
        </span>
      </div>
      <p className="task-module">Módulo: {moduleName}</p>
      <p className="task-date">Fecha límite: {task.fechaLimite}</p>
      <span className={`status-badge status-${task.estado}`}>
        {task.estado}
      </span>
    </div>
  );
}

export default TaskCard;
