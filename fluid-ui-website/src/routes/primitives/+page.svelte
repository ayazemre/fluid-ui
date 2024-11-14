<script lang="ts">
	import {
		Button,
		Container,
		Text,
		Table,
		TableHead,
		TableHeader,
		TableBody,
		TableData,
		TableFooter,
		TableRow,
		Input,
		Switch,
		Label,
		Image,
	} from 'fluid-ui-svelte';
	import { componentStates } from '../layoutState.svelte';
	import Icon from '@iconify/svelte';
</script>

<Container class="flex flex-col gap-4 p-2">
	<Container class="flex flex-col gap-4">
		<Text textType={'h2'} textValue="Typography"></Text>
		<Container class="flex justify-around items-end gap-2">
			<Text textType={'h1'} textValue="H1 Text"></Text>
			<Text textType={'h2'} textValue="H2 Text"></Text>
			<Text textType={'h3'} textValue="H3 Text"></Text>
			<Text textType={'h4'} textValue="H4 Text"></Text>
			<Text textType={'h5'} textValue="H5 Text"></Text>
			<Text textType={'h6'} textValue="H6 Text"></Text>
			<Text textType={'p'} textValue="P Text"></Text>
		</Container>
	</Container>
	<Container class="flex flex-col gap-4">
		<Text textType={'h2'} textValue="Containers"></Text>
		<Container class="flex gap-2 w-full justify-around">
			<Container
				class="flex justify-center bg-success-500 p-4 rounded-md w-full"
				containerType="div"
				overrideDefaultStyling={true}
			>
				<Text textType={'p'} textValue="Div"></Text>
			</Container>
			<Container
				class="flex justify-center bg-success-500 p-4 rounded-md w-full"
				containerType="aside"
				overrideDefaultStyling={true}
			>
				<Text textType={'p'} textValue="Aside"></Text>
			</Container>
			<Container
				class="flex justify-center bg-success-500 p-4 rounded-md w-full"
				containerType="section"
				overrideDefaultStyling={true}
			>
				<Text textType={'p'} textValue="Section"></Text>
			</Container>
			<Container
				class="flex justify-center bg-success-500 p-4 rounded-md w-full"
				containerType="nav"
				overrideDefaultStyling={true}
			>
				<Text textType={'p'} textValue="Nav"></Text>
			</Container>
			<Container
				class="flex justify-center bg-success-500 p-4 rounded-md w-full"
				containerType="footer"
				overrideDefaultStyling={true}
			>
				<Text textType={'p'} textValue="Footer"></Text>
			</Container>
		</Container>
	</Container>
	<Container class="flex flex-col gap-2">
		<Text textType={'h2'} textValue="Buttons"></Text>
		<Container class="flex gap-2">
			<Container class="flex flex-col gap-2 w-full">
				<Text textType={'h3'} textValue="Solid"></Text>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonStyle="primary"
					>
						<Text textType={'p'} textValue="Primary"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonStyle="secondary"
					>
						<Text textType={'p'} textValue="Secondary"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonStyle="tetriary"
					>
						<Text textType={'p'} textValue="Tetriary"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonStyle="neutral"><Text textType={'p'} textValue="Neutral"></Text></Button
					>
				</Container>
			</Container>
			<Container class="flex flex-col gap-2 w-full">
				<Text textType={'h3'} textValue="Outline"></Text>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="outline"
						buttonStyle="primary"><Text textType={'p'} textValue="Primary Outline"></Text></Button
					>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="outline"
						buttonStyle="secondary"
						><Text textType={'p'} textValue="Secondary Outline"></Text></Button
					>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="outline"
						buttonStyle="tetriary"><Text textType={'p'} textValue="Tetriary Outline"></Text></Button
					>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="outline"
						buttonStyle="neutral"><Text textType={'p'} textValue="Neutral Outline"></Text></Button
					>
				</Container>
			</Container>
			<Container class="flex flex-col gap-2 w-full">
				<Text textType={'h3'} textValue="Transparent"></Text>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="transparent"
						buttonStyle="primary"
						><Text textType={'p'} textValue="Primary Transparent"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="transparent"
						buttonStyle="secondary"
						><Text textType={'p'} textValue="Secondary Transparent"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="transparent"
						buttonStyle="tetriary"
						><Text textType={'p'} textValue="Tetriary Transparent"></Text>
					</Button>
				</Container>
				<Container>
					<Button
						onclick={(e: Event) => {
							console.log(e.target);
						}}
						buttonType="transparent"
						buttonStyle="neutral"
						><Text textType={'p'} textValue="Neutral Transparent"></Text>
					</Button>
				</Container>
			</Container>
		</Container>
	</Container>
	<Container class="flex flex-col gap-4">
		<Text textType={'h2'} textValue="Table"></Text>
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

	<Container class="flex flex-col gap-2">
		<Text textType={'h2'} textValue="Inputs"></Text>
		<Container class="flex justify-center items-center gap-4">
			<Container>
				<Label for="textInput">
					<Text textType={'h4'} class="text-nowrap" textValue="Text Input"></Text>
				</Label>
				<Input
					onkeydown={(e: KeyboardEvent) => {
						console.log(componentStates.textInputData);
					}}
					type="text"
					bind:value={componentStates.textInputData}
					id="textInput"
					class="fluid-text-input"
				></Input>
			</Container>
			<Container>
				<Label for="passwordInput">
					<Text textType={'h4'} class="text-nowrap" textValue="Password Input Label"></Text>
				</Label>
				<Input
					type="password"
					bind:value={componentStates.textInputData}
					id="passwordInput"
					class="fluid-text-input"
				></Input>
			</Container>
			<Container>
				<Label for="numberInput">
					<Text textType={'h4'} class="text-nowrap" textValue="Number Input Label"></Text>
				</Label>
				<Input
					type="number"
					bind:value={componentStates.textInputData}
					id="numberInput"
					class="fluid-text-input"
				></Input>
			</Container>
			<Container>
				<Label for="urlInput">
					<Text textType={'h4'} class="text-nowrap" textValue="URL Input Label"></Text>
				</Label>
				<Input
					type="url"
					bind:value={componentStates.textInputData}
					id="urlInput"
					class="fluid-text-input"
				></Input>
			</Container>
			<Container>
				<Label for="telInput">
					<Text textType={'h4'} class="text-nowrap" textValue="Tel Input Label"></Text>
				</Label>
				<Input
					type="tel"
					bind:value={componentStates.textInputData}
					id="telInput"
					class="fluid-text-input"
				></Input>
			</Container>
		</Container>
		<Container>
			<Text textType={'h2'} textValue="Checkbox"></Text>
			<Container class="flex justify-start items-center gap-4" overrideDefaultStyling={true}>
				<Input type="checkbox"></Input>
				<Container>
					<Switch></Switch>
				</Container>
			</Container>
		</Container>
	</Container>
	<Container class="flex flex-col gap-2">
		<Text textType={'h2'} textValue="Images"></Text>
		<Container class="flex gap-4">
			<Container>
				<Text textType={'p'} textValue="Image Fail"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image src="none" noPlaceholders={true}></Image>
				</Container>
			</Container>
			<Container>
				<Text textType={'p'} textValue="Image Success"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image loading="lazy" src="https://picsum.photos/200" noPlaceholders={true}></Image>
				</Container>
			</Container>
			<Container>
				<Text textType={'p'} textValue="Image Fail with Error Handling Default"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image src="none"></Image>
				</Container>
			</Container>
			<Container>
				<Text textType={'p'} textValue="Image Success with Error Handling Default"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image loading="lazy" src="https://picsum.photos/200"></Image>
				</Container>
			</Container>
			<Container>
				<Text textType={'p'} textValue="Image Fail with Error Handling Custom Error"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image src="none" errorSnippet={imageFailedElement}></Image>
				</Container>
			</Container>
			<Container>
				<Text textType={'p'} textValue="Image Success with Error Handling Custom Loader"></Text>
				<Container class="w-24 h-24 overflow-clip">
					<Image loading="lazy" src="https://picsum.photos/200" loadingSnippet={imageLoadingElement}
					></Image>
				</Container>
			</Container>
		</Container>
	</Container>
</Container>

{#snippet imageLoadingElement()}
	<Icon icon="eos-icons:loading"></Icon>
{/snippet}
{#snippet imageFailedElement()}
	<Icon icon="fluent-mdl2:photo-error"></Icon>
{/snippet}
