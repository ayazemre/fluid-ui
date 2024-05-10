<script lang="ts">
	import '../app.css';
	import Button from '$lib/primitives/Button.svelte';
	import Audio from '$lib/primitives/Audio.svelte';
	import Dialog from '$lib/primitives/Dialog.svelte';
	import Container from '$lib/primitives/Container.svelte';
	import Text from '$lib/primitives/Text.svelte';
</script>

<Audio
	src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav"
></Audio>
<Button
	onclick={(e) => {
		console.log('test');
	}}>Test Button</Button
>
<Container><Text data={'dfasdf'} /></Container>
