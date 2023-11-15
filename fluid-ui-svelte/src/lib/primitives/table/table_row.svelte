<script lang="ts">
	type FluidTableRowProps = {
		styles: string;
	};
	let { styles = 'fluid_table_row', ...rest_props } = $props<FluidTableRowProps>();
</script>

<tr class={styles} {...rest_props}>
	<slot />
</tr>
