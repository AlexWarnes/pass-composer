<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Chevron, Copy } from 'photon-tools';
	import { passLayers } from '$lib/data/stores';
	import type { PassConfig, PassLayer } from '$lib/data/types';
import type { Vector2 } from 'three';
	let displayCode = false;
	let copyImportStatus: 'IDLE' | 'SUCCESS' = 'IDLE';
	let copyTemplateStatus: 'IDLE' | 'SUCCESS' = 'IDLE';
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

	const vec2String = (vec2: Vector2): string => `new Vector2(${vec2.x}, ${vec2.y})`

	const syncOptions = (everything: boolean): void => {
		if (everything) {
			options.imports = true;
			options.template = true;
		}
	};

	let clickToCopy = (elementID: string): any => null;
	onMount(() => {
		if (window.navigator) {
			clickToCopy = (elementID: string): any => {
				window.navigator.clipboard
					//@ts-ignore
					.writeText(document.getElementById(elementID).innerText)
					// TODO: conditionally grab inner text of pre tags, depending on options
					.then(() => {
						console.log('Copied!');
						if (elementID.includes('imports')) {
							copyImportStatus = 'SUCCESS';
							setTimeout(() => (copyImportStatus = 'IDLE'), 4000);
						}
						if (elementID.includes('template')) {
							copyTemplateStatus = 'SUCCESS';
							setTimeout(() => (copyTemplateStatus = 'IDLE'), 4000);
						}
					})
					.catch((err) => console.log('Error copying code', err));
			};
		}
	});

	let importsString: string = '';
	let contextString: string = '';
	$: {
		let allPasses = $passLayers.map((p) => p.name);
		let uniqueLayers = [...new Set(allPasses)];
		importsString = uniqueLayers
			.map((passName) => {
				switch (passName) {
					case 'DotScreen':
						return `import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';\n`;
					case 'Glitch':
						return `import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';\n`;
					case 'Film':
						return `import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';\n`;
					case 'UnrealBloom':
						return `import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';\n`;
					case 'SAO':
						return `import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass';\n`;
					case 'Afterimage':
						return `import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';\n`;
					default:
						return '';
				}
			})
			.join('');
		}
		$: templateString = $passLayers.map((pass: PassLayer) => {
			switch (pass.name) {
					case 'DotScreen':
						return `<Pass pass={new DotScreenPass(${vec2String(pass.props.center)}, ${pass.props.angle}, ${pass.props.scale})} />\n`;
					case 'Glitch':
						return `<Pass pass={new GlitchPass(${pass.props.dt_size})} />\n`;
					case 'Film':
						return `<Pass pass={new FilmPass(${pass.props.noiseIntensity}, ${pass.props.scanlinesIntensity}, ${pass.props.scanlinesCount}, ${pass.props.grayscale})} />\n`;
					case 'UnrealBloom':
						return `<Pass pass={new UnrealBloomPass(${vec2String(pass.props.resolution)}, ${pass.props.strength}, ${pass.props.radius}, ${pass.props.threshold})} />\n`;
					case 'SAO':
						return `<Pass pass={new SAOPass(scene, $camera, ${pass.props.useDepthTexture}, ${pass.props.useNormals}, ${vec2String(pass.props.resolution)})} />\n`;
					case 'Afterimage':
						return `<Pass pass={new AfterimagePass(${pass.props.damp})} />\n`;
					default:
						return '';
				}
		}).join('')

	$: if ($passLayers.some(p => p.requiresContext)) {
		contextString = `const { renderer, scene, camera } = useThrelte();`;
	} else {
		contextString = '';
	}
	$: threlteImportString = `import { Pass, ${contextString.length ? 'useThrelte, ': ''}} from '@threlte/core';`
	$: threeImportString = $passLayers.some(p => p.props.resolution || p.props.center) ? `import { Vector2 } from 'three';` : '';
	$: syncOptions(options.everything);
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

<!-- IMPORTS CODE -->
<pre id="imports-code-wrapper">
{threeImportString}
{$passLayers.length ? threlteImportString : ''}
{importsString}
{contextString}
</pre>
			<button
				on:click={() => clickToCopy('imports-code-wrapper')}
				class:success={copyImportStatus === 'SUCCESS'}
				class="copy-btn"
			>
				<Copy height="16" />
				<span>{copyImportStatus === 'SUCCESS' ? 'Copied!' : 'Copy Imports'}</span>
			</button>

<!-- TEMPLATE CODE -->
<pre id="template-code-wrapper">
{templateString}
</pre>
			<button
				on:click={() => clickToCopy('template-code-wrapper')}
				class:success={copyTemplateStatus === 'SUCCESS'}
				class="copy-btn"
			>
				<Copy height="16" />
				<span>{copyTemplateStatus === 'SUCCESS' ? 'Copied!' : 'Copy Template'}</span>
			</button>

<!-- TODO: Copy entire scene option? -->

			<div class="header">
				<p class="description">
					JavaScript and threlte template generated for your current set of postprocessing configurations. You can use this as
					in any project made with threlte.
				</p>
				<!-- TODO: add alert to use canvas child component for context-dependent passes -->
				<p class="try-it-text">Try it in:</p>
				<div class="repl-row">
					<ul class="try-it">
						<li>
							<a
								href="https://svelte.dev/repl/4a50ab27ce0243a9a4b8159a6780accd"
								target="_blank"
								rel="noopener noreferrer">Svelte REPL</a
							>
						</li>
						<li>
							<a
								href="https://stackblitz.com/edit/threlte-passcomposer?file=src/lib/PassComposer.svelte"
								target="_blank"
								rel="noopener noreferrer">StackBlitz</a
							>
						</li>
					</ul>
				</div>
			</div>
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

	pre {
		background-color: #16161c;
		max-width: 100%;
		min-width: 100%;
		overflow: auto;
		padding: 0.75rem;
	}

	.header {
		background-color: #676778;
		padding: 1rem;
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

	.copy-btn {
		border: 2px solid transparent;
		margin: 0 0 1rem 0;
		padding: 0.5rem 0.75rem;
		width: 9rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
	}

	.copy-btn > span {
		margin-left: 0.25rem;
	}

	.copy-btn.success {
		border: 2px solid #fafbfc;
		background-color: seagreen;
		color: #fafbfc;
	}

	.icon-wrapper {
		transition: all 0.2s ease;
	}

</style>
