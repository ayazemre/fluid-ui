<script lang="ts">
	import '$lib/client/app.css';
	import { Button, Container, Text, Anchor } from 'fluid-ui-svelte';
	import type { Snippet } from 'svelte';
	import { componentStates } from './layoutState.svelte.js';
	import Icon from '@iconify/svelte';
	const { children }: { children: Snippet } = $props();
</script>

<Container class={componentStates.darkMode ? 'group dark' : 'group light'}>
	<Container class={'flex flex-col min-h-screen w-full'}>
		<Container class="flex w-full flex-1 gap-2 ">
			<Container
				containerType="aside"
				id="sidebar"
				class="flex flex-col flex-1 gap-6 bg-success-100 p-4"
			>
				<Container>
					<Text textType={'h4'} textValue="Fluid UI"></Text>
				</Container>
				<hr />
				<Container class="flex flex-col gap-4 py-2 ">
					<Anchor href="/introduction">
						<Container
							class="flex justify-start items-center gap-2 bg-error-100 hover:bg-primary-300 p-2"
							overrideDefaultStyling={true}
						>
							<Icon icon="svg-spinners:blocks-shuffle-3" />
							<Text textType={'p'} textValue="Introduction"></Text>
						</Container>
					</Anchor>
					<Anchor href="/getting-started">
						<Container
							class="flex justify-start items-center gap-2 bg-error-100 hover:bg-primary-300 p-2"
							overrideDefaultStyling={true}
						>
							<Icon icon="svg-spinners:blocks-shuffle-3" />
							<Text textType={'p'} textValue="Getting Started" class="text-nowrap"></Text>
						</Container>
					</Anchor>
					<Anchor href="/primitives">
						<Container
							class="flex justify-start items-center gap-2 bg-error-100 hover:bg-primary-300 p-2"
							overrideDefaultStyling={true}
						>
							<Icon icon="svg-spinners:blocks-shuffle-3" />
							<Text textType={'p'} textValue="Primitives"></Text>
						</Container>
					</Anchor>
					<hr />
					<Container
						class="flex justify-start items-center gap-2 bg-error-100 hover:bg-primary-300 p-2"
						overrideDefaultStyling={true}
					>
						<Icon icon="svg-spinners:blocks-shuffle-3" />
						<Text textType={'p'} textValue="Components"></Text>
					</Container>
					<Anchor href="/community">
						<Container
							class="flex justify-start items-center gap-2 bg-error-100 hover:bg-primary-300 p-2"
							overrideDefaultStyling={true}
						>
							<Icon icon="svg-spinners:blocks-shuffle-3" />
							<Text textType={'p'} textValue="Community"></Text>
						</Container>
					</Anchor>
				</Container>
			</Container>
			<Container class="flex flex-col w-full gap-8">
				<Container class="flex justify-between items-center p-2">
					<Text textType={'h2'} textValue="Primitives"></Text>
					<Container>
						<Button
							buttonType="transparent"
							buttonStyle="primary"
							onclick={() => (componentStates.darkMode = !componentStates.darkMode)}
						>
							{#if componentStates.darkMode}
								<Icon icon="circum:dark" />
							{:else}
								<Icon icon="entypo:light-up" />
							{/if}
						</Button>
					</Container>
				</Container>
				{@render children()}
			</Container>
		</Container>
	</Container>
</Container>
