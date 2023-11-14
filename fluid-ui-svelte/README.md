# This package is under development, you can check the version number. I need lots of refactoring to do for ARIA and performance optimizations. I would not recommend using it before I reach at least v.0.5.x.

# Fluid UI for Svelte/SvelteKit

Fluid UI is a UI library with minimal styling and layout. All of the primitives are basic abstractions of html elements and components are just building blocks for the actual component. You will need to build components yourself using those building blocks.

# Getting Started

Install the library.
```
npm i fluid-ui-svelte
```

Import a component to your UI.
```
<script lang="ts">
	import '../app.css';
	import {Button} from '$lib/index.js';
</script>

<Button></Button>
```
Success :)

# Tailwind "app.css" Template.
```
@tailwind base;
@tailwind components;
@tailwind utilities;


.fluid-audio {
    @apply m-2 p-2
}

.fluid-button {
    @apply m-2 p-2 disabled:bg-opacity-25
}

.fluid-container {
    @apply m-2 p-2
}

.fluid-form {
    @apply m-2 p-2
}

.fluid-image {
    @apply m-2 p-2
}

.fluid-color-input {
    @apply m-2 p-2
}

.fluid-date-time-input {
    @apply m-2 p-2
}

.fluid-file-input {
    @apply m-2 p-2
}

.fluid-color-input {
    @apply m-2 p-2
}

.fluid-color-input {
    @apply m-2 p-2
}

.fluid-label {
    @apply m-2 p-2
}

.fluid-link {
    @apply m-2 p-2
}

.fluid-select {
    @apply m-2 p-2
}

.fluid-option {
    @apply m-2 p-2
}

.fluid-table {
    @apply m-2 p-2
}

.fluid-text {
    @apply m-2 p-2
}

.fluid-video {
    @apply m-2 p-2
}

.fluid-avatar {
    @apply m-2 p-2 rounded-full w-full h-full aspect-square
}

.fluid-toggle {
    @apply bg-gray after:bg-graylight after:border-graylight w-11 h-6 rounded-full after:absolute after:top-[2px] after:left-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all
}
```