<script lang="ts">
	type TrackCaptions = {
		src: string;
		src_lang: string;
		label: string;
	};
	type FluidVideoProps = {
		styles: string;
		src: string;
		type: string;
		captions: TrackCaptions;
	};
	let { styles = 'fluid_video', src, type, captions, ...rest_props } = $props<FluidVideoProps>();
</script>

{#if captions.length > 0}
	<video class={styles} {...restProps}>
		<source {src} {type} />
		<track kind="captions" src={captions.src} srclang={captions.src_lang} label={captions.label} />
	</video>
{/if}
