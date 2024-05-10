<script lang="ts">
	import { type HTMLInputAttributes } from 'svelte/elements';
	let {
		class: className,
		value = $bindable(''),
		...restProps
	}: {
		class?: string;
		value?: string;
	} & HTMLInputAttributes = $props();
</script>

<input bind:value class={'fluid-input' + (className ? ` ${className}` : '')} {...restProps} />
