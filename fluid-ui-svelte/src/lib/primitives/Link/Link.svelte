<script lang="ts">
	type FluidLinkProps = {
		styles: string;
		url: string;
		target: string;
	};
	let { styles = 'fluid_link', url, ...rest_props } = $props<FluidLinkProps>();
</script>

<a href={url} class={styles} {target}>
	<slot />
</a>
