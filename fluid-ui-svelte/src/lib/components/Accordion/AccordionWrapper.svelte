<script lang="ts">
	import Container from '../../primitives/container/container.svelte';
	export let accordionClass: string = 'flex flex-col bg-green';
</script>

<Container containerType="div" overrideClass={true} containerClass={accordionClass}>
	<slot />
</Container>
