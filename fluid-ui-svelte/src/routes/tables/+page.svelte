<script lang="ts">
	import { Container, Table, TableBody, TableData, TableFooter, TableHead, TableHeader, TableRow, Text } from "$lib/index.js";
	import { componentStates } from "../layoutState.svelte.js";
</script>

<Container>
	<Text textType={"h2"} textValue="Table"></Text>
	<Table>
		<TableHeader>
			<TableRow>
				{#each componentStates.testTableData.headers as header}
					<TableHead>
						{header}
					</TableHead>
				{/each}
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each componentStates.testTableData.data as datas}
				<TableRow>
					{#each datas as data}
						<TableData>
							{data}
						</TableData>
					{/each}
				</TableRow>
			{/each}
		</TableBody>
		<TableFooter>
			<TableRow>
				{#each componentStates.testTableData.footer as footer}
					<TableData>
						{footer}
					</TableData>
				{/each}
			</TableRow>
		</TableFooter>
	</Table>
</Container>
