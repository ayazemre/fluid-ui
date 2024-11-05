<script lang="ts">
	import type { Snippet } from "svelte";
	const {
		class: className,
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} = $props();
</script>

<tbody {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table-body") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</tbody>
