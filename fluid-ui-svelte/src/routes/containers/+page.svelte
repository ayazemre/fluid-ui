<script lang="ts">
	import { Container, Text } from "$lib/index.js";
</script>

<Container class="flex flex-col gap-4">
	<Text textType={"h2"} textValue="Containers"></Text>
	<Container class="flex gap-2">
		<Container class="bg-success-500 rounded-md"><Text textType={"p"} textValue="Test Div"></Text></Container>
		<Container class="bg-success-500 rounded-md" containerType="aside"><Text textType={"p"} textValue="Test Aside"></Text></Container>
		<Container class="bg-success-500 rounded-md" containerType="section"><Text textType={"p"} textValue="Test Section"></Text></Container>
		<Container class="bg-success-500 rounded-md" containerType="nav"><Text textType={"p"} textValue="Test Nav"></Text></Container>
		<Container class="bg-success-500 rounded-md" containerType="footer"><Text textType={"p"} textValue="Test Footer"></Text></Container>
	</Container>
</Container>
