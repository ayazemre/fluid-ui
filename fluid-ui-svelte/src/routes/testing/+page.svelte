<script lang="ts">
	import { Container, Button } from "$lib/index.js";
	let state = $state({ isVisible: false });
</script>

<Container>
	<Button
		onclick={() => {
			state.isVisible = !state.isVisible;
		}}>Run test</Button
	>
</Container>
