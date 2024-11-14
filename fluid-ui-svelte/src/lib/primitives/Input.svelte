<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	let {
		class: className,
		value = $bindable(),
		checked = $bindable(false),
		type,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		overrideDefaultStyling?: boolean;
		value?: any;
		checked?: boolean;
		type: string;
	} & Omit<HTMLInputAttributes, "value" | "type"> = $props();
</script>

{#if type === "checkbox"}
	<input {...restProps} bind:checked type="checkbox" class={(overrideDefaultStyling ? "" : "fluid-checkbox") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")} />
{:else}
	<input {...restProps} bind:value {type} class={(overrideDefaultStyling ? "" : "fluid-input") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")} />
{/if}
