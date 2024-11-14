<script lang="ts">
	import { Container, Dropdown, Text } from 'fluid-ui-svelte';
</script>

<Container>
	<Text textType={'h2'} textValue="Dropdowns"></Text>
	<Container class="flex justify-center gap-4">
		<Dropdown trigger={dropdownFreeContent}>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
		</Dropdown>
		<Dropdown trigger={dropdownMatchingContent} matchContentWidthToTrigger={true}>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
			<Text textType={'p'} textValue="Dropdown Item"></Text>
		</Dropdown>
	</Container>
</Container>

{#snippet dropdownFreeContent(isOpen: boolean)}
	<Text textType={'p'} textValue={'Dropdown Button' + (isOpen ? ' Open' : ' Closed')}></Text>
{/snippet}

{#snippet dropdownMatchingContent(isOpen: boolean)}
	<Text
		textType={'p'}
		textValue={'Dropdown Button with Matching Content' + (isOpen ? ' Open' : ' Closed')}
	></Text>
{/snippet}
