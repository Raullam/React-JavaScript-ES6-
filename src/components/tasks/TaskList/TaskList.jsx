import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';

function TaskList({ tasks, modules, title = "Tareas y Entregas" }) {
  return (
    <section className="tasks-section">
      <h2>{title}</h2>
      <div className="tasks-list">
        {tasks.map((task) => {
          const module = modules.find(m => m.id === task.moduloId);
          return (
            <TaskCard 
              key={task.id} 
              task={task} 
              moduleName={module?.nombre || 'Desconocido'} 
            />
          );
        })}
      </div>
    </section>
  );
}

export default TaskList;
