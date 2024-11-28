<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import type { Snippet } from "svelte";
	let {
		class: className,
		triggerClass,
		contentClass,
		overrideDefaultStyling = false,
		isOpen = $bindable(false),
		dropdownTrigger,
		dropdownContent,
	}: {
		class?: string;
		triggerClass?: string;
		contentClass?: string;
		overrideDefaultStyling?: boolean;
		isOpen?: boolean;
		dropdownTrigger: Snippet<[options: { isOpen: boolean; toggleDropdown: Function }]>;
		dropdownContent: Snippet<[options: { isOpen: boolean; toggleDropdown: Function }]>;
	} = $props();

	const componentOptions = {
		isOpen,
		toggleDropdown: () => {
			isOpen = !isOpen;
		},
	};
</script>

<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown") + (className ? ` ${className}` : "")} overrideDefaultStyling={true}>
	<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown-trigger") + (triggerClass ? ` ${triggerClass}` : "")} overrideDefaultStyling>
		{@render dropdownTrigger(componentOptions)}
	</Container>
	<Container overrideDefaultStyling class={(overrideDefaultStyling ? "" : "fluid-dropdown-content") + (contentClass ? ` ${contentClass}` : "")}>
		{#if isOpen}
			{@render dropdownContent(componentOptions)}
		{/if}
	</Container>
</Container>
