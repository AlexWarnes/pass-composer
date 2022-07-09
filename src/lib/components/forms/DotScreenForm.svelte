<script lang="ts">
	import type { DotScreenLayer, PassLayer } from '$lib/data/types';
	import { Accordion, ControlGroup, NumberInput } from 'photon-tools';

	// export let center: number | undefined = undefined;
	// export let angle: number | undefined = undefined;
	// export let scale: number | undefined = undefined;
	export let layer: DotScreenLayer;
	let open: boolean = true;
</script>

<Accordion title="DotScreen" bind:open>
	<ControlGroup>
		<NumberInput label="CenterX" bind:value={layer.props.center.x} on:input />
		<NumberInput label="CenterY" bind:value={layer.props.center.y} on:input />
		<NumberInput label="Angle" bind:value={layer.props.angle} on:input />
		<NumberInput label="Scale" step={0.25} bind:value={layer.props.scale} on:input />
	</ControlGroup>
</Accordion>
