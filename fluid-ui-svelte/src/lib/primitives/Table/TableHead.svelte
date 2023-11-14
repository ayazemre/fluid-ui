<script lang="ts">
	export let tableHeadClass: string = '';
	export let defaultClass: string = 'fluid-table-head';
	export let overrideClass: boolean = false;
</script>

<thead class={overrideClass ? tableHeadClass : defaultClass + ' ' + tableHeadClass}>
	<slot />
</thead>
