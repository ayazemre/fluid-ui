<script lang="ts">
	import type { Snippet } from "svelte";
	import Container from "$lib/primitives/Container.svelte";
	let {
		class: className,
		isOpen = $bindable(false),
		position = "right",
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		isOpen?: boolean;
		position: "left" | "right" | "top" | "bottom";
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} = $props();

	let positions = ["left", "right", "bottom", "top"];
</script>

<Container overrideDefaultStyling={true} class={"fixed bg-neutral-500/50 w-full h-full bottom-0" + (isOpen ? "" : " hidden")}>
	<Container overrideDefaultStyling={true} class={"absolute bg-white h-full w-1/3" + (" " + position + "-0")}>
		{@render children()}
	</Container>
</Container>
