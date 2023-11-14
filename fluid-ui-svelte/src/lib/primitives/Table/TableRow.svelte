<script lang="ts">
	export let tableRowClass: string = '';
	export let defaultClass: string = 'fluid-table-row';
	export let overrideClass: boolean = false;
</script>

<tr class={overrideClass ? tableRowClass : defaultClass + ' ' + tableRowClass}>
	<slot />
</tr>
