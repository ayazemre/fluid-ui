<script lang="ts">
	import { Container, Text, Image } from "$lib/index.js";
	import Button from "$lib/primitives/Button.svelte";
	let url = $state("https://picsum.photos/200");
</script>

<Container>
	<Text textType={"h2"} textValue="Images"></Text>
	<Container class="flex flex-col justify-center gap-4">
		<Container>
			<Text textType={"p"} textValue="Image Without Src"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src=""></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={"p"} textValue="Image With Src Fail"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="asdf"></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={"p"} textValue="Image Success"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image loading="lazy" src="https://picsum.photos/200"></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={"p"} textValue="Image Fail with Error Handling Default"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="none"></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={"p"} textValue="Image Success with Error Handling Default"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="https://picsum.photos/200"></Image>
			</Container>
		</Container>

		<Container>
			<Text textType={"p"} textValue="Image Fail with Error Handling Custom Error"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="none" placeholderSnippet={imagePlaceholder}></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={"p"} textValue="Image Success with Error Handling Custom Loader"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src={url} loadingSnippet={imageLoadingElement}></Image>
			</Container>
		</Container>
		<Button
			onclick={(e) => {
				url = "https://picsum.photos/400";
			}}>test</Button
		>
	</Container>
</Container>

{#snippet imageLoadingElement()}
	<Text textValue="loading"></Text>
{/snippet}
{#snippet imagePlaceholder()}
	<Text textValue="error"></Text>
{/snippet}
