<script lang="ts">
	type FluidTableProps = {
		styles: string;
	};
	let { styles = 'fluid_table', ...rest_props } = $props<FluidTableProps>();
</script>

<table class={styles} {...rest_props}>
	<slot />
</table>
