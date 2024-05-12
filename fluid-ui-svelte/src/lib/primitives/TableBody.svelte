<script lang="ts">
	const { children, class: className, ...restProps }: { children: any; class?: string } = $props();
</script>

<tbody class={'fluid-table-body' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}
</tbody>
