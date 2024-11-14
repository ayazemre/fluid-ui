<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	const {
		textType = "p",
		class: className = "",
		overrideDefaultStyling = false,
		textValue,
		...restProps
	}: {
		textType?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
		textValue: string;
		overrideDefaultStyling?: boolean;
		class?: string;
	} & HTMLAttributes<HTMLElement> = $props();
</script>

{#if textType == "p"}
	<p {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-p") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</p>
{:else if textType == "h1"}
	<h1 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h1") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h1>
{:else if textType == "h2"}
	<h2 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h2") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h2>
{:else if textType == "h3"}
	<h3 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h3") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h3>
{:else if textType == "h4"}
	<h4 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h4") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h4>
{:else if textType == "h5"}
	<h5 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h5") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h5>
{:else if textType == "h6"}
	<h6 {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text fluid-h6") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
		{textValue}
	</h6>
{/if}
