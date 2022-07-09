import { Vector2 } from 'three';
import { generateUUID } from 'three/src/math/MathUtils';
import { passLayers } from './stores';
import type {
	DotScreenProps,
	FilmProps,
	GlitchProps,
	PassLayer,
	PassType,
	SAOProps,
	UnrealBloomProps
} from './types';

const newDotScreen = (): DotScreenProps => {
	return {
		center: new Vector2(0, 0),
		angle: undefined,
		scale: 10
	};
};
const newGlitch = (): GlitchProps => {
	return {
		dt_size: 64
	};
};
const newFilm = (): FilmProps => {
	return {
		noiseIntensity: 0.5,
		scanlinesIntensity: 0.1,
		scanlinesCount: 250,
		grayscale: true
	};
};
const newUnrealBloom = (): UnrealBloomProps => {
	return {
		resolution: new Vector2(256, 256),
		strength: 0.5,
		radius: 0.5,
		threshold: 0.75
	};
};
const newSAO = (): SAOProps => {
	return {
		useDepthTexture: false,
		useNormals: false,
		resolution: new Vector2(256, 256)
	};
};

export function newDefaultPass(type: PassType): PassLayer {
	const initialConfig = {
		id: generateUUID(),
		name: type
	};
	const id = generateUUID();
	const name = type;

	switch (type) {
		case 'DotScreen':
			return {
				...initialConfig,
				requiresContext: false,
				props: newDotScreen()
			};
		// case "Film":
		//   return newFilm();
		case 'Glitch':
			return {
				...initialConfig,
				requiresContext: false,
				props: newGlitch()
			};
		case 'Film':
			return {
				...initialConfig,
				requiresContext: false,
				props: newFilm()
			};
		case 'UnrealBloom':
			return {
				...initialConfig,
				requiresContext: false,
				props: newUnrealBloom()
			};
		case 'SAO':
			return {
				...initialConfig,
				requiresContext: true,
				props: newSAO()
			};
		default:
			const message: string = 'Unrecognized pass type';
			console.error(message + ':', type);
			throw new Error(message);
	}
}

export function addPassLayer(type: PassType): void {
	console.log('add:', type);
	passLayers.update((current) => {
		current.push(newDefaultPass(type));
		return current;
	});
}
