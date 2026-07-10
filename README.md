# Bloques de React

Interfaz de usuario construida en React a partir de un wireframe, aplicando componentes funcionales y una estructura jerárquica clara. Es la versión en React del ejercicio "Trazando tus Bloques" de Fundamentos Web.

## Objetivos del proyecto

- Construir una interfaz de usuario en React basada en un wireframe.
- Aplicar el concepto de componentes funcionales.
- Organizar los componentes en una estructura jerárquica clara.
- Reforzar la reutilización de componentes dentro de una aplicación React.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- CSS3

## Estructura de componentes

```
App
├── Header
└── main-row
    ├── ContentGrid
    │   └── BoxItem (x3)
    └── Sidebar
```

- **Header**: barra superior (bloque amarillo).
- **ContentGrid**: contenedor principal (bloque rosa) que agrupa las cajas azules y la barra verde.
- **BoxItem**: componente reutilizable, usado tres veces para los bloques azules.
- **Sidebar**: bloque lateral (celeste).

## Instalación y ejecución

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/bloques-react.git
cd bloques-react
npm install
```

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` para ver la aplicación.

## Estructura del proyecto

```
bloques-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ContentGrid.jsx
│   │   ├── BoxItem.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

## Autor

Karen Herrera

## Licencia

Este proyecto fue creado con fines educativos como parte del curso JavaScript full stack de Skillnest
