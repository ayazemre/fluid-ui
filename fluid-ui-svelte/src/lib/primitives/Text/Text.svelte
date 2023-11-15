<script lang="ts">
	type FluidTextProps = {
		styles: string;
		textType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		text: string;
	};
	let { styles = 'fluid_text', textType = 'p', text, ...rest_props } = $props<FluidTextProps>();
</script>

{#if textType == 'h1'}
	<h1 class={styles} {...restProps}>
		{text}
	</h1>
{:else if textType == 'h2'}
	<h2 class={styles} {...restProps}>
		{text}
	</h2>
{:else if textType == 'h3'}
	<h3 class={styles} {...restProps}>
		{text}
	</h3>
{:else if textType == 'h4'}
	<h4 class={styles} {...restProps}>
		{text}
	</h4>
{:else if textType == 'h5'}
	<h5 class={styles} {...restProps}>
		{text}
	</h5>
{:else if textType == 'h6'}
	<h6 class={styles} {...restProps}>
		{text}
	</h6>
{:else if textType == 'p'}
	<p class={styles} {...restProps}>
		{text}
	</p>
{:else}
	<p class="font-bold">Text format error.</p>
{/if}
