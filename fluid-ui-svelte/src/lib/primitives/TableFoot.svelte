<script lang="ts">
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} = $props();
</script>

<tfoot class={'fluid-table-foot' + (className ? ` ${className}` : '')} {...restProps}></tfoot>
