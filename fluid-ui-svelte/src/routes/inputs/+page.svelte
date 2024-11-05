<script lang="ts">
	import { Container, Input, Label, Switch, Text } from "$lib/index.js";
	import { componentStates } from "../layoutState.svelte.js";
</script>

<Container>
	<Text textType={"h2"} textValue="Inputs"></Text>
	<Container class="flex justify-center gap-4">
		<Container>
			<Label for="textInput">
				<Text textType={"h4"} textValue="Text Input"></Text>
			</Label>
			<Input
				onkeydown={(e: KeyboardEvent) => {
					console.log(componentStates.textInputData);
				}}
				type="text"
				bind:value={componentStates.textInputData}
				id="textInput"
				class="fluid-text-input"
			></Input>
		</Container>
		<Container>
			<Label for="passwordInput">
				<Text textType={"h4"} textValue="Password Input Label"></Text>
			</Label>
			<Input type="password" bind:value={componentStates.textInputData} id="passwordInput" class="fluid-text-input"></Input>
		</Container>
		<Container>
			<Label for="numberInput">
				<Text textType={"h4"} textValue="Number Input Label"></Text>
			</Label>
			<Input type="number" bind:value={componentStates.textInputData} id="numberInput" class="fluid-text-input"></Input>
		</Container>
		<Container>
			<Label for="urlInput">
				<Text textType={"h4"} textValue="URL Input Label"></Text>
			</Label>
			<Input type="url" bind:value={componentStates.textInputData} id="urlInput" class="fluid-text-input"></Input>
		</Container>
		<Container>
			<Label for="telInput">
				<Text textType={"h4"} textValue="Tel Input Label"></Text>
			</Label>
			<Input type="tel" bind:value={componentStates.textInputData} id="telInput" class="fluid-text-input"></Input>
		</Container>
	</Container>
	<Container>
		<Text textType={"h2"} textValue="Checkboxes"></Text>
		<Container class="flex justify-center gap-4" overrideDefaultStyling={true}>
			<Input type="checkbox"></Input>
			<Container class="w-24 h-16">
				<Switch></Switch>
			</Container>
		</Container>
	</Container>
</Container>
