<script lang="ts">
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-text-input';
	export let overrideClass: boolean = false;
	export let value: string = '';
</script>

<input
	bind:value
	type="password"
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
/>
