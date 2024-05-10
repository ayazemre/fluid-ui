<script lang="ts">
	import { type HTMLFormAttributes } from 'svelte/elements';
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} & HTMLFormAttributes = $props();
</script>

<form class={'fluid-form' + (className ? ` ${className}` : '')} {...restProps}></form>
