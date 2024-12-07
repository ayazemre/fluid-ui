<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		containerType = "div",
		class: className = "",
		overrideDefaultStyling = false,
		children,
		rawElement = $bindable(),
		...restProps
	}: {
		containerType?: "div" | "section" | "aside" | "nav" | "footer";
		class?: string;
		overrideDefaultStyling?: boolean;
		children?: Snippet;
		rawElement?: HTMLElement;
	} & HTMLAttributes<HTMLElement> = $props();
</script>

{#if containerType == "div"}
	<div bind:this={rawElement} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{#if children}
			{@render children()}
		{/if}
	</div>
{:else if containerType == "section"}
	<section bind:this={rawElement} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{#if children}
			{@render children()}
		{/if}
	</section>
{:else if containerType == "aside"}
	<aside bind:this={rawElement} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{#if children}
			{@render children()}
		{/if}
	</aside>
{:else if containerType == "nav"}
	<nav bind:this={rawElement} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{#if children}
			{@render children()}
		{/if}
	</nav>
{:else if containerType == "footer"}
	<footer bind:this={rawElement} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-container") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{#if children}
			{@render children()}
		{/if}
	</footer>
{/if}
