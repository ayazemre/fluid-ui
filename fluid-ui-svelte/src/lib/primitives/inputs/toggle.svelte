<script lang="ts">
	type FluidToggleProps = {
		styles: string;
		is_checked: boolean;
	};
	let { styles = 'fluid_toggle', is_checked, ...rest_props } = $props<FluidToggleProps>();
</script>

<label class="relative inline-flex items-center cursor-pointer">
	<input type="checkbox" bind:value={is_checked} class="sr-only peer" />
	<div
		class={styles +
			" peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:bg-green"}
	/>
</label>
