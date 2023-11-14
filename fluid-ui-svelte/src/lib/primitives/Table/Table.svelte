<script lang="ts">
	export let tableClass: string = '';
	export let defaultClass: string = 'fluid-table';
	export let overrideClass: boolean = false;
</script>

<table class={overrideClass ? tableClass : defaultClass + ' ' + tableClass}>
	<slot />
</table>
