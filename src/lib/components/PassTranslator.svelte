<script lang="ts">
	// 	import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass';
	import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
	// 	import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
	// 	import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass';
	import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
	import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
	// 	import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass'
	// 	import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass'
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
	import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass';
	import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';
	import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';

	// 	import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass'
	// 	import { MaskPass } from 'three/examples/jsm/postprocessing/MaskPass'
	// 	import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass'

	import { passLayers } from '$lib/data/stores';
	import { Pass, useThrelte } from '@threlte/core';
	import type { PassLayer } from '$lib/data/types';

	const { renderer, scene, camera } = useThrelte();
	let passInstances: any[] = [];
	$: passInstances = $passLayers.map((p: PassLayer) => {
		console.log('running pass layer instance map...');
		switch (p.name) {
			case 'DotScreen':
				return {
					instance: new DotScreenPass(p.props.center, p.props.angle, p.props.scale),
					...p,
					id: p.id + String(Date.now())
				};
			case 'Glitch':
				return {
					instance: new GlitchPass(p.props.dt_size),
					...p,
					id: p.id + String(Date.now())
				};
			case 'Film':
				return {
					instance: new FilmPass(
						p.props.noiseIntensity,
						p.props.scanlinesIntensity,
						p.props.scanlinesCount,
						p.props.grayscale
					),
					...p,
					id: p.id + String(Date.now())
				};
			case 'UnrealBloom':
				return {
					instance: new UnrealBloomPass(
						p.props.resolution,
						p.props.strength,
						p.props.radius,
						p.props.threshold
					),
					...p,
					id: p.id + String(Date.now())
				};
			case 'SAO':
				return {
					instance: new SAOPass(
						scene,
						$camera,
						p.props.useDepthTexture,
						p.props.useNormals,
						p.props.resolution
					),
					...p,
					id: p.id + String(Date.now())
				};
			case 'Afterimage':
				return {
					instance: new AfterimagePass(p.props.damp),
					...p,
					id: p.id + String(Date.now())
				};
			case 'RenderPixelated':
				return {
					instance: new RenderPixelatedPass(p.props.pixelSize, scene, $camera),
					...p,
					id: p.id + String(Date.now())
				};
			default:
				console.error('Unrecognized Pass Layer:', p);
		}
	});

	// $: console.log('new instances:', passInstances);
</script>

{#each passInstances as layer (layer.id)}
	{#if layer.visible}
		<Pass pass={layer.instance} />
	{/if}
{/each}
