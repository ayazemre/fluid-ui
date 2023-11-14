<script lang="ts">
	export let tableHeaderClass: string = '';
	export let defaultClass: string = 'fluid-table-header';
	export let overrideClass: boolean = false;
</script>

<th class={overrideClass ? tableHeaderClass : defaultClass + ' ' + tableHeaderClass}>
	<slot />
</th>
