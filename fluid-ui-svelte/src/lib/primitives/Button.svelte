<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLButtonAttributes } from "svelte/elements";

	const {
		class: className = "",
		buttonType = "solid",
		buttonStyle = "primary",
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		class?: string;
		buttonType?: "solid" | "outline" | "transparent";
		buttonStyle?: "primary" | "secondary" | "tetriary" | "neutral";
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLButtonAttributes = $props();
</script>

<button
	class={(overrideDefaultStyling ? "" : "fluid-button") +
		(className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") +
		(" fluid-" + buttonType + "-button") +
		(" fluid-" + buttonStyle + "-button")}
	{...restProps}
>
	{@render children()}
</button>
