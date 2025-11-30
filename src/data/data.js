// Módulos del ciclo
export const modules = [
  { id: 1, nombre: 'BBDD', curso: '1º', horasSemanales: 5 },
  { id: 2, nombre: 'LMSGI', curso: '1º', horasSemanales: 3 },
  { id: 3, nombre: 'DWC', curso: '2º', horasSemanales: 5 },
  { id: 4, nombre: 'PIM', curso: '2º', horasSemanales: 2 },
]

// Tareas y entregas
export const tasks = [
  {
    id: 1,
    titulo: 'Entrega ERD',
    moduloId: 1,
    fechaLimite: '2025-12-10',
    estado: 'pendiente', // "pendiente" | "en-proceso" | "entregada"
    prioridad: 'alta', // "baja" | "media" | "alta"
  },
  {
    id: 2,
    titulo: 'Maquetación HTML CV',
    moduloId: 2,
    fechaLimite: '2025-11-30',
    estado: 'en-proceso',
    prioridad: 'media',
  },
  {
    id: 3,
    titulo: 'Panel React',
    moduloId: 3,
    fechaLimite: '2025-12-15',
    estado: 'entregada',
    prioridad: 'alta',
  },
  {
    id: 4,
    titulo: 'Informe PIM fase 1',
    moduloId: 4,
    fechaLimite: '2025-12-05',
    estado: 'pendiente',
    prioridad: 'baja',
  },
]
