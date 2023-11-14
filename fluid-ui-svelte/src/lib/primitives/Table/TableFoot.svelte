<script lang="ts">
	export let tableFootClass: string = '';
	export let defaultClass: string = 'fluid-table-foot';
	export let overrideClass: boolean = false;
</script>

<tfoot class={overrideClass ? tableFootClass : defaultClass + ' ' + tableFootClass}>
	<slot />
</tfoot>
