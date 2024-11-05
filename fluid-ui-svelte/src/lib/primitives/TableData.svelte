<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLTdAttributes } from "svelte/elements";
	const {
		class: className,
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLTdAttributes = $props();
</script>

<td {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table-data") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</td>
