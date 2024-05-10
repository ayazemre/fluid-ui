<script lang="ts">
	const {
		class: className,
		...restProps
	}: {
		class?: string;
	} = $props();
</script>

<thead class={'fluid-table-head' + (className ? ` ${className}` : '')} {...restProps}> </thead>
