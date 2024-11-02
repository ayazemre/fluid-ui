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

<anchor {...restProps} class={(overrideDefaultStyling ? "" : "fluid-anchor") + (className ? ` ${className}` : "")}>
	{@render children()}
</anchor>
