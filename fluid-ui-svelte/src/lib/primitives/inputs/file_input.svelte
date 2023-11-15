<script lang="ts">
	type FluidFileInputProps = {
		styles: string;
		value: string;
	};
	let { styles = 'fluid_file_input', value, ...rest_props } = $props<FluidFileInputProps>();
</script>

<input type="file" bind:value class={styles} {...rest_props} />
