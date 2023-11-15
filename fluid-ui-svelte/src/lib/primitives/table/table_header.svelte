<script lang="ts">
	type FluidTableHeaderProps = {
		styles: string;
	};
	let { styles = 'fluid_table_header', ...rest_props } = $props<FluidTableHeaderProps>();
</script>

<th class={styles} {...rest_props}>
	<slot />
</th>
