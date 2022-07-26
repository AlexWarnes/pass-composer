<script lang="ts">
	import type { AfterimageLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, RangeSlider } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: AfterimageLayer;
	let open: boolean = true;
</script>

<Accordion title="Afterimage" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<RangeSlider
			type="FLOAT"
			label="damp: {layer.props.damp}"
			bind:value={layer.props.damp}
			on:input
			max={0.99}
		/>
	</ControlGroup>
</Accordion>
