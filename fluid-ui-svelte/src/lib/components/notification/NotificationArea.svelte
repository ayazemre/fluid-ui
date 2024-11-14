<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Text from "$lib/primitives/Text.svelte";
	import type { Snippet } from "svelte";

	const {
		class: className,
		overrideDefaultStyling = false,
		children,
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children?: Snippet;
	} = $props();
</script>

<Container overrideDefaultStyling class={overrideDefaultStyling ? "" + (className ? className : "") : "fluid-notification-area" + (className ? ` ${className}` : "")}>
	{#if children}
		{@render children()}
	{/if}
</Container>
