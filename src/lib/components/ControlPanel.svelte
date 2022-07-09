<script lang="ts">
	import { passLayers } from '$lib/data/stores';
	import { addPassLayer } from '$lib/data/passManager';
	import { Panel } from 'photon-tools';
	import DotScreenForm from './forms/DotScreenForm.svelte';
	import GlitchForm from './forms/GlitchForm.svelte';
	import FilmForm from './forms/FilmForm.svelte';
	import UnrealBloomForm from './forms/UnrealBloomForm.svelte';
	import SAOForm from './forms/SAOForm.svelte';
	function syncPassLayers() {
		$passLayers = $passLayers;
	}
	// $: console.log($passLayers)
</script>

<div class="ctrl-wrapper space-between">
	<button on:click={() => addPassLayer('DotScreen')}>Dot</button>
	<button on:click={() => addPassLayer('Glitch')}>Glitch</button>
	<button on:click={() => addPassLayer('Film')}>Film</button>
	<button on:click={() => addPassLayer('UnrealBloom')}>UnrealBloom</button>
	<button on:click={() => addPassLayer('SAO')}>SAO</button>
</div>
<div class="layers-wrapper">
	<Panel>
		Pass List...
		{#each $passLayers as layer (layer.id)}
			{#if layer.name === 'DotScreen'}
				<DotScreenForm {layer} on:input={syncPassLayers} />
			{:else if layer.name === 'Glitch'}
				<GlitchForm {layer} on:input={syncPassLayers} />
			{:else if layer.name === 'Film'}
				<FilmForm {layer} on:input={syncPassLayers} on:change={syncPassLayers} />
			{:else if layer.name === 'UnrealBloom'}
				<UnrealBloomForm {layer} on:input={syncPassLayers} />
			{:else if layer.name === 'SAO'}
				<SAOForm {layer} on:input={syncPassLayers} on:change={syncPassLayers} />
			{/if}
		{/each}
	</Panel>
	<!-- 	
	{#each $layers as layer (layer.uuid)}
		<div class="ctrl-wrapper">
			{#if layer.name.toLowerCase() === 'depth'}
				<DepthForm {layer} />
			{:else if layer.name.toLowerCase() === 'fresnel'}
				<FresnelForm {layer} />
			{:else if layer.name.toLowerCase() === 'noise'}
				<NoiseForm {layer} />
			{:else if layer.name.toLowerCase() === 'displace'}
				<DisplaceForm {layer} />
			{:else if layer.name.toLowerCase() === 'gradient'}
				<GradientForm {layer} />
			{:else if layer.name.toLowerCase() === 'color'}
				<ColorForm {layer} />
			{/if}
		</div>
	{/each} -->
</div>

<style>
	.ctrl-wrapper {
		margin: 1rem 0 0;
	}

	.layers-wrapper {
		max-height: calc(100% - 4rem);
		overflow: auto;
		padding: 0 0.25rem 0 0;
	}

	.space-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.25rem 0 0;
	}
</style>
