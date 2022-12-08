<script lang="ts">
	import type { RenderPixelatedLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput, } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: RenderPixelatedLayer;
	let open: boolean = true;
</script>

<Accordion title="RenderPixelated" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<NumberInput label="pixelSize" bind:value={layer.props.pixelSize} min={0.25} step={0.25} on:input />
	</ControlGroup>
</Accordion>
