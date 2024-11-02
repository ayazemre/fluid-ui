<script lang="ts">
	import "../app.css";
	import Container from "$lib/primitives/Container.svelte";
	import Table from "$lib/primitives/Table.svelte";
	import Text from "$lib/primitives/Text.svelte";
	import Button from "$lib/primitives/Button.svelte";
	import TableHeader from "$lib/primitives/TableHeader.svelte";
	import TableRow from "$lib/primitives/TableRow.svelte";
	import TableHead from "$lib/primitives/TableHead.svelte";
	import TableBody from "$lib/primitives/TableBody.svelte";
	import TableData from "$lib/primitives/TableData.svelte";
	import TableFooter from "$lib/primitives/TableFooter.svelte";
	import Image from "$lib/primitives/Image.svelte";
	import TextInput from "$lib/base/TextInput.svelte";
	import Label from "$lib/primitives/Label.svelte";
	import Dropdown from "$lib/components/Dropdown.svelte";
	import Dialog from "$lib/primitives/Dialog.svelte";
	import type { Component } from "svelte";

	const testTableData = {
		headers: ["Table Header 1", "Table Header 1", "Table Header 1"],
		data: [
			[1, 2, 3],
			[4, 5, 6],
			[8, 9, 10],
		],
		footer: ["Table Footer 1", "Table Footer 1", "Table Footer 1"],
	};

	const componentStates = $state({
		darkMode: false,
		textInputData: "",
		isDialogOpen: false,
		isModalOpen: false,
	});

	let dialog: Component<typeof Dialog>;
</script>

<Container class={"flex flex-col min-h-screen p-16!" + (componentStates.darkMode ? " group dark" : " group light")}>
	<Container class="flex flex-col gap-4">
		<Button
			onclick={() => {
				componentStates.darkMode = !componentStates.darkMode;
				console.log(componentStates.darkMode);
			}}
		>
			<Text textType={"p"} textValue="Change Theme"></Text>
		</Button>
		<Text textType={"h1"} textValue="Components"></Text>
		<Container>
			<Text textType={"h2"} textValue="Typography"></Text>
			<Text textType={"h1"} textValue="H1 Text"></Text>
			<Text textType={"h2"} textValue="H2 Text"></Text>
			<Text textType={"h3"} textValue="H3 Text"></Text>
			<Text textType={"h4"} textValue="H4 Text"></Text>
			<Text textType={"h5"} textValue="H5 Text"></Text>
			<Text textType={"h6"} textValue="H6 Text"></Text>
			<Text textType={"p"} textValue="P Text"></Text>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Containers"></Text>
			<Container class="flex gap-2">
				<Container class="bg-success-500 rounded-md" containerType="div"><Text textType={"p"} textValue="Test Div"></Text></Container>
				<Container class="bg-success-500 rounded-md" containerType="aside"><Text textType={"p"} textValue="Test Aside"></Text></Container>
				<Container class="bg-success-500 rounded-md" containerType="section"><Text textType={"p"} textValue="Test Section"></Text></Container>
				<Container class="bg-success-500 rounded-md" containerType="nav"><Text textType={"p"} textValue="Test Nav"></Text></Container>
				<Container class="bg-success-500 rounded-md" containerType="footer"><Text textType={"p"} textValue="Test Footer"></Text></Container>
			</Container>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Table"></Text>
			<Table>
				<TableHeader>
					<TableRow>
						{#each testTableData.headers as header}
							<TableHead>
								{header}
							</TableHead>
						{/each}
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each testTableData.data as datas}
						<TableRow>
							{#each datas as data}
								<TableData>
									{data}
								</TableData>
							{/each}
						</TableRow>
					{/each}
				</TableBody>
				<TableFooter>
					<TableRow>
						{#each testTableData.footer as footer}
							<TableData>
								{footer}
							</TableData>
						{/each}
					</TableRow>
				</TableFooter>
			</Table>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Buttons"></Text>
			<Container class="flex gap-2">
				<Container class="w-full">
					<Text textType={"h3"} textValue="Solid"></Text>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonStyle="primary"
						>
							<Text textType={"p"} textValue="Primary"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonStyle="secondary"
						>
							<Text textType={"p"} textValue="Secondary"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonStyle="tetriary"
						>
							<Text textType={"p"} textValue="Tetriary"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonStyle="neutral"><Text textType={"p"} textValue="Neutral"></Text></Button
						>
					</Container>
				</Container>
				<Container class="w-full">
					<Text textType={"h3"} textValue="Outline"></Text>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="outline"
							buttonStyle="primary"><Text textType={"p"} textValue="Primary Outline"></Text></Button
						>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="outline"
							buttonStyle="secondary"><Text textType={"p"} textValue="Secondary Outline"></Text></Button
						>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="outline"
							buttonStyle="tetriary"><Text textType={"p"} textValue="Tetriary Outline"></Text></Button
						>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="outline"
							buttonStyle="neutral"><Text textType={"p"} textValue="Neutral Outline"></Text></Button
						>
					</Container>
				</Container>
				<Container class="w-full">
					<Text textType={"h3"} textValue="Transparent"></Text>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="transparent"
							buttonStyle="primary"
							><Text textType={"p"} textValue="Primary Transparent"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="transparent"
							buttonStyle="secondary"
							><Text textType={"p"} textValue="Secondary Transparent"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="transparent"
							buttonStyle="tetriary"
							><Text textType={"p"} textValue="Tetriary Transparent"></Text>
						</Button>
					</Container>
					<Container>
						<Button
							onclick={(e: Event) => {
								console.log(e.target);
							}}
							buttonType="transparent"
							buttonStyle="neutral"
							><Text textType={"p"} textValue="Neutral Transparent"></Text>
						</Button>
					</Container>
				</Container>
			</Container>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Images"></Text>
			<Container class="flex justify-center gap-4">
				<Container class="w-24 h-24 overflow-clip">
					<Image src="none"></Image>
				</Container>
				<Container class="w-24 h-24 overflow-clip">
					<Image src="https://picsum.photos/200/300"></Image>
				</Container>
			</Container>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Inputs"></Text>
			<Container class="flex justify-center gap-4">
				<Container>
					<Label for="textInput">
						<Text textType={"h2"} textValue="Text Input"></Text>
					</Label>
					<TextInput
						onkeydown={(e: KeyboardEvent) => {
							console.log(componentStates.textInputData);
						}}
						inputType="text"
						bind:inputValue={componentStates.textInputData}
						id="textInput"
					></TextInput>
				</Container>
				<Container>
					<Label for="passwordInput">
						<Text textType={"h2"} textValue="Password Input Label"></Text>
					</Label>
					<TextInput inputType="password" bind:inputValue={componentStates.textInputData} id="passwordInput"></TextInput>
				</Container>
				<Container>
					<Label for="numberInput">
						<Text textType={"h2"} textValue="Number Input Label"></Text>
					</Label>
					<TextInput inputType="number" bind:inputValue={componentStates.textInputData} id="numberInput"></TextInput>
				</Container>
				<Container>
					<Label for="urlInput">
						<Text textType={"h2"} textValue="URL Input Label"></Text>
					</Label>
					<TextInput inputType="url" bind:inputValue={componentStates.textInputData} id="urlInput"></TextInput>
				</Container>
				<Container>
					<Label for="telInput">
						<Text textType={"h2"} textValue="Tel Input Label"></Text>
					</Label>
					<TextInput inputType="tel" bind:inputValue={componentStates.textInputData} id="telInput"></TextInput>
				</Container>
			</Container>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Dropdowns"></Text>
			<Container class="flex justify-center gap-4">
				<Dropdown trigger={dropdownFreeContent}>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
				</Dropdown>
				<Dropdown trigger={dropdownMatchingContent} matchContentWidthToTrigger={true}>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
					<Text textType={"p"} textValue="Dropdown Item"></Text>
				</Dropdown>
			</Container>
		</Container>
		<Container>
			<Text textType={"h2"} textValue="Dialog"></Text>
			<Container class="flex justify-center gap-4" overrideDefaultStyling={true}>
				<Button onclick={() => (componentStates.isModalOpen = true)}>Toggle Dialog</Button>

				<Button onclick={() => (componentStates.isDialogOpen = !componentStates.isDialogOpen)}>Toggle Non-Modal Dialog</Button>
			</Container>
		</Container>
	</Container>
</Container>

<Dialog bind:isOpen={componentStates.isModalOpen}>
	<Text textType={"p"} textValue="Dialog Content"></Text>
</Dialog>
<Dialog bind:isOpen={componentStates.isDialogOpen} dialogType="normal">
	<Text textType={"p"} textValue="Dialog Content"></Text>
</Dialog>

{#snippet dropdownFreeContent()}
	<Text textType={"p"} textValue="Dropdown Button"></Text>
{/snippet}

{#snippet dropdownMatchingContent()}
	<Text textType={"p"} textValue="Dropdown Button with Matching Content"></Text>
{/snippet}
