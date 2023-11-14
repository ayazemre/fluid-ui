<script lang="ts">
	import Image from '../../primitives/Image/Image.svelte';
	export let avatarClass: string = '';
	export let defaultClass: string = 'fluid-avatar';
	export let overrideClass: boolean = false;
	export let avatarUrl: string;
</script>

<Image
	imageSource={avatarUrl}
	overrideClass={true}
	imageClass={overrideClass ? avatarClass : defaultClass + ' ' + avatarClass}
/>
