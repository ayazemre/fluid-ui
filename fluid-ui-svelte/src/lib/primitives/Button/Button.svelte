<script lang="ts">
	type FluidButtonProps = {
		styles: string;
		button_type: 'submit' | 'button' | 'reset';
		is_disabled: boolean;
	};
	let {
		styles = 'fluid_button',
		button_type = 'button',
		is_disabled = false,
		...rest_props
	} = $props<FluidButtonProps>();
</script>

<button type={button_type} class={styles} disabled={is_disabled} {...rest_props}>
	<slot />
</button>
