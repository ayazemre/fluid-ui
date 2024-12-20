<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLImgAttributes } from "svelte/elements";
	let {
		class: className,
		loadingSnippet,
		placeholderSnippet,
		overrideDefaultStyling = false,
		rawElement = $bindable(),
		src = $bindable(),
		...restProps
	}: {
		class?: string;
		loadingSnippet?: Snippet;
		placeholderSnippet?: Snippet;
		noPlaceholders?: boolean;
		src: string;
		overrideDefaultStyling?: boolean;
		rawElement?: HTMLElement;
	} & Omit<HTMLImgAttributes, "onerror" | "onload" | "src"> = $props();

	let status: "loading" | "done" | "failed" = $state("loading");
	$effect(() => {
		src ? (status = "loading") : "";
	});
</script>

{#if status == "failed" || !src}
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
		}}
		onload={() => {
			status = "done";
		}}
		class={(overrideDefaultStyling ? "" : "fluid-image") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") + (status == "done" ? "" : " hidden")}
	/>
{/if}
