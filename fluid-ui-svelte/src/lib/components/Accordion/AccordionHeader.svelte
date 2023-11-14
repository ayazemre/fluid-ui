<script lang="ts">
	import Container from '../../primitives/Container/Container.svelte';
	import Button from '../../primitives/Button/Button.svelte';
	export let accordionHeaderClass: string = 'flex justify-between bg-blue m-2 p-2';
	export let accordionButtonClass: string = 'w-full';
</script>

<Button on:click buttonType="button" buttonClass={accordionButtonClass} overrideClass={true}>
	<Container containerType="div" overrideClass={true} containerClass={accordionHeaderClass}>
		<slot />
	</Container>
</Button>
