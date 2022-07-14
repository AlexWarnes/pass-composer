<script lang="ts">
	import { passLayers } from '$lib/data/stores';
	import { Panel } from 'photon-tools';
	import DotScreenForm from './forms/DotScreenForm.svelte';
	import GlitchForm from './forms/GlitchForm.svelte';
	import FilmForm from './forms/FilmForm.svelte';
	import UnrealBloomForm from './forms/UnrealBloomForm.svelte';
	import SAOForm from './forms/SAOForm.svelte';
	import AddPassButton from './AddPassButton.svelte';
import AfterimageForm from './forms/AfterimageForm.svelte';
	function syncPassLayers() {
		$passLayers = $passLayers;
	}
</script>

<div class="ctrl-wrapper space-between">
	<AddPassButton />
</div>
<div class="layers-wrapper">
	{#each $passLayers as layer (layer.id)}
		<Panel style="margin: 1rem auto;">
			{#if layer.name === 'DotScreen'}
				<DotScreenForm {layer} on:input={syncPassLayers} on:change={syncPassLayers}/>
			{:else if layer.name === 'Glitch'}
				<GlitchForm {layer} on:input={syncPassLayers} on:change={syncPassLayers}/>
			{:else if layer.name === 'Film'}
				<FilmForm {layer} on:input={syncPassLayers} on:change={syncPassLayers} />
			{:else if layer.name === 'UnrealBloom'}
				<UnrealBloomForm {layer} on:input={syncPassLayers} on:change={syncPassLayers}/>
			{:else if layer.name === 'SAO'}
				<SAOForm {layer} on:input={syncPassLayers} on:change={syncPassLayers} />
			{:else if layer.name === 'Afterimage'}
				<AfterimageForm {layer} on:input={syncPassLayers} on:change={syncPassLayers} />
			{/if}
		</Panel>
	{:else}
		<h2>Add a pass to get started!</h2>
	{/each}
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
