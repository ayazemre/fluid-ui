<script lang="ts">
	import Label from "../primitives/Label.svelte";
	import Input from "../primitives/Input.svelte";
	import Button from "../primitives/Button.svelte";
	import Container from "$lib/primitives/Container.svelte";

	let {
		class: className,
		checked = $bindable(false),
		overrideDefaultStyling = false,
	}: {
		class?: string;
		checked?: boolean;
		overrideDefaultStyling?: boolean;
	} = $props();
</script>

<Button
	onclick={() => {
		checked = !checked;
	}}
	overrideDefaultStyling={true}
	class="w-full h-full cursor-pointer"
>
	<Container
		overrideDefaultStyling={true}
		class={(overrideDefaultStyling ? "" : "fluid-switch" + (checked ? " fluid-switch-checked" : "")) + (className ? (overrideDefaultStyling ? `${className}` : ` ${className}`) : "")}
	>
		<Input bind:checked type="checkbox" class="sr-only peer"></Input>
		<div class="fluid-switch-slider"></div>
	</Container>
</Button>
