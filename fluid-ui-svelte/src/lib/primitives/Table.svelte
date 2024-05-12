<script lang="ts">
	import { type HTMLTableAttributes } from 'svelte/elements';
	const {
		children,
		class: className,
		...restProps
	}: {
		children: any;
		class?: string;
	} & HTMLTableAttributes = $props();
</script>

<table class={'fluid-table' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}
</table>
