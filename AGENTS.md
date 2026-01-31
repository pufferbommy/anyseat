# Agent Guidelines for Anyseat Repository

This document provides essential guidelines for AI agents working within the Anyseat codebase. Adhering to these conventions ensures consistency, maintainability, and compatibility with existing development workflows.

## 1. Build, Lint, and Test Commands

Always ensure your changes pass all checks before submitting.

### 1.1. Core Workflow Commands

*   **Format Code**: `make format`
    *   *Description*: Applies automated code formatting rules to ensure consistent style across the project.
*   **Lint Code**: `make lint`
    *   *Description*: Runs linters to identify and report programmatic errors, bugs, stylistic errors, and suspicious constructs.
*   **Type-Check (Python)**: `make mypy`
    *   *Description*: Statically checks Python code for type errors.
*   **Type-Check (TypeScript)**: `npm run typecheck`
    *   *Description*: Statically checks TypeScript code for type errors.
*   **Run All Tests (Python/Mixed)**: `make tests`
    *   *Description*: Executes the entire test suite for the project.
*   **Run a Single Test (Python)**: `uv run pytest -s -k <test_name>`
    *   *Description*: Runs a specific test by its name or a pattern matching test names. Replace `<test_name>` with the actual test identifier.
*   **Build Documentation (Optional)**: `make build-docs`
    *   *Description*: Generates project documentation.
*   **Generate Coverage Report (Optional)**: `make coverage`
    *   *Description*: Produces a test coverage report.

### 1.2. Verification Steps

After making any code changes, always run the relevant `make` and `npm` commands to verify your changes. If you introduce new features, ensure they are covered by new or updated tests.

## 2. Code Style Guidelines

Maintain consistency with the existing codebase's style and structure.

### 2.1. Imports

*   **Order**: Organize imports alphabetically within groups.
*   **Grouping**: Separate third-party imports, project-specific component/utility imports, and relative imports with blank lines.
*   **TypeScript/JavaScript**: Use ES Module syntax (`import ... from '...'`).
    ```typescript
    import React from 'react';
    import { motion } from 'framer-motion';

    import { Button } from '@heroui/button';
    import { useAuth } from '@/hooks/useAuth';

    import MyLocalComponent from './MyLocalComponent';
    ```
*   **Python**: Follow PEP 8 guidelines for imports (standard library, third-party, local application, then relative).
    ```python
    import os
    import sys

    import pytest
    from flask import Flask

    from my_app.models import User
    from .utils import helper_function
    ```

### 2.2. Formatting

*   **Automated Formatting**: Rely on `make format` for consistent code formatting. Do not manually reformat code that would be handled by the formatter.
*   **Indentation**: Use 4 spaces for Python, 2 spaces for JavaScript/TypeScript. (Check actual indentation of existing code if needed, but these are common defaults).

### 2.3. Types

*   **TypeScript**: All new JavaScript code should be written in TypeScript. Utilize interfaces, types, and inline type annotations to ensure strong typing.
*   **Python**: Use type hints for function signatures, variable declarations, and class attributes. Ensure compatibility with `mypy`.

### 2.4. Naming Conventions

*   **TypeScript/JavaScript**:
    *   **Components**: `PascalCase` (e.g., `UserProfileCard`, `SettingsModal`).
    *   **Variables, Functions, Methods**: `camelCase` (e.g., `userName`, `fetchUserData`, `handleButtonClick`).
    *   **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `API_BASE_URL`, `MAX_RETRIES`).
*   **Python**:
    *   **Modules, Packages**: `snake_case` (e.g., `my_module.py`, `my_package`).
    *   **Classes**: `PascalCase` (e.g., `UserProfile`, `DatabaseConnector`).
    *   **Functions, Variables, Methods**: `snake_case` (e.g., `get_user_data`, `calculate_total_price`).
    *   **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `DEFAULT_TIMEOUT`, `DEBUG_MODE`).

### 2.5. Error Handling

*   **Explicit Handling**: Always handle potential errors gracefully. Avoid silent failures.
*   **TypeScript/JavaScript**: Use `try...catch` blocks for asynchronous operations and error-prone code. Validate input thoroughly.
*   **Python**: Use `try...except` blocks to catch and handle exceptions. Raise specific exceptions rather than generic ones.

### 2.6. General Style and Structure

*   **React Components**:
    *   **Props**: Define props using TypeScript interfaces. Destructure props at the top of the component function.
    *   **Styling**: Prefer Tailwind CSS for utility-first styling. Combine classes using `clsx` or similar utilities for conditional styling.
    *   **Component Composition**: Favor smaller, single-responsibility components.
    *   **Hooks**: Use React Hooks (`useState`, `useEffect`, `useContext`, etc.) for managing component state and lifecycle. Custom hooks should start with `use`.
*   **Python Structure**:
    *   **Modularity**: Organize code into logical modules and packages.
    *   **Docstrings**: Write clear and concise docstrings for all modules, classes, and functions following PEP 257.
    *   **Logging**: Use the standard `logging` module for application logs.

## 3. Tooling and Dependencies

*   **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, @heroui components.
*   **Backend/DevOps**: Python (with `uv` for package management), `pytest` for testing.
*   **Build Tools**: `make`, `vite`.

## 4. Avoiding Common Pitfalls

*   **Avoid hardcoding values**: Use configuration files or environment variables.
*   **Keep PRs focused**: Each pull request should address a single logical change.
*   **Write clear commit messages**: Follow conventional commit guidelines if present, or write descriptive messages explaining *what* and *why*.
