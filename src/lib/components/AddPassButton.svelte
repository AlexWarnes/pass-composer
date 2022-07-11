<script lang="ts">
	import type { PassType } from '$lib/data/types';
	import { addPassLayer } from '$lib/data/passManager';

	import { Menu, MenuItem } from 'photon-tools';

	let open = false;
	const layerOptions: PassType[] = ['DotScreen', 'Glitch', 'Film', 'UnrealBloom', 'SAO'];
</script>

<button class="new-layer-btn" on:click={() => (open = !open)} aria-haspopup="menu">
	<span class="btn-label">+ Add Pass</span>
	<Menu bind:open position="LEFT">
		{#each layerOptions as layer (layer)}
			<MenuItem
				on:click={() => {
					addPassLayer(layer);
					open = false;
				}}>{layer}</MenuItem
			>
		{/each}
	</Menu>
</button>

<style>
	.new-layer-btn {
		position: relative;
		/* top: 1rem;
		right: 20rem; */
		border: none;
		background-color: var(--accent);
		color: #fafbfc;
		pointer-events: all;
		border: 3px solid transparent;
		border-radius: 4px;
		transition: all 0.2s ease;
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
