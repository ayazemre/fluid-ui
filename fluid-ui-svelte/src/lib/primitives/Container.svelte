<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLAttributes } from "svelte/elements";

	const {
		containerType = "div",
		class: className = "",
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		containerType?: "div" | "section" | "aside" | "nav" | "footer";
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLAttributes<HTMLElement> = $props();
</script>

{#if containerType == "div"}
	<div {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{@render children()}
	</div>
{:else if containerType == "section"}
	<section {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{@render children()}
	</section>
{:else if containerType == "aside"}
	<aside {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{@render children()}
	</aside>
{:else if containerType == "nav"}
	<nav {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{@render children()}
	</nav>
{:else if containerType == "footer"}
	<footer {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{@render children()}
	</footer>
{/if}
