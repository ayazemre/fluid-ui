<script lang="ts">
	import { type HTMLDialogAttributes } from 'svelte/elements';
	const {
		class: className,
		...restProps
	}: {
		class?: string;
		[key: string]: any;
	} & HTMLDialogAttributes = $props();
</script>

<dialog class={'fluid-dialog' + (className ? ` ${className}` : '')} {...restProps}></dialog>
