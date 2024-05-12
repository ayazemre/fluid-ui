<script lang="ts">
	const {
		children,
		class: className,
		...restProps
	}: {
		children: any;
		class?: string;
	} = $props();
</script>

<thead class={'fluid-table-head' + (className ? ` ${className}` : '')} {...restProps}>
	{@render children()}
</thead>
