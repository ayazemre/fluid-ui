<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		class: className = "",
		buttonType = "solid",
		buttonStyle = "primary",
		onclick,
		overrideDefaultStyling = false,
		isActive = $bindable(false),
		activeChildren,
		children,
		...restProps
	}: {
		class?: string;
		buttonType?: "solid" | "outline" | "transparent";
		buttonStyle?: "primary" | "secondary" | "tetriary" | "neutral";
		onclick: (e: Event) => any;
		overrideDefaultStyling?: boolean;
		isActive?: boolean;
		activeChildren?: Snippet;
		children: Snippet;
	} & Omit<HTMLButtonAttributes, "onclick"> = $props();
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
		(overrideDefaultStyling ? "" : " fluid-" + buttonType + "-button") +
		(overrideDefaultStyling ? "" : " fluid-" + buttonStyle + "-button")}
	{...restProps}
>
	{#if activeChildren}
		{#if isActive}
			{@render activeChildren()}
		{:else}
			{@render children()}
		{/if}
	{:else}
		{@render children()}
	{/if}
</button>
