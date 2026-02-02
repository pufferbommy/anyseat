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
- **Graceful Degradation:** Implement robust error handling for API calls, user input, and unexpected states. Use `try...catch` blocks for asynchronous operations and other potentially error-prone code.
- **User Feedback:** Provide clear and helpful error messages to the user where applicable, ensuring a good user experience.
- **Logging:** Log errors to the console or a logging service for debugging purposes. Ensure sensitive information is not logged.

### General Guidelines
- **Modularity:** Break down large components and functions into smaller, reusable, and focused units. This improves readability and maintainability.
- **DRY (Don't Repeat Yourself):** Avoid code duplication. Create utility functions or components for repeated logic/UI.
- **Readability:** Prioritize clear, concise, and understandable code. Write code that is easy for others to read and understand.
- **Comments:** Use comments sparingly, only to explain *why* something is done, not *what* it does. Good code should be self-documenting.
- **Performance:** Be mindful of performance implications, especially in React components. Optimize rendering and state updates where necessary.
- **Accessibility:** Ensure all UI components and interactions are accessible to users with disabilities. Follow WCAG guidelines.
- **Security:** Be aware of common web vulnerabilities (XSS, CSRF, Injection) and write code to prevent them. Sanitize user input.
- **Code Quality:** Strive for high code quality by writing clear, maintainable, and testable code. Regularly review and refactor code to improve its design and reduce technical debt.

---

## 3. Proactive Guidelines

- **Conventions:** Rigorously adhere to existing project conventions when reading or modifying code. Analyze surrounding code, tests, and configuration first.
- **Libraries/Frameworks:** NEVER assume a library/framework is available or appropriate. Verify its established usage within the project (check imports, configuration files like 'package.json', 'Cargo.toml', 'requirements.txt', 'build.gradle', etc., or observe neighboring files) before employing it.
- **Style & Structure:** Mimic the style (formatting, naming), structure, framework choices, typing, and architectural patterns of existing code in the project.
- **Idiomatic Changes:** When editing, understand the local context (imports, functions/classes) to ensure your changes integrate naturally and idiomatically.
- **Comments:** Add code comments sparingly. Focus on *why* something is done, especially for complex logic, rather than *what* is done. Only add high-value comments if necessary for clarity or if requested by the user. Do not edit comments that are separate from the code you are changing.
- **Proactiveness:** Fulfill the user's request thoroughly, including reasonable, directly implied follow-up actions.
- **Confirm Ambiguity/Expansion:** Do not take significant actions beyond the clear scope of the request without confirming with the user. If asked *how* to do something, explain first, don't just do it.

---

This `AGENTS.md` file serves as a foundational guide. Agents should also analyze surrounding code to maintain existing patterns and conventions not explicitly covered here.
