<script lang="ts">
	import "../app.css";
	import Container from "$lib/base/Container.svelte";
	import Table from "$lib/base/Table.svelte";
	import Text from "$lib/base/Text.svelte";

	const testTableData = {
		headers: ["a", "b", "cs"],
		data: [[1, 2, 3], [4, 5, 6], [8]],
	};
</script>

<Container class="flex flex-col h-screen p-16">
	<Text textType={"h1"} textValue="Components"></Text>
	<Container>
		<Text textType={"h2"} textValue="Typography"></Text>
		<Text textType={"h1"} textValue="H1"></Text>
		<Text textType={"h2"} textValue="H2"></Text>
		<Text textType={"h3"} textValue="H3"></Text>
		<Text textType={"h4"} textValue="H4"></Text>
		<Text textType={"h5"} textValue="H5"></Text>
		<Text textType={"h6"} textValue="H6"></Text>
		<Text textType={"h6"} textValue="P"></Text>
	</Container>
	<Container class="">
		<Text textType={"h2"} textValue="Containers"></Text>
		<Container class="">Test Div</Container>
		<Container class="">Test Aside</Container>
		<Container class="">Test Section</Container>

		<Container class="">Test Container</Container>
	</Container>

	<Table class="" tableHeaders={testTableData.headers} tableData={testTableData.data}></Table>
</Container>
