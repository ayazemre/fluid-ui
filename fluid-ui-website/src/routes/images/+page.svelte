<script lang="ts">
	import { Container, Text, Image } from 'fluid-ui-svelte';
	import Icon from '@iconify/svelte';
</script>

<Container>
	<Text textType={'h2'} textValue="Images"></Text>
	<Container class="flex flex-col justify-center gap-4">
		<Container>
			<Text textType={'p'} textValue="Image Fail"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="none" noPlaceholders={true}></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={'p'} textValue="Image Success"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image loading="lazy" src="https://picsum.photos/200" noPlaceholders={true}></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={'p'} textValue="Image Fail with Error Handling Default"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="none"></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={'p'} textValue="Image Success with Error Handling Default"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image loading="lazy" src="https://picsum.photos/200"></Image>
			</Container>
		</Container>

		<Container>
			<Text textType={'p'} textValue="Image Fail with Error Handling Custom Error"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image src="none" errorSnippet={imageFailedElement}></Image>
			</Container>
		</Container>
		<Container>
			<Text textType={'p'} textValue="Image Success with Error Handling Custom Loader"></Text>
			<Container class="w-24 h-24 overflow-clip">
				<Image loading="lazy" src="https://picsum.photos/200" loadingSnippet={imageLoadingElement}
				></Image>
			</Container>
		</Container>
	</Container>
</Container>

{#snippet imageLoadingElement()}
	<Icon icon="eos-icons:loading"></Icon>
{/snippet}
{#snippet imageFailedElement()}
	<Icon icon="fluent-mdl2:photo-error"></Icon>
{/snippet}
