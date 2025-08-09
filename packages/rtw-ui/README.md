# @estebancastano/react-tailwind-ui

> Una colección de componentes reutilizables para **React + Tailwind CSS**, construidos con accesibilidad en mente y listos para usar con Radix UI y lucide-react.

[![npm version](https://img.shields.io/npm/v/%40estebancdev%2Freact-tailwind-ui.svg)](https://www.npmjs.com/package/@estebancdev/react-tailwind-ui)
[![npm downloads](https://img.shields.io/npm/dm/%40estebancdev%2Freact-tailwind-ui.svg)](https://www.npmjs.com/package/@estebancdev/react-tailwind-ui)
[![license](https://img.shields.io/npm/l/%40estebancdev%2Freact-tailwind-ui.svg)](LICENSE)

---

## 🚀 Resumen
Componentes UI sencillos, estilizados con Tailwind, pensados para integrarse fácilmente en proyectos React. Ideal para acelerar formularios y UIs comunes, manteniendo consistencia y accesibilidad.

---

## 📦 Requisitos
- **React** 18 o 19  
- **Tailwind CSS** (debes tenerlo configurado en tu proyecto)  
- Peer dependencies (deben estar instaladas en el proyecto que consuma la librería):
  - `react`, `react-dom`
  - `lucide-react`
  - `@radix-ui/react-select`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-tabs`

---

## 🔧 Instalación
```bash
npm install @estebancastano/react-tailwind-ui lucide-react 
  @radix-ui/react-select @radix-ui/react-dialog @radix-ui/react-tabs
 ``` 
## 🖥 Uso básico (JSX / TSX)

```tsx 
import { RtwButton, RtwInput, RtwSelect } from "@estebancastano/react-tailwind-ui";

export function Ejemplo() {
  return (
    <div className="space-y-3">
      <RtwButton>Hola</RtwButton>

      <RtwInput
        label="Email"
        type="email"
        placeholder="tu@ejemplo.com"
        required
      />

      <RtwSelect
        label="Rol"
        items={[
          { label: "Admin", value: "admin" },
          { label: "Editor", value: "editor" }
        ]}
        placeholder="Selecciona un rol"
      />
    </div>
  );
}
```

## 📚 Componentes principales
#### RtwButton — Botones con variantes y tamaños.

#### RtwInput — Inputs con label, helper, estado de error y accesibilidad.

#### RtwSelect — Select accesible basado en Radix UI.

#### RtwDialog — Modal accesible.

#### RtwTabs — Pestañas.

## 🛠 Desarrollo local
Clona el repo, instala y ejecuta el entorno de desarrollo (ejemplo con Vite):
```bash
git clone https://github.com/estebancastano/react-tailwind-ui.git
cd react-tailwind-ui
npm install
npm run dev
```

## 🤝 Contribuir
¡Contribuciones bienvenidas!

Haz fork del repo

Crea una rama: git checkout -b feature/nombre

Realiza cambios, prueba localmente y haz PR con descripción clara

## 📜 Licencia
MIT — ver archivo LICENSE.

## 📬 Contacto
Si tienes dudas, reporte de bugs o ideas: abre un issue en GitHub o contáctame vía PR.