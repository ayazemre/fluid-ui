<script lang="ts">
	type FluidTableBodyProps = {
		styles: string;
	};
	let { styles = 'fluid_table_body', ...rest_props } = $props<FluidTableBodyProps>();
</script>

<tbody class={styles} {...rest_props}>
	<slot />
</tbody>
