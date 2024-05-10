<script lang="ts">
	import { type HTMLTableAttributes } from 'svelte/elements';
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} & HTMLTableAttributes = $props();
</script>

<table class={'fluid-table' + (className ? ` ${className}` : '')} {...restProps}></table>
