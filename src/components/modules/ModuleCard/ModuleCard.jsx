import './ModuleCard.css';

function ModuleCard({ module }) {
  return (
    <div className="module-card">
      <h3>{module.nombre}</h3>
      <p>Curso: {module.curso}</p>
      <p>Horas semanales: {module.horasSemanales}h</p>
    </div>
  );
}

export default ModuleCard;


