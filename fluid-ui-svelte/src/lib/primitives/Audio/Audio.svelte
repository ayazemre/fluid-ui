<script lang="ts">
	type FluidAudioProps = {
		styles: string;
	};
	let { styles = 'fluid_audio', ...rest_props } = $props<FluidAudioProps>();
</script>

<audio class={styles} {...rest_props} />
