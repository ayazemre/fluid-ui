<script lang="ts">
	import { type HTMLThAttributes } from 'svelte/elements';
	const {
		children,
		class: className,
		...restProps
	}: {
		children: any;
		class?: string;
	} & HTMLThAttributes = $props();
</script>

<th class={'fluid-table-header' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}
</th>
