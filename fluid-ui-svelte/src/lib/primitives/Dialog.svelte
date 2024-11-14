<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLDialogAttributes } from "svelte/elements";
	let {
		class: className,
		isOpen = $bindable(false),
		dialogType = "modal",
		children,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		isOpen?: boolean;
		dialogType?: "modal" | "normal";
		overrideDefaultStyling?: boolean;
		children: Snippet;
	} & HTMLDialogAttributes = $props();

	let dialogElement: HTMLDialogElement;

	$effect(() => {
		if (isOpen) {
			dialogType === "modal" ? dialogElement.showModal() : dialogElement.show();
		} else {
			dialogElement.close();
		}
	});
</script>

<dialog
	bind:this={dialogElement}
	onclose={(e: Event) => {
		isOpen = false;
	}}
	class={(overrideDefaultStyling ? "" : "fluid-dialog") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}
	{...restProps}
>
	{@render children()}
</dialog>
