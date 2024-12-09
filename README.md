# Fulfill3D

- **App**: Visit https://fulfill3d.com to see the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Microservices](#microservices)
- [Frontend Tech Stack](#frontend-tech-stack)
- [Backend Tech Stack](#backend-tech-stack)

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 20 or higher recommended)
- **npm** or **yarn** (package manager)

## Project Structure

Here is an overview of the key directories in the project:

- **`frontend/src/app`**: Contains Next.js pages and components for the application, including routing and main UI layout.
- **`frontend/src/components`**: Reusable React components used throughout the app, such as form elements, buttons, modals, etc.
- **`frontend/src/hooks`**: Custom hooks for managing application state, fetching data, and interacting with external APIs.
- **`frontend/src/models`**: TypeScript interfaces and types representing the data models used across the application.
- **`frontend/src/service`**: Service files for connecting to APIs, handling data requests, and managing proxy connections.
- **`frontend/src/svg`**: SVG files used for icons and other vector-based elements in the UI.
- **`frontend/src/utils`**: Utility functions and helper methods used across different parts of the project to perform common tasks like formatting, validation, etc.

## Microservices

### API
- **Fulfill3D.API.API:** Send form request, get posts, projects and about from Azure Cosmos DB

## Frontend Tech Stack

- **Next.js (14.2.4)**: A React framework with server-side rendering and static site generation.
- **React (18)**: A JavaScript library for building user interfaces.
- **TypeScript (5.x)**: A statically typed superset of JavaScript.
- **Tailwind CSS (3.4.1)**: A utility-first CSS framework for building responsive UIs.
- **React Google Recaptcha V3 (1.10.1)**: A library for integrating Google reCAPTCHA v3 into React apps.
- **ESLint**: A linter to ensure code quality and consistency.

## Backend Tech Stack

- **Backend:** .NET 8 (Isolated Worker), Azure Functions v4
- **Database:** Azure Cosmos DB
- **Authentication:** Google ReCaptcha to prevent bots on sending form request
- **Configuration & Secrets Management:** Azure App Configuration, Azure Key Vault
- **Hosting:** Microsoft Azure
