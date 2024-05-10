<script lang="ts">
	import { type HTMLOptionAttributes } from 'svelte/elements';
	const {
		class: className,
		value,
		...restProps
	}: {
		class?: string;
		value: string;
	} & HTMLOptionAttributes = $props();
</script>

<option class={'fluid-option' + (className ? ` ${className}` : '')} {value} {...restProps}></option>
