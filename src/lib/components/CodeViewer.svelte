<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Chevron } from 'photon-tools';
	// import {Chevron, Copy} from 'photon-tools';
	let displayCode = false;
	const options = {
		imports: true,
		template: true,
		everything: false
	};
	const handleKeydown = (evt: any) => {
		if (evt && evt.code && evt.code === 'Enter') {
			displayCode = !displayCode;
		}
	};

	const colorString = (c: any) => {
		// @ts-ignore
		return `new THREE.Color("#${c.getHexString()}")`;
	};

	const syncOptions = (everything: boolean): void => {
		if (everything) {
			options.imports = true;
			options.template = true;
		}
	};

	$: syncOptions(options.everything);

	// function stringifyImports({ layers }, opt) {
	// 	let layerImports = layers.map((l) => l.name[0].toUpperCase() + l.name.substring(1));
	// 	let imports = '';
	// 	if (opt.includeThreeImport) {
	// 		imports += '\nimport * as THREE from "three";\n';
	// 	}

	// 	if (opt.includeLaminaImport) {
	// 		imports += `\nimport { \n\tLayerMaterial,\n\t${[...new Set(layerImports)].join(
	// 			',\n\t'
	// 		)}\n} from "lamina/vanilla";`;
	// 	}
	// 	return imports;
	// }

	// 	function stringifyMaterial({ baseLayer, layers }) {
	// 		return `
	// const laminaMaterial = new LayerMaterial({
	//   color: "${baseLayer.color}",
	//   lighting: "${baseLayer.lighting}",
	//   layers: [
	//     ${layers.map((l) => stringifyLayer(l)).join('')}
	//   ]
	// });
	//     `;
	// 	}

	// function stringifyLayer(layer) {
	// 	switch (layer.name.toLowerCase()) {
	// 		case 'depth':
	// 			const depthProps = extractDepthProps(layer);
	// 			// colorA, colorB, alpha, near, far, origin, mapping, mode, visible
	// 			return `new Depth({
	//     colorA: ${colorString(depthProps.colorA)},
	//     colorB: ${colorString(depthProps.colorB)},
	//     alpha: ${depthProps.alpha},
	//     near: ${depthProps.near},
	//     far: ${depthProps.far},
	//     origin: [${Object.values(depthProps.origin)}],
	//     mapping: "${depthProps.mapping}",
	//     mode: "${depthProps.mode}",
	//     visible: ${depthProps.visible},
	//   }),
	//   `;
	// 		case 'fresnel':
	// 			const fresnelProps = extractFresnelProps(layer);
	// 			// color, alpha, power, intensity, bias, mode, visible
	// 			return `new Fresnel({
	//     color: ${colorString(fresnelProps.color)},
	//     alpha: ${fresnelProps.alpha},
	//     power: ${fresnelProps.power},
	//     intensity: ${fresnelProps.intensity},
	//     bias: ${fresnelProps.bias},
	//     mode: "${fresnelProps.mode}",
	//     visible: ${fresnelProps.visible},
	//   }),
	//   `;
	// 		case 'noise':
	// 			const noiseProps = extractNoiseProps(layer);
	// 			// colorA, colorB, colorC, colorD, alpha, scale, type, mapping, mode, visible
	// 			return `new Noise({
	//     colorA: ${colorString(noiseProps.colorA)},
	//     colorB: ${colorString(noiseProps.colorB)},
	//     colorC: ${colorString(noiseProps.colorC)},
	//     colorD: ${colorString(noiseProps.colorD)},
	//     alpha: ${noiseProps.alpha},
	//     scale: ${noiseProps.scale},
	//     type: "${noiseProps.type}",
	//     offset: [${Object.values(noiseProps.offset)}],
	//     mapping: "${noiseProps.mapping}",
	//     mode: "${noiseProps.mode}",
	//     visible: ${noiseProps.visible},
	//   }),
	//   `;
	// 		case 'displace':
	// 			const displaceProps = extractDisplaceProps(layer);
	// 			// strength, scale, type, mapping, mode, visible
	// 			return `new Displace({
	//     strength: ${displaceProps.strength},
	//     scale: ${displaceProps.scale},
	//     type: "${displaceProps.type}",
	//     offset: [${Object.values(displaceProps.offset)}],
	//     mode: "${displaceProps.mode}",
	//     visible: ${displaceProps.visible},
	//   }),
	//   `;
	// 		case 'gradient':
	// 			const gradientProps = extractGradientProps(layer);
	// 			// colorA, colorB, alpha, contrast, start, end, axes, mapping, visible
	// 			return `new Gradient({
	//     colorA: ${colorString(gradientProps.colorA)},
	//     colorB: ${colorString(gradientProps.colorB)},
	//     alpha: ${gradientProps.alpha},
	//     contrast: ${gradientProps.contrast},
	//     start: ${gradientProps.start},
	//     end: "${gradientProps.end}",
	//     axes: "${gradientProps.axes}",
	//     mapping: "${gradientProps.mapping}",
	//     visible: ${gradientProps.visible},
	//   }),
	//   `;
	// 		case 'color':
	// 			const colorProps = extractColorProps(layer);
	// 			// color, alpha, mode, visible
	// 			return `new Color({
	//     color: ${colorString(colorProps.color)},
	//     alpha: ${colorProps.alpha},
	//     mode: "${colorProps.mode}",
	//     visible: ${colorProps.visible},
	//   }),
	//   `;
	// 		default:
	// 			console.error('Unrecognized layer name:', layer.name);
	// 			return '';
	// 	}
	// }
	let clickToCopy = (): any => null;
	let copyStatus = 'IDLE';
	onMount(() => {
		if (window.navigator) {
			clickToCopy = () => {
				window.navigator.clipboard
					//@ts-ignore
					.writeText(document.getElementById('code-wrapper').innerText)
					// TODO: conditionally grab inner text of pre tags, depending on options
					.then(() => {
						console.log('Copied!');
						copyStatus = 'SUCCESS';
						setTimeout(() => (copyStatus = 'IDLE'), 4000);
					})
					.catch((err) => console.log('Error copying code', err));
			};
		}
	});
</script>

<div class="code-container">
	<div
		role="button"
		aria-haspopup="menu"
		class="control-bar"
		on:click={() => (displayCode = !displayCode)}
		tabindex="0"
		on:keydown={handleKeydown}
	>
		<p>Code Viewer</p>
		<span class="icon-wrapper">
			<Chevron direction={displayCode ? 'DOWN' : 'RIGHT'} />
		</span>
	</div>
	{#if displayCode}
		<div class="code-display" transition:slide>
<pre id="imports-code-wrapper">
IMPORTS
</pre>
<pre id="template-code-wrapper">
// TEMPLATE
{`<Pass />`}
</pre>

			<div class="options">
				<label>
					Imports
					<input type="checkbox" bind:checked={options.imports} disabled={options.everything} />
				</label>
				<label>
					Template
					<input type="checkbox" bind:checked={options.template} disabled={options.everything} />
				</label>
				<label>
					Entire threlte Scene
					<input type="checkbox" bind:checked={options.everything} />
				</label>
			</div>
			<button on:click={clickToCopy} class:success={copyStatus === 'SUCCESS'} class="copy-btn">
				<!-- <Copy height="16" /> -->
				{copyStatus === 'SUCCESS' ? 'Copied!' : 'Copy'}
			</button>
		</div>
	{/if}
</div>

<style>
	.code-container {
		position: fixed;
		left: 0;
		max-width: 600px;
		width: 33%;
		max-height: calc(100% - var(--top-nav-height));
		overflow: hidden;
		display: flex;
		flex-direction: column;
		color: #fafbfc;
	}

	.control-bar {
		min-width: 12rem;
		width: 45%;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--canvas-overlay);
		border-bottom: 2px solid var(--accent);
		cursor: pointer;
	}
	.control-bar > p {
		text-align: center;
		flex-grow: 1;
		margin: 0;
	}

	.header {
		background-color: #676778;
		padding: 1rem;
	}
	.title-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.header h3 {
		margin: 0 0 0 1rem;
	}

	.try-it-text {
		margin: 0 0 0.5rem;
	}

	ul.try-it {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul.try-it li {
		margin: 0.5rem 0;
	}

	.repl-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	a {
		color: #c5eeff;
	}
	a:visited {
		color: #fcdfff;
	}

	.code-display {
		width: 100%;
		max-height: calc(100% - var(--top-nav-height));
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: var(--canvas-overlay);
		font-size: 14px;
		font-family: 'Fira Mono', monospace;
		padding: 1rem;
	}

	#code-wrapper {
		width: 100%;
		background-color: #16161c;
		/* height: 50%; */
		overflow: auto;
		padding: 0.25rem;
		tab-size: 2;
		margin-top: 0;
	}

	.copy-btn {
		border: 2px solid transparent;
		border: 2px solid transparent;
		padding: 0.5rem 0.75rem;
		width: 5.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.copy-btn.success {
		border: 2px solid var(--accent);
	}

	.icon-wrapper {
		transition: all 0.2s ease;
	}
	.icon-wrapper.open {
		transform: rotate(90deg);
	}

	.options {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		margin: 0.75rem 0 0.25rem;
	}
	.options label {
		font-size: 0.75rem;
	}
</style>
