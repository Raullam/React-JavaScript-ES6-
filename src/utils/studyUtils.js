/**
 * studyUtils.js
 * Helpers para gestionar y procesar datos de módulos y tareas
 */

export const getPendingTasks = (tasks) => {
  return (
    tasks
      //.slice() //SI NO SE USA FILTER USAR SLICE() mirar copia para no mutar el array original
      .filter((task) => task.estado === 'pendiente')
      .sort((a, b) => new Date(a.fechaLimite) - new Date(b.fechaLimite))
  )
}

export const getTasksByModule = (tasks, moduleId) => {
  return tasks.filter((task) => task.moduloId === moduleId)
}

export const getCompletionPercentage = (tasks) => {
  if (tasks.length === 0) return 0

  const completedTasks = tasks.filter((task) => task.estado === 'entregada')
    .length
  return Math.round((completedTasks / tasks.length) * 100)
}
