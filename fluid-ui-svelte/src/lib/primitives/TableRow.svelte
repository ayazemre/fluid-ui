<script lang="ts">
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} = $props();
</script>

<tr class={'fluid-table-row' + (className ? ` ${className}` : '')} {...restProps}></tr>
