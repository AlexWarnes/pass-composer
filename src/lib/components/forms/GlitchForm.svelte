<script lang="ts">
	import type { GlitchLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: GlitchLayer;
	let open: boolean = true;
</script>

<Accordion title="Glitch" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<NumberInput label="dt_size" bind:value={layer.props.dt_size} on:input />
	</ControlGroup>
</Accordion>
