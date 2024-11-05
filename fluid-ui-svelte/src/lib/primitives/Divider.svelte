<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	const {
		class: className,
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
	} & HTMLAttributes<HTMLHRElement> = $props();
</script>

<hr {...restProps} class={(overrideDefaultStyling ? "" : "fluid-divider") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")} />
