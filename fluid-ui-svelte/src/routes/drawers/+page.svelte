<script lang="ts">
	import { Button, Container, Drawer, Text } from "$lib/index.js";
	import { fade } from "svelte/transition";
	import { componentStates } from "../layoutState.svelte.js";
</script>

<Container>
	<Text textType={"h2"} textValue="Drawers"></Text>
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
	<div transition:fade={{ duration: 200 }}>
		<Drawer contentClass="left-0 h-full p-2" bind:isOpen={componentStates.isLeftDrawerOpen}>Test</Drawer>
	</div>
{/if}
{#if componentStates.isRightDrawerOpen}
	<div transition:fade={{ duration: 200 }}>
		<Drawer contentClass="right-0 h-full p-2" bind:isOpen={componentStates.isRightDrawerOpen}>
			<Text textValue="asdf"></Text>
		</Drawer>
	</div>
{/if}
{#if componentStates.isTopDrawerOpen}
	<div transition:fade={{ duration: 200 }}>
		<Drawer contentClass="top-0 w-full p-2" bind:isOpen={componentStates.isTopDrawerOpen}>Test</Drawer>
	</div>
{/if}
{#if componentStates.isBottomDrawerOpen}
	<div transition:fade={{ duration: 200 }}>
		<Drawer contentClass="bottom-0 w-full p-2" bind:isOpen={componentStates.isBottomDrawerOpen}>Test</Drawer>
	</div>
{/if}
