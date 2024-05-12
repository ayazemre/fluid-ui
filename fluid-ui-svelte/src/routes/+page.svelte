<script lang="ts">
	import Table from '$lib/base/FluidTable.svelte';
	import Container from '$lib/primitives/Container.svelte';
	import '../app.css';

	const data = [
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6],
		['a', 1, 2, 3, 4, 5, 6]
	];
</script>

<Table headers={data[0]} rows={data.slice(1)}></Table>

<Container id="asf">af</Container>
