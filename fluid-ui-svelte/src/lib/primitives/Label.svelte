<script lang="ts">
	import { type HTMLLabelAttributes } from 'svelte/elements';
	const {
		class: className,
		target,
		...restProps
	}: {
		class?: string;
		target: string;
	} & HTMLLabelAttributes = $props();
</script>

<label class={'fluid-label' + (className ? ` ${className}` : '')} for={target} {...restProps}
></label>
