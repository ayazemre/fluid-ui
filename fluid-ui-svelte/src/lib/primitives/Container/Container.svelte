<script lang="ts">
	type FluidContainerProps = {
		styles: string;
		container_type: 'div' | 'section' | 'nav' | 'footer';
	};
	let {
		styles = 'fluid_container',
		container_type = 'div',
		...rest_props
	} = $props<FluidContainerProps>();
</script>

{#if container_type == 'div'}
	<div class={styles} {...rest_props}>
		<slot />
	</div>
{:else if container_type == 'section'}
	<section class={styles} {...rest_props}>
		<slot />
	</section>
{:else if container_type == 'nav'}
	<nav class={styles} {...rest_props}>
		<slot />
	</nav>
{:else if container_type == 'footer'}
	<nav class={styles} {...rest_props}>
		<slot />
	</nav>
{:else}
	<p>Container format error.</p>
{/if}
