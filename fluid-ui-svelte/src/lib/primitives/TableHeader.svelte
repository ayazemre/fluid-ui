<script lang="ts">
	import { type HTMLThAttributes } from 'svelte/elements';
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} & HTMLThAttributes = $props();
</script>

<th class={'fluid-table-header' + (className ? ` ${className}` : '')} {...restProps}></th>
