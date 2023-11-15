<script lang="ts">
	type FluidImageProps = {
		styles: string;
	};
	let { styles = 'fluid_image', ...rest_props } = $props<FluidImageProps>();
</script>

<img class={styles} {...rest_props} />
