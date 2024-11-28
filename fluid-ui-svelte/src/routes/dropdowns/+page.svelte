<script lang="ts">
	import { Container, Dropdown, Text } from "$lib/index.js";
	import Button from "$lib/primitives/Button.svelte";
	import { fade } from "svelte/transition";
</script>

<Container>
	<Text textType={"h2"} textValue="Dropdowns"></Text>
	<Container class="flex justify-center gap-4">
		<Dropdown dropdownTrigger={dropdownFreeTrigger} dropdownContent={dropdownFreeContent} contentClass="right-0"></Dropdown>
		<Dropdown dropdownTrigger={dropdownMatchingTrigger} dropdownContent={dropdownMatchingContent} contentClass="w-full"></Dropdown>
	</Container>
</Container>

{#snippet dropdownFreeTrigger(options: any)}
	<Button
		onclick={(e: Event) => {
			options.toggleDropdown();
		}}
	>
		<Text textType={"p"} textValue={"Dropdown Button"}></Text>
	</Button>
{/snippet}
{#snippet dropdownFreeContent({})}
	<div transition:fade={{ duration: 600 }} class="bg-error-500 shadow-success-900 shadow-md">
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
	</div>
{/snippet}

{#snippet dropdownMatchingTrigger(options: any)}
	<Button
		onclick={(e: Event) => {
			options.toggleDropdown();
		}}
	>
		<Text textType={"p"} textValue={"Dropdown Button with Matching Content"}></Text>
	</Button>
{/snippet}
{#snippet dropdownMatchingContent({})}
	<div transition:fade={{ duration: 600 }} class="bg-error-500 shadow-success-900 shadow-md">
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
		<Text textType={"p"} textValue="Dropdown Item"></Text>
	</div>
{/snippet}
