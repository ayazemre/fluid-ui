<script lang="ts">
	type FluidTableDataCellProps = {
		styles: string;
	};
	let { styles = 'fluid_data_cell', ...rest_props } = $props<FluidTableDataCellProps>();
</script>

<td class={styles} {...rest_props}>
	<slot />
</td>
