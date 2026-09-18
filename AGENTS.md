## Structure
 
This project uses [react-router 7](https://reactrouter.com/7.14.0), including its data routing features. Proper usage of this library is required. Code is organized as follows:
 
- `src/common/api/`: Named functions and type definitions for the various APIs. Decimal is the applications's dedicated backend; the other APIs are much less common special cases.
- `src/routes/home/`: Route definitions, loaders, actions, page components, helper functions, and so on, grouped by route path. The `common` folder contains things used by multiple pages. `homeContext.ts` and `HomeContextProvider.tsx` contain what would be root-level loader stuff like user info, but it is intentionally operating outside react-router due to technical limitations.
- `src/common/core-ui/`: Broadly reusable React UI elements and hooks
- `src/common/icons/`: Inline svg react icon files, extracted from Figma. Never manually modified.
- `src/common/utils/`: Broadly reusable non-React utility functions
- `src/common/features/`: Similar to `src/routes/home/common/`, though tends to be less router-aware.
- `src/routes/home/homeRoutes.tsx` is the main routing entry point for most home content, though `src/Main.tsx` contains a few less-common cases.
- The npm dependency `@vitalsource/vst-ui-kit` provides CSS for colors and common UI elements. We own this package and can easily change it if needed.
 
## React Router
 
Functions from `src/common/api` must not be called directly from within React components. The only appropriate choices are:
 
- A `loader` attached to a route (for GET)
- An `action` attached to a route (for PUT/POST/PATCH/DELETE)
 
The most basic setup is for a route to contain a `loader` that fetches data and an `element` or `component` that renders it.
 
## Styling
 
Each component file has a corresponding CSS or SCSS module file with the same name, e.g. `MyComponent.tsx` and `MyComponent.module.scss`. Components may never import another component's styles.
 
`clsx` should be used to apply multiple classnames. Do not manually concatenate strings. Separate static classnames should generally be separate arguments rather than pre-concatenated for readability.
 
Media queries are almost always incorrect unless you are dealing with a handful of elements that care about the full viewport. Use container queries instead. A default container for the main page area is predefined.
 
Do not use JS-based styles unless required.
 
Do not disable lint rules without a clear, specific justification. Disables should have a narrow scope and explanatory comment.
 
Do not clutter files with unnecessary or unreachable styles. The default font is Roboto, cloud-10, 1.6rem (16px) with a 1.5 line height. The `reset` layer in `src/index.scss` does standard sorts of resets for margin, padding, appearance, border, list-style-type, and similar. Don't re-override these when not necessary.
 
 
## JS/TS Conventions
 
Avoid pointless optional chaining. Only use `?.` when the type allows `null` or `undefined`.
 
Avoid pointless nullish coalescing. Only use `??` when the types indicate a `null` or `undefined` left-hand side.
 
Avoid cross-route importing. It is usually better to put the shared element into a shared folder. Exceptions may be ok for cases where there is a clear primary/secondary relationship between the consumers.
 
Do not redefine existing types. Importing/exporting shared types is acceptable, as is type extraction using utility types.
 
## Accessibility
 
Accessibility is non-negotiable. HTML tags should be semantically appropriate, graphics should have appropriate labels, ARIA should be used correctly, interactive elements should have focus states, and custom focus management may be necessary in some cases.