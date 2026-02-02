# AGENT GUIDELINES FOR ANYSEAT PROJECT

This document provides guidelines for agentic coding agents operating within the `anyseat` repository. Adhering to these guidelines will ensure consistency, maintainability, and quality across the codebase.

## 1. Command Reference

### Build Commands
To build the project for production:
- `npm run build`

### Development Server
To start the development server:
- `npm run dev`

### Linting Commands
To run the linter and identify code style issues:
- `npm run lint`

To automatically fix linting issues:
- `npm run lint:fix`

### Type Checking Commands
To perform type checking:
- `npm run typecheck`

### Testing Commands
There is no explicit test command defined in `package.json`, nor are common test file patterns found. If tests are implemented, typical commands would include:
- To run all tests: `npm test` (or `npm run test` if defined)
- To run a single test file (example using `vitest` or `jest`):
  - `npx vitest path/to/your/test.spec.tsx`
  - `npx jest path/to/your/test.test.tsx`
Please consult project documentation or existing test files if available to determine the correct testing framework and commands.

---

## 2. Code Style Guidelines

This project utilizes TypeScript, React, and Tailwind CSS. Adherence to the following guidelines is crucial.

### Imports
- **Ordering:** Imports should be ordered as follows:
    1. Third-party library imports (e.g., `react`, `framer-motion`)
    2. Absolute imports from project modules (e.g., `@/components/Button`)
    3. Relative imports (e.g., `./utils`)
- **Grouping:** Group imports by type, separated by a blank line.
- **Destructuring:** Use destructuring for named imports.
- **No Wildcard Imports:** Avoid `import * as ...` unless absolutely necessary (e.g., for certain third-party libraries).

**Example:**
```typescript
import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import MyComponent from './MyComponent';
```

### Formatting
- **Automated Formatting:** `oxlint` is used for linting, and it may include some formatting rules. Rely on `npm run lint:fix` to automatically format code where possible.
- **Indentation:** 2 spaces.
- **Quotes:** Single quotes for strings, unless a string contains a single quote.
- **Trailing Commas:** Always use trailing commas for multi-line arrays and objects.
- **Semicolons:** Always use semicolons at the end of statements.

### Types
- **TypeScript First:** Always use TypeScript. Avoid `any` unless absolutely necessary and justified.
- **Explicit Types:** Explicitly define types for function parameters, return values, and complex variables.
- **Interfaces vs. Types:** Use `type` for simple aliases and union types. Use `interface` for object shapes, especially when declaration merging or extension is needed.
- **Component Props:** Define component props using interfaces.

### Naming Conventions
- **Files:** `kebab-case` (e.g., `my-component.tsx`, `utils.ts`).
- **Components:** `PascalCase` (e.g., `MyComponent`).
- **Variables/Functions:** `camelCase` (e.g., `myVariable`, `myFunction`).
- **Constants:** `UPPER_SNAKE_CASE` for global constants (e.g., `API_BASE_URL`).
- **Type Aliases/Interfaces:** `PascalCase` (e.g., `MyType`, `MyInterface`).

### Error Handling
- **Graceful Degradation:** Implement robust error handling for API calls, user input, and unexpected states.
- **Try/Catch:** Use `try...catch` blocks for asynchronous operations and other potentially error-prone code.
- **User Feedback:** Provide clear and helpful error messages to the user where applicable.
- **Logging:** Log errors to the console or a logging service for debugging purposes.

### General Guidelines
- **Modularity:** Break down large components and functions into smaller, reusable, and focused units.
- **DRY (Don't Repeat Yourself):** Avoid code duplication. Create utility functions or components for repeated logic/UI.
- **Readability:** Prioritize clear, concise, and understandable code.
- **Comments:** Use comments sparingly, only to explain *why* something is done, not *what* it does. Good code should be self-documenting.

---

This `AGENTS.md` file serves as a foundational guide. Agents should also analyze surrounding code to maintain existing patterns and conventions not explicitly covered here.
