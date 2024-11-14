<script lang="ts">
	import { Button, Container, Dialog, Text } from 'fluid-ui-svelte';
	import { componentStates } from '../layoutState.svelte.js';
</script>

<Container>
	<Text textType={'h2'} textValue="Dialog"></Text>
	<Container class="flex justify-center gap-4" overrideDefaultStyling={true}>
		<Button onclick={() => (componentStates.isModalOpen = true)}>
			<Text textType={'p'} textValue="Toggle Dialog"></Text>
		</Button>
		<Button onclick={() => (componentStates.isDialogOpen = !componentStates.isDialogOpen)}>
			<Text textType={'p'} textValue="Toggle Non-Modal Dialog"></Text>
		</Button>
	</Container>
</Container>

<Dialog bind:isOpen={componentStates.isModalOpen} class="right-0">
	<Text textType={'p'} textValue="Dialog Content"></Text>
</Dialog>

<Dialog bind:isOpen={componentStates.isDialogOpen} dialogType="normal">
	<Text textType={'p'} textValue="Dialog Content"></Text>
</Dialog>
