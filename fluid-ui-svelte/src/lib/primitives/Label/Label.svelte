<script lang="ts">
	type FluidLabelProps = {
		styles: string;
		text: string;
		target: string;
	};
	let { styles = 'fluid_label', text, target, ...rest_props } = $props<FluidLabelProps>();
</script>

<label class={styles} for={target} {...rest_props}>
	{text}
</label>
