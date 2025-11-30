import { modules, tasks } from '../../../data/data';
import {
  getPendingTasks,
  getTasksByModule,
  getCompletionPercentage,
} from '../../../utils/studyUtils';
import ModuleList from '../../modules/ModuleList/ModuleList';
import TaskList from '../../tasks/TaskList/TaskList';
import './StudyDashboard.css';

function StudyDashboard() {
  // Handler 1:  lista de tareas pendientes ordenadas por fecha
  const buildPendingTasksHandler = () => {
    const pendingTasks = getPendingTasks(tasks);
    console.log('Tareas pendientes:', pendingTasks);
    return pendingTasks;
  };

  // Handler 2:  lista de tareas de un módulo específico (DWC) 
  // Buscar primero por nombre
  const buildModuleTasksHandler = (nomModul) => {
  const module = modules.find(m => m.nombre === nomModul);
  const moduleTasks = module ? getTasksByModule(tasks, module.id) : [];
  console.log(`Tareas del módulo ${module?.nombre || nomModul}:`, moduleTasks);
  return moduleTasks;
};

  // Handler 3: Construir resumen de porcentaje de tareas completadas
  const buildCompletionSummaryHandler = () => {
    const percentage = getCompletionPercentage(tasks);
    console.log('Porcentaje de tareas completadas:', percentage);
    return {
      percentage,
      completed: tasks.filter((t) => t.estado === 'entregada').length,
      total: tasks.length,
    };
  };

  // Ejecutar handlers
  const pendingTasks = buildPendingTasksHandler();
  const dwcTasks = buildModuleTasksHandler('DWC'); // DWC tiene id=3 ( Inicialmente solo se le pasaba id, ahora se busca por nombre i se busca su id con el uso de find())
  const completionSummary = buildCompletionSummaryHandler();

  return (
    <>
      {/* Resumen de progreso */}
      <section className="completion-summary">
        <h2>Resumen de Progreso</h2>
        <div className="summary-card">
          <div className="summary-stat">
            <span className="stat-value">{completionSummary.percentage}%</span>
            <span className="stat-label">Completado</span>
          </div>
          <div className="summary-stat">
            <span className="stat-value">{completionSummary.completed}</span>
            <span className="stat-label">Entregadas</span>
          </div>
          <div className="summary-stat">
            <span className="stat-value">{completionSummary.total}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </section>

      {/* Todos los módulos */}
      <ModuleList modules={modules} />

      {/* Tareas pendientes */}
      <TaskList
        tasks={pendingTasks}
        modules={modules}
        title="Tareas Pendientes (Ordenadas por Fecha)"
      />

      {/* Tareas del módulo DWC */}
      <TaskList
        tasks={dwcTasks}
        modules={modules}
        title="💻 Tareas de DWC"
      />

      {/* Todas las tareas */}
      <TaskList tasks={tasks} modules={modules} title="Todas las Tareas" />
    </>
  );
}
export default StudyDashboard;



