<script lang="ts">
	export let tableBodyClass: string = '';
	export let defaultClass: string = 'fluid-table-body';
	export let overrideClass: boolean = false;
</script>

<tbody class={overrideClass ? tableBodyClass : defaultClass + ' ' + tableBodyClass}>
	<slot />
</tbody>
