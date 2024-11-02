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

<tfoot {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table-footer") + (className ? ` ${className}` : "")}>
	{@render children()}
</tfoot>
