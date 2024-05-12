<script lang="ts">
	import Table from '$lib/primitives/Table.svelte';
	import TableBody from '$lib/primitives/TableBody.svelte';
	import TableDataCell from '$lib/primitives/TableDataCell.svelte';
	import TableFoot from '$lib/primitives/TableFoot.svelte';
	import TableHead from '$lib/primitives/TableHead.svelte';
	import TableHeader from '$lib/primitives/TableHeader.svelte';
	import TableRow from '$lib/primitives/TableRow.svelte';

	const {
		class: className,
		headers,
		rows
	}: {
		class?: string;
		headers: Array<any>;
		rows: Array<any>;
	} = $props();
</script>

<Table class={className}>
	<TableBody>
		{#each headers as h}
			<TableHeader>
				<TableHead>{h}</TableHead>
			</TableHeader>
		{/each}
		{#each rows as rowData}
			<TableRow>
				{#each rowData as data}
					<TableDataCell>{data}</TableDataCell>
				{/each}
			</TableRow>
		{/each}
	</TableBody>
</Table>
