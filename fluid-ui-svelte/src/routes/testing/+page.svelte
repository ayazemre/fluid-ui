<script lang="ts">
	import { Container, Button, NotificationArea, Text } from "$lib/index.js";
	import { fade } from "svelte/transition";
	let state = $state({ isVisible: false, notifications: [] as Array<any> });
	let i = 0;
</script>

<Container>
	<Button
		onclick={() => {
			state.notifications.push({ number: i, isVisible: true });
			i++;
		}}>Run test</Button
	>
	<Button
		onclick={() => {
			state.notifications.splice(3, 1);
		}}>Run test</Button
	>
</Container>

<NotificationArea class="">
	{#each state.notifications as notification}
		<div transition:fade={{ duration: 4000 }} class="transition-all duration-1000">
			<Text textValue={"Test" + notification.number}></Text>
		</div>
	{/each}
</NotificationArea>
