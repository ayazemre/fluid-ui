<script lang="ts">
	export let tableDataCellClass: string = '';
	export let defaultClass: string = 'fluid-table-cell';
	export let overrideClass: boolean = false;
</script>

<td class={overrideClass ? tableDataCellClass : defaultClass + ' ' + tableDataCellClass}>
	<slot />
</td>
