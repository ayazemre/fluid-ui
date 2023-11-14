<script lang="ts">
	export let formClass: string = '';
	export let defaultClass: string = 'fluid-form';
	export let overrideClass: boolean = false;
	export let formMethod: 'post' | 'get' | 'dialog' = 'get';
	export let formAction: string = '';
</script>

<form
	action={formAction}
	method={formMethod}
	class={overrideClass ? formClass : defaultClass + ' ' + formClass}
	{...$$restProps}
/>
