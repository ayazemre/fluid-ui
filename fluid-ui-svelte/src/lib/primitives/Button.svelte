<script lang="ts">
	import { type HTMLButtonAttributes } from 'svelte/elements';
	const { class: className, ...restProps }: { class?: string } & HTMLButtonAttributes = $props();
</script>

<button class={'fluid-button' + (className ? ` ${className}` : '')} {...restProps}></button>
