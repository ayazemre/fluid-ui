<script lang="ts">
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-file-input';
	export let overrideClass: boolean = false;
</script>

<input type="file" class={overrideClass ? inputClass : defaultClass + ' ' + inputClass} />
