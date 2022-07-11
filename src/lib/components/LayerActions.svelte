<script lang="ts">
import { deletePassLayer } from '$lib/data/passManager';

	import type { PassLayer } from '$lib/data/types';
	import { Trash, VisibilityCheckbox } from 'photon-tools';

	export let layer: PassLayer;
</script>

<div class="actions-row">
  <!-- TODO: Move up/down buttons? -->
  <VisibilityCheckbox on:change bind:visible={layer.visible}/>
  <span class="flex-spacer"></span>
	<button class="delete" title="Delete {layer.name} Pass" on:click={() => deletePassLayer(layer.id)}>
		<Trash />
	</button>
</div>

<style>
  .actions-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

	button.delete {
    width: 2rem;
    height: 2rem;
		border: 1px solid transparent;
    color: red;
		background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
		transition: all 200ms ease;
	}

	button.delete:hover {
		border: 1px solid red;
    cursor: pointer;
	}
</style>
