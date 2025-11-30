import ModuleCard from '../ModuleCard/ModuleCard';
import './ModuleList.css';

function ModuleList({ modules }) {
  return (
    <section className="modules-section">
      <h2>Módulos del Ciclo</h2>
      <div className="modules-grid">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </section>
  );
}

export default ModuleList;



