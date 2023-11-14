<script lang="ts">
	export let defaultClass: string = 'fluid-toggle';
	export let isChecked = false;
</script>

<label class="relative inline-flex items-center cursor-pointer">
	<input type="checkbox" bind:value={isChecked} class="sr-only peer" />
	<div
		class={defaultClass +
			' ' +
			"peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:bg-green"}
	/>
</label>
