# 📚 Panel de Seguimiento de Estudios

Aplicación React para gestionar módulos y tareas del ciclo formativo DAW.

## 🗂️ Estructura del Proyecto

```
src/
├── components/
│   ├── dashboard/
│   │   └── StudyDashboard/
│   │       └── StudyDashboard.jsx    # Componente contenedor principal
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.jsx            # Cabecera de la aplicación
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx            # Pie de página
│   │   │   └── Footer.css
│   │   └── MainContent/
│   │       ├── MainContent.jsx       # Contenedor del contenido principal
│   │       └── MainContent.css
│   ├── modules/
│   │   ├── ModuleCard/
│   │   │   ├── ModuleCard.jsx        # Tarjeta individual de módulo
│   │   │   └── ModuleCard.css
│   │   └── ModuleList/
│   │       ├── ModuleList.jsx        # Lista de módulos
│   │       └── ModuleList.css
│   └── tasks/
│       ├── TaskCard/
│       │   ├── TaskCard.jsx          # Tarjeta individual de tarea
│       │   └── TaskCard.css
│       └── TaskList/
│           ├── TaskList.jsx          # Lista de tareas
│           └── TaskList.css
├── data/
│   └── data.js                       # Datos de módulos y tareas
├── App.jsx                           # Componente raíz
├── App.css                           # Estilos globales
├── main.jsx                          # Punto de entrada
└── style.css                         # Estilos base
```

## 🏗️ Arquitectura de Componentes

```
App
├── Header
├── MainContent
│   └── StudyDashboard
│       ├── ModuleList
│       │   └── ModuleCard (x4)
│       └── TaskList
│           └── TaskCard (x4)
└── Footer
```

## 🧩 Descripción de Componentes

### **Layout Components** (`components/layout/`)
- **Header**: Cabecera con título y descripción de la aplicación
- **Footer**: Pie de página con información del módulo
- **MainContent**: Contenedor principal que envuelve el contenido

### **Dashboard Components** (`components/dashboard/`)
- **StudyDashboard**: Componente contenedor que importa los datos y organiza las secciones principales

### **Module Components** (`components/modules/`)
- **ModuleCard**: Muestra información de un módulo individual (nombre, curso, horas)
- **ModuleList**: Renderiza la lista completa de módulos usando ModuleCard

### **Task Components** (`components/tasks/`)
- **TaskCard**: Muestra información de una tarea (título, estado, prioridad, fecha)
- **TaskList**: Renderiza la lista completa de tareas usando TaskCard

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Características

- ✅ Arquitectura modularizada y escalable
- ✅ Separación clara de responsabilidades
- ✅ Componentes reutilizables
- ✅ Estilos encapsulados por componente
- ✅ Diseño responsive
- ✅ Estados visuales diferenciados (pendiente, en-proceso, entregada)
- ✅ Prioridades con código de colores

## 📋 Modelos de Datos

### Módulo
```javascript
{
  id: number,
  nombre: string,
  curso: string,
  horasSemanales: number
}
```

### Tarea
```javascript
{
  id: number,
  titulo: string,
  moduloId: number,
  fechaLimite: string,
  estado: "pendiente" | "en-proceso" | "entregada",
  prioridad: "baja" | "media" | "alta"
}
```

## 🛠️ Tecnologías

- **React** 18.3+
- **Vite** 7.2+
- **JavaScript** ES6+
- **CSS3**

## 👤 Autor

**Lama Martorell, Raül**  
Desenvolupament Web en Entorn Client (DWC) - 2º DAW
