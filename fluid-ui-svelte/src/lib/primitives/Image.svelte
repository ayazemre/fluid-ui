<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLImgAttributes } from "svelte/elements";
	const {
		class: className,
		loadingSnippet,
		errorSnippet,
		noPlaceholders = false,
		overrideDefaultStyling = false,
		...restProps
	}: {
		class?: string;
		loadingSnippet?: Snippet;
		errorSnippet?: Snippet;
		noPlaceholders?: boolean;
		overrideDefaultStyling?: boolean;
	} & Omit<HTMLImgAttributes, "onerror" | "onload"> = $props();

	let status = $state("loading");
</script>

{#if noPlaceholders}
	<img
		{...restProps}
		onerror={() => {
			status = "failed";
			console.log(status);
		}}
		onload={() => {
			status = "done";
			console.log(status);
		}}
		class={(overrideDefaultStyling ? "" : "fluid-image") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") + (status == "loading" ? " invisible" : "")}
	/>
{:else if status == "loading" || status == "done"}
	<div class={"fluid-image-loading" + (status === "done" ? " hidden" : "")}>
		{#if loadingSnippet}
			{@render loadingSnippet()}
		{:else}
			<p>No loading snippet provided.</p>
		{/if}
	</div>

	<img
		{...restProps}
		onerror={() => {
			status = "failed";
			console.log(status);
		}}
		onload={() => {
			status = "done";
			console.log(status);
		}}
		class={(overrideDefaultStyling ? "" : "fluid-image") + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "") + (status == "loading" ? " invisible" : "")}
	/>
{:else if status == "failed"}
	<div class="fluid-image-error">
		{#if errorSnippet}
			{@render errorSnippet()}
		{:else}
			<p>No error snippet provided.</p>
		{/if}
	</div>
{/if}
