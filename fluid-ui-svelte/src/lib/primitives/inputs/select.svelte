<script lang="ts">
	type FluidSelectProps = {
		styles: string;
		value: string;
	};
	let { styles = 'fluid_select', value, ...rest_props } = $props<FluidOptionProps>();
</script>

<select class={styles} bind:value {...rest_props}>
	<slot />
</select>
