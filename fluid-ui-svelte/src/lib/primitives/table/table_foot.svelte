<script lang="ts">
	type FluidTableFootProps = {
		styles: string;
	};
	let { styles = 'fluid_table_foot', ...rest_props } = $props<FluidTableFootProps>();
</script>

<tfoot class={styles} {...rest_props}>
	<slot />
</tfoot>
