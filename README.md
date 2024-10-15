# Fulfill3D Frontend

- **App**: Visit https://fulfill3d.com to see the application.
- **Backend**: Visit https://github.com/fulfill3d/Fulfill3D_Backend to see the backend repo.

This project is the frontend application for the **Fulfill3D** platform, built using **Next.js** (version 14) and TypeScript. The project leverages **Tailwind CSS** for styling and **React Google Recaptcha** for handling bot protection. 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 20 or higher recommended)
- **npm** or **yarn** (package manager)

## Project Structure

Here is an overview of the key directories in the project:

- **`src/app`**: Contains Next.js pages and components for the application, including routing and main UI layout.
- **`src/components`**: Reusable React components used throughout the app, such as form elements, buttons, modals, etc.
- **`src/hooks`**: Custom hooks for managing application state, fetching data, and interacting with external APIs.
- **`src/models`**: TypeScript interfaces and types representing the data models used across the application.
- **`src/service`**: Service files for connecting to APIs, handling data requests, and managing proxy connections.
- **`src/svg`**: SVG files used for icons and other vector-based elements in the UI.
- **`src/utils`**: Utility functions and helper methods used across different parts of the project to perform common tasks like formatting, validation, etc.

## Technologies Used

- **Next.js (14.2.4)**: A React framework with server-side rendering and static site generation.
- **React (18)**: A JavaScript library for building user interfaces.
- **TypeScript (5.x)**: A statically typed superset of JavaScript.
- **Tailwind CSS (3.4.1)**: A utility-first CSS framework for building responsive UIs.
- **React Google Recaptcha V3 (1.10.1)**: A library for integrating Google reCAPTCHA v3 into React apps.
- **ESLint**: A linter to ensure code quality and consistency.
