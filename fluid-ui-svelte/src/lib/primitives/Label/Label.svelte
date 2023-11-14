<script lang="ts">
	export let labelClass: string = '';
	export let defaultClass: string = 'fluid-label';
	export let overrideClass: boolean = false;
	export let targetInput: string = '';
	export let text: string = '';
</script>

<label class={overrideClass ? labelClass : defaultClass + ' ' + labelClass} for={targetInput}>
	{text}
</label>
