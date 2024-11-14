<script lang="ts">
	import type { Snippet } from "svelte";
	import Container from "$lib/primitives/Container.svelte";
	import Button from "$lib/primitives/Button.svelte";
	let {
		class: className,
		contentClass,
		isOpen = $bindable(false),
		children,
		overrideDefaultStyling = false,
	}: {
		class?: string;
		contentClass?: string;
		isOpen?: boolean;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} = $props();
</script>

<Container overrideDefaultStyling={true} class={overrideDefaultStyling ? "" + (className ? className : "") : "fluid-drawer" + (className ? ` ${className}` : "")}>
	<Container class={overrideDefaultStyling ? "" + (contentClass ? `${contentClass}` : "") : "fluid-drawer-body" + (contentClass ? ` ${contentClass}` : "")}>
		{@render children()}
	</Container>
	<Button
		overrideDefaultStyling
		class="fluid-drawer-backdrop"
		onclick={(e: Event) => {
			isOpen = false;
		}}
	>
		<Container></Container>
	</Button>
</Container>
