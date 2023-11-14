<script lang="ts">
	export let imageClass: string = '';
	export let defaultClass: string = 'fluid-image';
	export let overrideClass: boolean = false;
	export let imageSource: string = '';
	export let altText: string = '';
</script>

<img
	src={imageSource}
	alt={altText}
	class={overrideClass ? imageClass : defaultClass + ' ' + imageClass}
	{...$$restProps}
/>
