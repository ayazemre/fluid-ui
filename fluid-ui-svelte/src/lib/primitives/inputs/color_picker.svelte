<script lang="ts">
	type FluidColorPickerProps = {
		styles: string;
		value: string;
	};
	let { styles = 'fluid_color_picker', value, ...rest_props } = $props<FluidColorPickerProps>();
</script>

<input bind:value type="color" class={styles} {...rest_props} />
