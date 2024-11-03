<script lang="ts">
	import { type HTMLTextareaAttributes } from "svelte/elements";
	let {
		class: className,
		value = $bindable(),
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		value: any;
	} & Omit<HTMLTextareaAttributes, "value"> = $props();
</script>

<textarea {...restProps} bind:value class={(overrideDefaultStyling ? "" : "fluid-text-area") + (className ? ` ${className}` : "")}></textarea>
