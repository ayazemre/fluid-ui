<script lang="ts">
	import Container from '../../primitives/container/container.svelte';
	export let modalClass: string =
		'absolute w-screen h-screen left-0 bottom-0 bg-gray flex flex-col bg-opacity-50 justify-center items-center z-0';
	export let isVisible: boolean = true;

	const closeOnEscape = (event: KeyboardEvent) => {
		if (event.key == 'Escape') {
			isVisible = false;
		}
	};
</script>

{#if isVisible}
	<Container
		containerType="div"
		overrideClass={true}
		containerClass={modalClass}
		registerMount={() => {
			document.addEventListener('keydown', closeOnEscape);
		}}
		registerDestroy={() => {
			document.removeEventListener('keydown', closeOnEscape);
		}}
	>
		<slot />
	</Container>
{/if}
