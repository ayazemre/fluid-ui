<script lang="ts">
	type FluidTableHeadProps = {
		styles: string;
	};
	let { styles = 'fluid_table_head', ...rest_props } = $props<FluidTableHeadProps>();
</script>

<thead class={styles} {...rest_props}>
	<slot />
</thead>
