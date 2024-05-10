<script lang="ts">
	import { type HTMLSelectAttributes } from 'svelte/elements';
	let {
		class: className,
		value = $bindable(),
		...restProps
	}: {
		class?: string;
		value: string;
	} & HTMLSelectAttributes = $props();
</script>

<select class={'fluid-select' + (className ? ` ${className}` : '')} bind:value {...restProps}
></select>
