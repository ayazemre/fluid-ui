<script lang="ts">
	type FluidOptionProps = {
		styles: string;
		value: string;
	};
	let { styles = 'fluid_option', value, ...rest_props } = $props<FluidOptionProps>();
</script>

<option class={styles} bind:value {...rest_props}>
	<slot />
</option>
