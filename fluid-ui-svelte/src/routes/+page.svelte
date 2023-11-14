<script lang="ts">
	import '../app.css';
	import {
		Button,
		Container,
		Text,
		Audio,
		Form,
		Image,
		ColorInput,
		DateTimeInput,
		Select,
		FileInput,
		TextInput,
		PasswordInput,
		ToggleInput,
		Label,
		Link,
		Option,
		Table,
		Video,
		Avatar,
		AccordionWrapper,
		AccordionHeader,
		AccordionContent,
		ModalContainer
	} from '$lib/index.js';
	let isOpen = false;
</script>

<Button />

<Container containerClass="w-full bg-yellow" overrideClass={true}>
	<ColorInput />
	<TextInput />
	<PasswordInput />
	<ToggleInput />
</Container>
