<script lang="ts">
	import type { DotScreenLayer, FilmLayer, PassLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput, RangeSlider } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: FilmLayer;
	let open: boolean = true;
</script>

<Accordion title="Film" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<RangeSlider
			type="FLOAT"
			label="noiseIntensity: {layer.props.noiseIntensity}"
			bind:value={layer.props.noiseIntensity}
			on:input
		/>
		<RangeSlider
			type="FLOAT"
			label="scanlinesIntensity: {layer.props.scanlinesIntensity}"
			bind:value={layer.props.scanlinesIntensity}
			on:input
		/>
		<NumberInput label="scanlinesCount" bind:value={layer.props.scanlinesCount} on:input />
		<label
			>Grayscale
			<input type="checkbox" bind:checked={layer.props.grayscale} on:change />
		</label>
	</ControlGroup>
</Accordion>
