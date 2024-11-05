<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLThAttributes } from "svelte/elements";
	const {
		class: className,
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLThAttributes = $props();
</script>

<th {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table-head") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</th>
