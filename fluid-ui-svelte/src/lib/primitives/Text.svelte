<script lang="ts">
	const {
		class: className,
		textType = 'p',
		data,
		...restProps
	}: {
		class?: string;
		textType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		data: string;
	} = $props();
</script>

{#if textType == 'h1'}
	<h1 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h1>
{:else if textType == 'h2'}
	<h2 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h2>
{:else if textType == 'h3'}
	<h3 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h3>
{:else if textType == 'h4'}
	<h4 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h4>
{:else if textType == 'h5'}
	<h5 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h5>
{:else if textType == 'h6'}
	<h6 class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</h6>
{:else if textType == 'p'}
	<p class={'fluid-text' + (className ? ` ${className}` : '')} {...restProps}>
		{data}
	</p>
{:else}
	<p class="font-bold">Text format error.</p>
{/if}
