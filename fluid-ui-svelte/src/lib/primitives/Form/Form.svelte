<script lang="ts">
	type FluidFormProps = {
		styles: string;
	};
	let { styles = 'fluid_form', ...rest_props } = $props<FluidFormProps>();
</script>

<form class={styles} {...rest_props} />
