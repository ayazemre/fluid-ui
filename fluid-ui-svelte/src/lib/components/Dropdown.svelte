<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import type { Snippet } from "svelte";
	const {
		class: className,
		contentClass,
		overrideDefaultStyling = false,
		trigger,
		children,
	}: {
		class?: string;
		contentClass?: string;
		overrideDefaultStyling?: boolean;
		trigger: Snippet<[isOpen: boolean]>;
		children: Snippet;
	} = $props();

	let isOpen = $state(false);
</script>

<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown") + (className ? ` ${className}` : "")} overrideDefaultStyling={true}>
	<Button
		onclick={(e: Event) => {
			isOpen = !isOpen;
		}}
	>
		{@render trigger(isOpen)}
	</Button>
	<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown-content") + (contentClass ? ` ${contentClass}` : "")}>
		{#if isOpen}
			{@render children()}
		{/if}
	</Container>
</Container>
