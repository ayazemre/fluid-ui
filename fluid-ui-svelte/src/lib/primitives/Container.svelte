<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	const {
		children,
		class: className,
		containerType = 'div',
		...restProps
	}: {
		children?: any;
		class?: string;
		containerType?: 'div' | 'section' | 'nav' | 'footer' | 'aside';
	} & HTMLAttributes<HTMLElement> = $props();
</script>

{#if containerType == 'div'}
	<div class={'fluid-container' + (className ? ` ${className}` : '')} {...restProps}>
		{@render children()}
	</div>
{:else if containerType == 'section'}
	<section class={'fluid-container' + (className ? ` ${className}` : '')} {...restProps}>
		{@render children()}
	</section>
{:else if containerType == 'nav'}
	<nav class={'fluid-container' + (className ? ` ${className}` : '')} {...restProps}>
		{@render children()}
	</nav>
{:else if containerType == 'footer'}
	<nav class={'fluid-container' + (className ? ` ${className}` : '')} {...restProps}>
		{@render children()}
	</nav>
{:else if containerType == 'aside'}
	<aside class={'fluid-container' + (className ? ` ${className}` : '')} {...restProps}>
		{@render children()}
	</aside>
{:else}
	<p>Container format error.</p>
{/if}
