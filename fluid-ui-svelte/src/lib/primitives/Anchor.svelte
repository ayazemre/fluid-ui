<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLAnchorAttributes } from "svelte/elements";
	const {
		class: className,
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLAnchorAttributes = $props();
</script>

<a {...restProps} class={(overrideDefaultStyling ? "" : "fluid-anchor") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}>
	{@render children()}
</a>
