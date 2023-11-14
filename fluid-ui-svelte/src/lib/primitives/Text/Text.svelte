<script lang="ts">
	export let textType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'p';
	export let styles: string = '';
	export let defaultStyles: boolean = true;
</script>

{#if textType == 'h1'}
	<h1
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h1>
{:else if textType == 'h2'}
	<h2
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h2>
{:else if textType == 'h3'}
	<h3
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h3>
{:else if textType == 'h4'}
	<h4
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h4>
{:else if textType == 'h5'}
	<h5
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h5>
{:else if textType == 'h6'}
	<h6
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</h6>
{:else if textType == 'p'}
	<p
		class={defaultStyles ? 'fluid-text' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</p>
{:else}
	<p class="font-bold">Text format error.</p>
{/if}
