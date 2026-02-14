# Agent Instructions

This is a SvelteKit application for finding work-friendly places (cafes, public spaces).

## Build Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# TypeScript type checking
pnpm check

# TypeScript type checking (watch mode)
pnpm check:watch
```

**Note**: No test runner is currently configured. If you need to add tests, consider setting up Vitest for unit tests or Playwright for e2e tests.

## Code Style Guidelines

### Svelte 5 (Runes Mode)

This project uses Svelte 5 with Runes enabled (`runes: true` in svelte.config.js).

**Always use Runes syntax:**
- `$state()` for reactive state
- `$props()` for component props
- `$bindable()` for two-way binding
- `$derived()` for computed values
- `$effect()` for side effects

**Never use the legacy syntax** (`export let`, `onMount`, etc.).

### TypeScript

- Enable strict mode - all code must be properly typed
- Use explicit return types for exported functions
- Prefer `type` over `interface` for object shapes
- Place types in `<script lang="ts" module>` blocks for exports

### Imports

**Order matters:**
1. Svelte imports (from 'svelte')
2. Third-party libraries
3. `$lib/` imports (internal utilities)
4. Relative imports (for closely related files)

**Path aliases:**
- `$lib/*` - Reference anything in `src/lib/`
- `@/*` - Alternative alias for `src/lib/*` (configured in svelte.config.js)

Example:
```typescript
import { cn, type WithElementRef } from "$lib/utils.js";
import type { HTMLButtonAttributes } from "svelte/elements";
import { type VariantProps, tv } from "tailwind-variants";
```

### Component Structure

Follow the shadcn-svelte pattern:

```svelte
<script lang="ts" module>
  // Export types, variants, and component configuration
  export const buttonVariants = tv({...});
  export type ButtonProps = {...};
</script>

<script lang="ts">
  // Component logic with $props()
  let { class: className, variant = "default", ...restProps }: ButtonProps = $props();
</script>

<!-- Template -->
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.svelte`, `PlaceCard.svelte`)
- **Variables**: camelCase (e.g., `placeName`, `isOpen`)
- **Types/Interfaces**: PascalCase with descriptive names (e.g., `PlaceProps`, `UserData`)
- **Boolean props**: Use `is` or `has` prefix (e.g., `isOpen`, `hasWifi`)
- **Constants**: UPPER_SNAKE_CASE for true constants only
- **Event handlers**: `handle` prefix (e.g., `handleClick`, `handleSubmit`)

### Styling

- Use Tailwind CSS v4 with `@import` syntax
- Use the `cn()` utility from `$lib/utils.ts` for conditional class merging:
  ```typescript
  class={cn(buttonVariants({ variant, size }), className)}
  ```
- Define component variants using `tailwind-variants` (tv)
- Use CSS custom properties from `app.css` (e.g., `--color-primary`)
- Follow the existing color system in `app.css` (light/dark modes supported)

### Component Organization

Each component folder should have:
- `ComponentName.svelte` - Main component file
- `index.ts` - Clean re-exports

Example `index.ts`:
```typescript
import Root, { type ButtonProps, buttonVariants } from "./button.svelte";

export {
  Root,
  type ButtonProps as Props,
  Root as Button,
  buttonVariants,
};
```

### Error Handling

- Use TypeScript's strict mode to catch errors at compile time
- Handle async errors with try/catch blocks
- Provide user-friendly error messages in the UI
- Use SvelteKit's error handling for server-side errors

### Formatting

- Use tabs for indentation (check existing files)
- Max line length: ~100 characters
- Use semicolons consistently
- Quote style: double quotes for strings

### Git

- Never commit secrets (`.env`, credentials)
- Don't commit unless explicitly asked
- Follow the project's existing commit message style

## Dependencies

Key dependencies:
- **SvelteKit** - Framework
- **Tailwind CSS v4** - Styling (with `@tailwindcss/vite`)
- **bits-ui** - Component primitives
- **@lucide/svelte** - Icons
- **tailwind-variants** - Component styling variants
- **clsx + tailwind-merge** - Class merging (via `cn()` utility)

## Project Structure

```
src/
├── lib/
│   ├── components/ui/    # shadcn-svelte components
│   ├── assets/           # Static assets (favicon, etc.)
│   ├── utils.ts          # Utility functions (cn, etc.)
│   └── index.ts          # Library exports
├── routes/               # SvelteKit routes
│   ├── +page.svelte      # Home page
│   └── +layout.svelte    # Root layout
└── app.css               # Global styles + Tailwind
```
