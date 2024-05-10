<script lang="ts">
	import { type HTMLAnchorAttributes } from 'svelte/elements';
	const {
		children,
		class: className,
		url,
		...restProps
	}: {
		children: any;
		class?: string;
		url: string;
	} & HTMLAnchorAttributes = $props();
</script>

<a href={url} class={'fluid-anchor' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}
</a>
