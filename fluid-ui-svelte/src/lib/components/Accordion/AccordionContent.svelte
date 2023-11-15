<script lang="ts">
	import Container from '../../primitives/container/container.svelte';
	export let accordionContentClass: string = 'm-2 p-2';
	export let isVisible: boolean;
</script>

<Container
	containerType="div"
	overrideClass={true}
	containerClass={(isVisible ? 'visible ' : 'hidden ') + accordionContentClass}
>
	<slot />
</Container>
