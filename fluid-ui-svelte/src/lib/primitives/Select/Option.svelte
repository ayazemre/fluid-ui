<script lang="ts">
	export let optionClass: string = '';
	export let defaultClass: string = 'fluid-option';
	export let overrideClass: boolean = false;
	export let value: string = 'a';
</script>

<option class={overrideClass ? optionClass : defaultClass + ' ' + optionClass} {value}>
	<slot />
</option>
