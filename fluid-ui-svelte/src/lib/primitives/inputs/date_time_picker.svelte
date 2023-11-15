<script lang="ts">
	type FluidDatePickerProps = {
		styles: string;
		value: string;
	};
	let { styles = 'fluid_date_time_input', value, ...rest_props } = $props<FluidDatePickerProps>();
</script>

<input bind:value type="date" class={styles} {...rest_props} />
a
