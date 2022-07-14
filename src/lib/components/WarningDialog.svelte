<script lang="ts">
	import { addPassLayer } from '$lib/data/passManager';

	import { photosensitiveApproved } from '$lib/data/stores';
	import type { PassType } from '$lib/data/types';
	import { Dialog } from 'svelte-aria-dialog';

	export let open = false;
	export let layerType: PassType;

	function handleApprove() {
		$photosensitiveApproved = true;
		addPassLayer(layerType);
		open = false;
	}

	function handleDeny() {
		$photosensitiveApproved = false;
		open = false;
	}
</script>

<Dialog bind:open closable={false}>
	<div class="dialog-box">
		<h2 class="title">WARNING</h2>
		<p class="description">
			The postprocessing effect <strong>"{layerType}"</strong> could trigger seizures for people with photosensitive epilepsy.
		</p>
		<div class="buttons">
			<button on:click={handleDeny} class="deny">Go Back</button>
			<button on:click={handleApprove} class="approve">Continue</button>
		</div>
	</div>
</Dialog>

<style>
	.dialog-box {
		width: 100%;
		max-height: 75vh;
		height: 100%;
		padding: 0 0.875rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	div.buttons {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button.approve {
		background-color: var(--accent);
		color: #fafbfc;
		pointer-events: all;
		border: 3px solid transparent;
		border-radius: 4px;
		transition: all 0.2s ease;
		padding: 0.5rem;
		cursor: pointer;
	}

	button.deny {
		background-color: #fafbfc;
		color: var(--threejs-black);
		pointer-events: all;
		border: 3px solid transparent;
		border-radius: 4px;
		transition: all 0.2s ease;
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
