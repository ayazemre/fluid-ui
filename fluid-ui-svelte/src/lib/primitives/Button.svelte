<script lang="ts">
	import { type HTMLButtonAttributes } from 'svelte/elements';
	const {
		children,
		class: className,
		...restProps
	}: { children: any; class?: string } & HTMLButtonAttributes = $props();
</script>

<button class={'fluid-button' + (className ? ` ${className}` : '')} {...restProps}
	>{@render children()}</button
>
