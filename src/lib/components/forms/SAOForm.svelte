<script lang="ts">
	import type { DotScreenLayer, PassLayer, SAOLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput } from 'photon-tools';
	import LayerActions from '../LayerActions.svelte';

	export let layer: SAOLayer;
	let open: boolean = true;
</script>

<Accordion title="SAO" bind:open on:click={() => (open = !open)}>
	<ControlGroup>
		<LayerActions on:change {layer} />
		<label
			>useDepthTexture<input
				type="checkbox"
				bind:checked={layer.props.useDepthTexture}
				on:change
			/></label
		>
		<label
			>useNormals<input type="checkbox" bind:checked={layer.props.useNormals} on:change /></label
		>
		<NumberInput label="ResolutionX" bind:value={layer.props.resolution.x} on:input />
		<NumberInput label="ResolutionY" bind:value={layer.props.resolution.y} on:input />
	</ControlGroup>
</Accordion>
