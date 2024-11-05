<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLButtonAttributes } from "svelte/elements";

	const {
		class: className = "",
		buttonType = "solid",
		buttonStyle = "primary",
		onclick,
		overrideDefaultStyling = false,
		children,
		...restProps
	}: {
		class?: string;
		buttonType?: "solid" | "outline" | "transparent";
		buttonStyle?: "primary" | "secondary" | "tetriary" | "neutral";
		onclick: (e: Event) => any;
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & Omit<HTMLButtonAttributes, "onclick"> = $props();
	let isActive = $state(false);
</script>

<button
	onclick={async (e: Event) => {
		if (isActive) {
			return;
		}
		if (onclick) {
			isActive = true;
			await onclick(e);
			isActive = false;
		}
	}}
	class={(overrideDefaultStyling ? "" : "fluid-button") +
		(className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") +
		(" fluid-" + buttonType + "-button") +
		(" fluid-" + buttonStyle + "-button")}
	{...restProps}
>
	{@render children()}
</button>
