<script lang="ts">
	import { type HTMLAudioAttributes } from 'svelte/elements';
	const { class: className, ...restProps }: { class?: string } & HTMLAudioAttributes = $props();
</script>

<audio class={'fluid-audio' + (className ? ` ${className}` : '')} {...restProps}></audio>
