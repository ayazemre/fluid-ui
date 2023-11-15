<script lang="ts">
	type FluidTextFieldProps = {
		styles: string;
		value: string;
		type: 'text' | 'password' | 'email' | 'number' | 'search' | 'url';
	};
	let { styles = 'fluid_text_field', value, type, ...rest_props } = $props<FluidTextFieldProps>();
</script>

{#if type == 'text'}
	<input bind:value type="text" class={styles} {...rest_props} />
{:else if type == 'password'}
	<input bind:value type="password" class={styles} {...rest_props} />
{:else if type == 'email'}
	<input bind:value type="email" class={styles} {...rest_props} />
{:else if type == 'number'}
	<input bind:value type="number" class={styles} {...rest_props} />
{:else if type == 'search'}
	<input bind:value type="search" class={styles} {...rest_props} />
{:else if type == 'url'}
	<input bind:value type="url" class={styles} {...rest_props} />
{:else}
	<p>Text field type error</p>
{/if}
