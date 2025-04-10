# 🤖 AlquimIA: Asistente Inteligente de IA

![Versión](https://img.shields.io/badge/versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)

Una aplicación web moderna e intuitiva que te permite conversar con un asistente de Inteligencia Artificial potenciado por OpenAI. Ideal para resolver dudas sobre IA, tecnología y conceptos avanzados de forma conversacional.

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=AlquimIA+Screenshot" alt="AlquimIA Screenshot" width="800"/>
</div>

## ✨ Características

- 💬 Interfaz de chat intuitiva y responsiva
- 🧠 Integración con la API de OpenAI (GPT-3.5/GPT-4)
- 🚀 Arquitectura moderna con React y Node.js
- 📱 Diseño adaptable para dispositivos móviles y escritorio
- 🔒 Manejo seguro de la API key mediante variables de entorno

## 🏗️ Estructura del Proyecto

```
/
├── frontend/       # Aplicación React (Vite + TypeScript)
│   ├── src/        # Código fuente de React
│   ├── public/     # Archivos estáticos
│   └── ...         # Configuración de Vite y TypeScript
│
└── backend/        # Servidor Node.js (Express + OpenAI)
    ├── server.js   # Punto de entrada del servidor
    └── ...         # Configuración y dependencias
```

## 📋 Requisitos Previos

- **Node.js** (v18 o superior recomendado)
- **npm** (normalmente viene instalado con Node.js)
- **Clave API de OpenAI** ([Obtener en la plataforma de OpenAI](https://platform.openai.com/api-keys))

## 🛠️ Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/rodrigodelatorre-ai/Agente-IA-AlquimIA1.git
cd Agente-IA-AlquimIA1
```

### 2. Configurar el Backend

```bash
# Navegar al directorio backend
cd backend

# Instalar dependencias
npm install

# Crear archivo .env para la API key
cp .env.example .env
```

Edita el archivo `.env` y reemplaza `tu_clave_api_aqui` con tu clave real de OpenAI.

### 3. Configurar el Frontend

```bash
# Navegar al directorio frontend desde la raíz
cd ../frontend

# Instalar dependencias
npm install
```

## 🚀 Ejecución

Necesitas ejecutar tanto el backend como el frontend en terminales separadas.

### 1. Iniciar el Backend

```bash
# Desde el directorio backend
npm start
```

El servidor backend se ejecutará en `http://localhost:3001`.

### 2. Iniciar el Frontend

```bash
# Desde el directorio frontend
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:5173`.

## 📸 Capturas de Pantalla

<div align="center">
  <img src="https://via.placeholder.com/400x250?text=Chat+Interface" alt="Interfaz de Chat" width="400"/>
  <img src="https://via.placeholder.com/400x250?text=Mobile+View" alt="Vista Móvil" width="400"/>
</div>

## 🔧 Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Vite, CSS Moderno
- **Backend**: Node.js, Express
- **IA**: API de OpenAI (modelo GPT)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre primero un issue para discutir lo que te gustaría cambiar.

## 📜 Licencia

[MIT](https://choosealicense.com/licenses/mit/)

---

<div align="center">
  <p>Desarrollado con ❤️ por <a href="https://github.com/rodrigodelatorre-ai">Rodrigo De La Torre</a></p>
</div>