<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import { onMount, type Snippet } from "svelte";
	import type { DropdownOptions } from "$lib/types.js";
	let {
		class: className,
		triggerClass,
		contentClass,
		overrideDefaultStyling = false,
		isOpen = $bindable(false),
		shouldCloseOnClickOutside = true,
		dropdownTrigger,
		dropdownContent,
		triggerRawElement,
		contentRawElement,
	}: {
		class?: string;
		triggerClass?: string;
		contentClass?: string;
		overrideDefaultStyling?: boolean;
		isOpen?: boolean;
		shouldCloseOnClickOutside: boolean;
		dropdownTrigger: Snippet<[options: { isOpen: boolean; toggleDropdown: Function }]>;
		dropdownContent: Snippet<[options: { isOpen: boolean; toggleDropdown: Function }]>;
		triggerRawElement?: HTMLElement;
		contentRawElement?: HTMLElement;
	} = $props();

	const componentOptions: DropdownOptions = {
		isOpen,
		toggleDropdown: () => {
			isOpen = !isOpen;
		},
	};

	onMount(() => {
		if (shouldCloseOnClickOutside) {
			document.addEventListener("click", (e) => {
				if (isOpen && e.target) {
					if (!triggerRawElement!.contains(e.target as HTMLElement) && !contentRawElement!.contains(e.target as HTMLElement)) {
						isOpen = false;
					}
				}
			});
		}
	});
</script>

<Container bind:rawElement={triggerRawElement} class={(overrideDefaultStyling ? "" : "fluid-dropdown") + (className ? ` ${className}` : "")} overrideDefaultStyling={true}>
	<Container class={(overrideDefaultStyling ? "" : "fluid-dropdown-trigger") + (triggerClass ? ` ${triggerClass}` : "")} overrideDefaultStyling>
		{@render dropdownTrigger(componentOptions)}
	</Container>
	<Container bind:rawElement={contentRawElement} overrideDefaultStyling class={(overrideDefaultStyling ? "" : "fluid-dropdown-content") + (contentClass ? ` ${contentClass}` : "")}>
		{#if isOpen}
			{@render dropdownContent(componentOptions)}
		{/if}
	</Container>
</Container>
