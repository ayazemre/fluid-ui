<script lang="ts">
	const {
		class: className,
		tableHeaders,
		tableData,
	}: { class: string; tableHeaders: Array<unknown>; tableData: Array<Array<unknown>> } = $props();
</script>

<table class={"fluid-table" + (className ? ` ${className}` : "")}>
	<thead class={"fluid-table-head" + (className ? ` ${className}` : "")}>
		<tr class={"fluid-table-row" + (className ? ` ${className}` : "")}>
			{#each tableHeaders as tableHeader}
				<th>{tableHeader}</th>
			{/each}
		</tr>
	</thead>
	<tbody class={"fluid-table-body" + (className ? ` ${className}` : "")}>
		{#each tableData as tableRow}
			<tr class={"fluid-table-row" + (className ? ` ${className}` : "")}>
				{#each tableRow as tableItem}
					<td>{tableItem}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
