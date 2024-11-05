<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLFormAttributes } from "svelte/elements";
	const {
		class: className,
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLFormAttributes = $props();
</script>

<form {...restProps} class={(overrideDefaultStyling ? "" : "fluid-form") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</form>
