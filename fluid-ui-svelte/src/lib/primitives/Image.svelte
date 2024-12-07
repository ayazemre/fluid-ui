<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLImgAttributes } from "svelte/elements";
	let {
		class: className,
		loadingSnippet,
		placeholderSnippet,
		overrideDefaultStyling = false,
		rawElement,
		...restProps
	}: {
		class?: string;
		loadingSnippet?: Snippet;
		placeholderSnippet?: Snippet;
		noPlaceholders?: boolean;
		overrideDefaultStyling?: boolean;
		rawElement?: HTMLElement;
	} & Omit<HTMLImgAttributes, "onerror" | "onload"> = $props();

	let status: "loading" | "done" | "failed" = $state("loading");
</script>

{#if status == "failed" || !restProps.src}
	{#if placeholderSnippet}
		<div class="fluid-image-error">
			{@render placeholderSnippet()}
		</div>
	{:else}
		<p>Image not loaded, provide placeholder.</p>
	{/if}
{:else}
	{#if status == "loading"}
		<div class={"fluid-image-loading" + (status !== "loading" ? " hidden" : "")}>
			{#if loadingSnippet}
				{@render loadingSnippet()}
			{:else}
				<p>Image loading, provide placeholder.</p>
			{/if}
		</div>
	{/if}
	<img
		bind:this={rawElement}
		{...restProps}
		onerror={() => {
			status = "failed";
			console.log(status);
		}}
		onload={() => {
			status = "done";
			console.log(status);
		}}
		class={(overrideDefaultStyling ? "" : "fluid-image") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") + (status == "done" ? "" : " hidden")}
	/>
{/if}
