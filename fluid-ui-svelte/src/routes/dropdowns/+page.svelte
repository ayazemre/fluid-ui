<script lang="ts">
	import { Container, Dropdown, Text } from "$lib/index.js";
	import { fade } from "svelte/transition";
</script>

<Container>
	<Text textType={"h2"} textValue="Dropdowns"></Text>
	<Container class="flex justify-center gap-4">
		<Dropdown trigger={dropdownFreeContent} contentClass="right-0">
			<div transition:fade={{ duration: 300 }} class="bg-error-500">
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
			</div>
		</Dropdown>
		<Dropdown trigger={dropdownMatchingContent} contentClass="w-full">
			<div transition:fade={{ duration: 600 }} class="bg-error-500 shadow-success-900 shadow-md">
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
				<Text textType={"p"} textValue="Dropdown Item"></Text>
			</div>
		</Dropdown>
	</Container>
</Container>

{#snippet dropdownFreeContent(isOpen: boolean)}
	<Text textType={"p"} textValue={"Dropdown Button"}></Text>
{/snippet}

{#snippet dropdownMatchingContent(isOpen: boolean)}
	<Text textType={"p"} textValue={"Dropdown Button with Matching Content"}></Text>
{/snippet}
