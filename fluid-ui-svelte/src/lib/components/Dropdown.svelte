<script lang="ts">
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import { type Snippet } from "svelte";
	const {
		class: className,
		overrideDefaultStyling = false,
		matchContentWidthToTrigger = false,
		trigger,
		children,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		matchContentWidthToTrigger?: boolean;
		trigger: Snippet;
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
		{@render trigger()}
	</Button>
	<Container class={"fluid-dropdown-content" + (isOpen ? "" : " hidden") + (matchContentWidthToTrigger ? " w-full" : "")}>
		{@render children()}
	</Container>
</Container>
