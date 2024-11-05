<script lang="ts">
	import { Button, Container, Text } from "$lib/index.js";
</script>

<Container>
	<Text textType={"h2"} textValue="Buttons"></Text>
	<Container class="flex gap-2">
		<Container class="w-full">
			<Text textType={"h3"} textValue="Solid"></Text>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonStyle="primary"
				>
					<Text textType={"p"} textValue="Primary"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonStyle="secondary"
				>
					<Text textType={"p"} textValue="Secondary"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonStyle="tetriary"
				>
					<Text textType={"p"} textValue="Tetriary"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonStyle="neutral"><Text textType={"p"} textValue="Neutral"></Text></Button
				>
			</Container>
		</Container>
		<Container class="w-full">
			<Text textType={"h3"} textValue="Outline"></Text>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="outline"
					buttonStyle="primary"><Text textType={"p"} textValue="Primary Outline"></Text></Button
				>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="outline"
					buttonStyle="secondary"><Text textType={"p"} textValue="Secondary Outline"></Text></Button
				>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="outline"
					buttonStyle="tetriary"><Text textType={"p"} textValue="Tetriary Outline"></Text></Button
				>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="outline"
					buttonStyle="neutral"><Text textType={"p"} textValue="Neutral Outline"></Text></Button
				>
			</Container>
		</Container>
		<Container class="w-full">
			<Text textType={"h3"} textValue="Transparent"></Text>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="transparent"
					buttonStyle="primary"
					><Text textType={"p"} textValue="Primary Transparent"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="transparent"
					buttonStyle="secondary"
					><Text textType={"p"} textValue="Secondary Transparent"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="transparent"
					buttonStyle="tetriary"
					><Text textType={"p"} textValue="Tetriary Transparent"></Text>
				</Button>
			</Container>
			<Container>
				<Button
					onclick={(e: Event) => {
						console.log(e.target);
					}}
					buttonType="transparent"
					buttonStyle="neutral"
					><Text textType={"p"} textValue="Neutral Transparent"></Text>
				</Button>
			</Container>
		</Container>
	</Container>
</Container>
