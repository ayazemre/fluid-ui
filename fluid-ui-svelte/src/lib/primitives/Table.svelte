<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLTableAttributes } from "svelte/elements";
	const {
		class: className,
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLTableAttributes = $props();
</script>

<table {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table") + (className ? ` ${className}` : "")}>
	{@render children()}
</table>
