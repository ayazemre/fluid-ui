<script lang="ts">
	export let styles: string = '';
	export let defaultStyles: boolean = true;
	export let containerType: 'div' | 'section' | 'nav' | 'footer' = 'div';
	export let registerMount: (node: Node) => void = () => {};
	export let registerDestroy: (node: Node) => void = () => {};

	function registerAction(node: Node) {
		registerMount(node);
		return {
			destroy() {
				registerDestroy(node);
			}
		};
	}
</script>

{#if containerType == 'div'}
	<div
		use:registerAction
		class={defaultStyles ? 'fluid-container' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</div>
{:else if containerType == 'section'}
	<section
		use:registerAction
		class={defaultStyles ? 'fluid-container' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</section>
{:else if containerType == 'nav'}
	<nav
		use:registerAction
		class={defaultStyles ? 'fluid-container' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else if containerType == 'footer'}
	<nav
		use:registerAction
		class={defaultStyles ? 'fluid-container' + (styles ? ' ' + styles : '') : styles ? styles : ' '}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else}
	<p>Container format error.</p>
{/if}
