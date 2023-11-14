<script lang="ts">
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-date-time-input';
	export let overrideClass: boolean = false;
	export let value: string = '';
</script>

<input
	bind:value
	type="date"
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
/>
a
