<script lang="ts">
	export let audioClass: string = '';
	export let defaultClass: string = 'fluid-video';
	export let overrideClass: boolean = false;
	export let src: string = '';
	export let isAutoPlay: boolean = false;
	export let isControls: boolean = false;
	export let isLoop: boolean = false;
	export let isMuted: boolean = false;
	export let preload: 'auto' | 'metadata' | 'none' = 'auto';
</script>

<video
	on:play
	on:pause
	on:canplay
	on:progress
	class={overrideClass ? audioClass : defaultClass + ' ' + audioClass}
	{src}
	autoplay={isAutoPlay}
	controls={isControls}
	loop={isLoop}
	muted={isMuted}
	{preload}
	{...$$restProps}
/>
