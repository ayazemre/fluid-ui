<script lang="ts">
	import { type HTMLInputAttributes } from "svelte/elements";
	let {
		class: className,
		value = $bindable(),
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		value: any;
	} & Omit<HTMLInputAttributes, "value"> = $props();
</script>

<input {...restProps} bind:value class={(overrideDefaultStyling ? "" : "fluid-input") + (className ? ` ${className}` : "")} />
