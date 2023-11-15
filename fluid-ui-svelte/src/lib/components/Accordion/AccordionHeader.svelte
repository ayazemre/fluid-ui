<script lang="ts">
	import Container from '../../primitives/container/container.svelte';
	import Button from '../../primitives/button/button.svelte';
	export let accordionHeaderClass: string = 'flex justify-between bg-blue m-2 p-2';
	export let accordionButtonClass: string = 'w-full';
</script>

<Button on:click buttonType="button" buttonClass={accordionButtonClass} overrideClass={true}>
	<Container containerType="div" overrideClass={true} containerClass={accordionHeaderClass}>
		<slot />
	</Container>
</Button>
