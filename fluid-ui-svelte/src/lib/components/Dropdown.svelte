<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import type { Snippet } from "svelte";
	const {
		class: className,
		triggerClass,
		contentClass,
		overrideDefaultStyling = false,
		dropdownTrigger,
		children,
	}: {
		class?: string;
		triggerClass?: string;
		contentClass?: string;
		overrideDefaultStyling?: boolean;
		dropdownTrigger: Snippet<[isOpen: boolean]>;
		children: Snippet;
	} = $props();

	let isOpen = $state(false);
</script>

<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown") + (className ? ` ${className}` : "")} overrideDefaultStyling={true}>
	<Button
		class={(overrideDefaultStyling ? "" : "fluid-dropdown-trigger") + (triggerClass ? ` ${triggerClass}` : "")}
		overrideDefaultStyling
		onclick={(e: Event) => {
			isOpen = !isOpen;
		}}
	>
		{@render dropdownTrigger(isOpen)}
	</Button>
	<Container overrideDefaultStyling class={(overrideDefaultStyling ? "" : "fluid-dropdown-content") + (contentClass ? ` ${contentClass}` : "")}>
		{#if isOpen}
			{@render children()}
		{/if}
	</Container>
</Container>
