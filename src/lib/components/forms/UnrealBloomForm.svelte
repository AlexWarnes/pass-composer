<script lang="ts">
	import type { UnrealBloomLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput, RangeSlider } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: UnrealBloomLayer;
	let open: boolean = true;
</script>

<Accordion title="UnrealBloom" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<NumberInput label="strength" step={0.1} bind:value={layer.props.strength} on:input />
		<NumberInput label="radius" step={0.25} bind:value={layer.props.radius} on:input />
		<RangeSlider
			label="threshold: {layer.props.threshold.toFixed(2)}"
			type="FLOAT"
			bind:value={layer.props.threshold}
			on:input
		/>
		<NumberInput label="ResolutionX" bind:value={layer.props.resolution.x} on:input />
		<NumberInput label="ResolutionY" bind:value={layer.props.resolution.y} on:input />
	</ControlGroup>
</Accordion>
