<script lang="ts">
	export let linkClass: string = '';
	export let defaultClass: string = 'fluid-link';
	export let overrideClass: boolean = false;
	export let url: string = '';
	export let target: '_self' | '_blank' | '_parent' | '_top' = '_blank';
	export let isDownload: boolean = false;
</script>

<a
	href={url}
	download={isDownload}
	class={overrideClass ? linkClass : defaultClass + ' ' + linkClass}
	{target}
>
	<slot />
</a>
