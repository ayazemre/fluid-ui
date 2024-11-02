<script lang="ts">
	import { type HTMLImgAttributes } from "svelte/elements";
	import Icon from "@iconify/svelte";
	const {
		class: className,
		loadingIcon = "eos-icons:loading",
		errorIcon = "fluent-mdl2:photo-error",
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		loadingIcon?: string;
		errorIcon?: string;
		overrideDefaultStyling?: boolean;
	} & HTMLImgAttributes = $props();

	let status = $state("loading");
</script>

{#if status == "loading" || status == "done"}
	<Icon icon={loadingIcon} class={"fluid-image-loading" + (status === "done" ? " hidden" : "")} />
	<img
		{...restProps}
		onerror={() => (status = "failed")}
		onload={() => (status = "done")}
		class={(overrideDefaultStyling ? "" : "fluid-image") + (className ? ` ${className}` : "") + (status === "loading" ? " hidden" : "")}
	/>
{:else}
	<Icon icon={errorIcon} class="fluid-image-error" />
{/if}
