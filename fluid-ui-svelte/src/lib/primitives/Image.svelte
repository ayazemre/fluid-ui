<script lang="ts">
	import { type HTMLImgAttributes } from 'svelte/elements';
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} & HTMLImgAttributes = $props();
</script>

<img class={'fluid-image' + (className ? ` ${className}` : '')} {...restProps} />
