<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import Container from "$lib/primitives/Container.svelte";
	import { fade, slide } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import Button from "$lib/primitives/Button.svelte";
	let {
		class: className,
		isOpen = $bindable(false),
		alignment = "right",
		children,
		overrideDefaultStyling = false,
	}: {
		class?: string;
		isOpen?: boolean;
		alignment: "left" | "right" | "top" | "bottom";
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} = $props();
</script>

<Container overrideDefaultStyling={true} class={(overrideDefaultStyling ? "" : "fluid-drawer") + (isOpen ? "" : " hidden")}>
	<Container
		class={"fluid-drawer-body" + (alignment == "left" || alignment == "right" ? ` ${alignment}-0 h-full` : "") + (alignment == "top" || alignment == "bottom" ? ` ${alignment}-0 w-full` : "")}
	>
		{@render children()}
	</Container>
	<Container
		class="fluid-drawer-backdrop"
		onclick={(e: MouseEvent) => {
			console.log(isOpen);
			isOpen = false;
		}}
	></Container>
</Container>
