<script lang="ts">
	export let inputClass: string = 'input';
	export let defaultClass: string = 'fluid-color-input';
	export let overrideClass: boolean = false;
	export let value: string = '';
</script>

<input
	bind:value
	type="color"
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
