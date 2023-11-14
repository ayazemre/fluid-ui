<script lang="ts">
	export let selectClass: string = '';
	export let defaultClass: string = 'fluid-select';
	export let overrideClass: boolean = false;
	export let isDisabled: boolean = false;
	export let isMultiple: boolean = false;
</script>

<select
	class={overrideClass ? selectClass : defaultClass + ' ' + selectClass}
	disabled={isDisabled}
	multiple={isMultiple}
>
	<slot />
</select>
