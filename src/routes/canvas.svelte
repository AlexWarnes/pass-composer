<script>
	import Scene from '$lib/components/Scene.svelte';
	import ControlPanel from '$lib/components/ControlPanel.svelte';
	import CodeViewer from '$lib/components/CodeViewer.svelte';
</script>

<div class="view-wrapper">
	<div class="canvas-wrapper">
		<Scene />
	</div>
	<div class="controls-wrapper">
		<ControlPanel />
	</div>
	<CodeViewer />
</div>

<style>
	.view-wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		background: #000000;
	}
	.canvas-wrapper {
		position: relative;
		flex-grow: 1;
		height: 100%;
	}

	.controls-wrapper {
		padding: 0 1rem 1rem;
		height: calc(100% - var(--top-nav-height));
		width: 25rem;
		max-width: 33%;
		background: var(--canvas-overlay);
		color: #fafbfc;
	}
</style>
