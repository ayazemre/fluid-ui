<script lang="ts">
	import Input from "$lib/primitives/Input.svelte";
	import { type HTMLInputAttributes } from "svelte/elements";
	let {
		class: className,
		inputType = "text",
		inputValue = $bindable(),
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		inputType: "text" | "password" | "url" | "tel" | "search" | "number";
		inputValue: string;
	} & Omit<HTMLInputAttributes, "type" | "value"> = $props();
</script>

<Input type={inputType} bind:value={inputValue} {...restProps} class={(overrideDefaultStyling ? "" : "fluid-text-input") + (className ? ` ${className}` : "")}></Input>
