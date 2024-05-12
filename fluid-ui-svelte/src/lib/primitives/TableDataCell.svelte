<script lang="ts">
	import { type HTMLTdAttributes } from 'svelte/elements';
	const {
		children,
		class: className = 'fluid-table-data-cell',
		...restProps
	}: { children: any; class?: string } & HTMLTdAttributes = $props();
</script>

<td class={'fluid-table-data-cell' + (className ? ` ${className}` : '')} {...restProps}
	>{@render children()}</td
>
