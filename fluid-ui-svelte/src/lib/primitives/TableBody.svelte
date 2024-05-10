<script lang="ts">
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} = $props();
</script>

<tbody class={'fluid-table-body' + (className ? ` ${className}` : '')} {...restProps}></tbody>
