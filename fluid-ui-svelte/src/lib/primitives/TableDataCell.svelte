<script lang="ts">
	import { type HTMLTdAttributes } from 'svelte/elements';
	const {
		class: className = 'fluid-table-data-cell',
		...restProps
	}: {
		class?: string;
	} & HTMLTdAttributes = $props();
</script>

<td class={'fluid-table-data-cell' + (className ? ` ${className}` : '')} {...restProps}></td>
