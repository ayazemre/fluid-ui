<script lang="ts">
	import { Button, Container, Drawer, Text } from "$lib/index.js";
	import { fade } from "svelte/transition";
	import { componentStates } from "../layoutState.svelte.js";
</script>

<Container>
	<Text textType={"h2"} textValue="Drawers"></Text>
	{#if componentStates.isTopDrawerOpen}
		<Container transitions={fade} class="w-20 h-20 bg-black">asf</Container>
		<div transition:fade class="w-20 h-20 bg-black">asf</div>
	{/if}

	<Container class="flex justify-center gap-4" overrideDefaultStyling={true}>
		<Button onclick={() => (componentStates.isLeftDrawerOpen = !componentStates.isLeftDrawerOpen)}>
			<Text textType={"p"} textValue="Toggle Left Drawer"></Text>
		</Button>
		<Button onclick={() => (componentStates.isRightDrawerOpen = !componentStates.isRightDrawerOpen)}>
			<Text textType={"p"} textValue="Toggle Right Drawer"></Text>
		</Button>
		<Button onclick={() => (componentStates.isTopDrawerOpen = !componentStates.isTopDrawerOpen)}>
			<Text textType={"p"} textValue="Toggle Top Drawer"></Text>
		</Button>
		<Button onclick={() => (componentStates.isBottomDrawerOpen = !componentStates.isBottomDrawerOpen)}>
			<Text textType={"p"} textValue="Toggle Bottom Drawer"></Text>
		</Button>
	</Container>
</Container>

{#if componentStates.isLeftDrawerOpen}
	<div class="z-50">
		<Drawer alignment="left" bind:isOpen={componentStates.isLeftDrawerOpen}>Test</Drawer>
	</div>
{/if}

{#if componentStates.isBottomDrawerOpen}
	<Drawer alignment="bottom" bind:isOpen={componentStates.isBottomDrawerOpen}>Test</Drawer>
{/if}

{#if componentStates.isRightDrawerOpen}
	<Drawer alignment="right" bind:isOpen={componentStates.isRightDrawerOpen}>Test</Drawer>
{/if}
