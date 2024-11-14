<script lang="ts">
	import "../app.css";
	import { Button, Container, Text } from "$lib/index.js";
	import Anchor from "$lib/primitives/Link.svelte";
	import type { Snippet } from "svelte";
	import { componentStates } from "./layoutState.svelte.js";
	const { children }: { children: Snippet } = $props();
</script>

<Container class={componentStates.darkMode ? "group dark" : " roup light"}>
	<Container class="flex flex-col min-h-screen p-2">
		<Container class="flex w-full flex-1 gap-2">
			<Container class="flex flex-col flex-1 gap-4 bg-success-100 z-0">
				<Anchor href="/typography">
					<Text textType={"p"} textValue="Typography"></Text>
				</Anchor>
				<Anchor href="/buttons">
					<Text textType={"p"} textValue="Buttons"></Text>
				</Anchor>
				<Anchor href="/containers">
					<Text textType={"p"} textValue="Containers"></Text>
				</Anchor>
				<Anchor href="/tables">
					<Text textType={"p"} textValue="Tables"></Text>
				</Anchor>
				<Anchor href="/inputs">
					<Text textType={"p"} textValue="Inputs"></Text>
				</Anchor>
				<Anchor href="/images">
					<Text textType={"p"} textValue="Images"></Text>
				</Anchor>
				<Anchor href="/dropdowns">
					<Text textType={"p"} textValue="Dropdowns"></Text>
				</Anchor>
				<Anchor href="/drawers">
					<Text textType={"p"} textValue="Drawers"></Text>
				</Anchor>
				<Anchor href="/dialogs">
					<Text textType={"p"} textValue="Dialogs"></Text>
				</Anchor>
				<Anchor href="/testing">
					<Text textType={"p"} textValue="Testing" />
				</Anchor>
			</Container>
			<Container class="flex flex-col w-full">
				<Container>
					<Container>
						<Button
							onclick={() => {
								componentStates.darkMode = !componentStates.darkMode;
								console.log(componentStates.darkMode);
							}}
						>
							<Text textType={"p"} textValue="Change Theme"></Text>
						</Button>
					</Container>
				</Container>
				{@render children()}
			</Container>
		</Container>
	</Container>
</Container>
