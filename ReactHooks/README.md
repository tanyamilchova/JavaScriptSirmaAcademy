# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Why components are rendering:
1. Initial rendering
2. State changed (useState)
3. Props changed
4. Parent re-renders

## Key requirements:
1. To be unic
2. Must be persistant value for each render

## State rules
1. Every times you change the state of element in the array you must return new state of all elements in the array

## Hooks rules
1. Must be named with "use" at the beginning
2. Hooks can ve used inside Components and custom  hooks 