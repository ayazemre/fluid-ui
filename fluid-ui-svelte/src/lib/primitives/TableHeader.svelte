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

<thead {...restProps} class={(overrideDefaultStyling ? "" : "fluid-table-header") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</thead>
