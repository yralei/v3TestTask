# Task Management Application

## Requirements

- **GIT**
- **Vue3**
- **Typescript**
- **Bootstrap5**
- **Docker** (bonus)
- **Tests** (bonus)

## Overview

This application allows users to create, edit, delete, and transition tasks through various statuses. Users need to register and log in to manage tasks, with all actions requiring user authentication.

## Features

- **Register, Login, Logout API Endpoints**
- **Create Tasks**: By default, tasks are set to the “Opened” status.
- **Edit Tasks**
- **Delete Tasks**
- **View Tasks**: Main board displays task title, status, and creation date.
- **Status Transitions**:
  - "Opened" can transition to "In progress" or "Closed".
  - "In progress" can transition to any status.
  - "Done" can transition to "Closed".
  - "Closed" can transition to "Opened".

## Task Details

Each task contains:

- **Title**
- **Description**
- **Status**: 0 (Opened), 1 (In progress), 2 (Done), 3 (Closed)
- **Creation Date**: Displayed in "Y-m-d" format (e.g., "2024-07-01")

## API Endpoints Documentation

- [Postman API Documentation](https://documenter.getpostman.com/view/16290153/2sA3dygAg8)

## Project Setup

### Prerequisites

- Node.js and npm installed
- Docker installed (optional for containerized setup)
- Git installed

### Installation

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

### Development Server

Start the development server:

```sh
npm run dev
```
