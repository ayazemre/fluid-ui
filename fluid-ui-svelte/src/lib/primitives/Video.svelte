<script lang="ts">
	import { type HTMLVideoAttributes } from 'svelte/elements';
	const {
		class: className,
		src,
		type,
		captions,
		...restProps
	}: {
		class?: string;
		src: string;
		type: string;
		captions: {
			src: string;
			srcLang: string;
			label: string;
		};
	} & HTMLVideoAttributes = $props();
</script>

<video class={'fluid-video' + (className ? ` ${className}` : '')} {...restProps}>
	<source {src} {type} />
	<track kind="captions" src={captions.src} srclang={captions.srcLang} label={captions.label} />
</video>
