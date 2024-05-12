<script lang="ts">
	const { children, class: className, ...restProps }: { children: any; class?: string } = $props();
</script>

<tr class={'fluid-table-row' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}</tr
>
