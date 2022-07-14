import { Vector2 } from 'three';
import { generateUUID } from 'three/src/math/MathUtils';
import { passLayers } from './stores';
import type {
	AfterimageProps,
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
		angle: 0,
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
const newAfterimage = (): AfterimageProps => {
	return {
		damp: 0.96,
	};
};

export function newDefaultPass(type: PassType): PassLayer {
	const initialConfig = {
		id: generateUUID(),
		name: type,
		visible: true,
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
		case 'Afterimage':
			return {
				...initialConfig,
				requiresContext: false,
				props: newAfterimage()
			};
		default:
			const message: string = 'Unrecognized pass type';
			console.error(message + ':', type);
			throw new Error(message);
	}
}

export function addPassLayer(type: PassType): void {
	passLayers.update((current) => {
		current.push(newDefaultPass(type));
		return current;
	});
}

export function deletePassLayer(id: string): void {
	passLayers.update((current) => {
		return current.filter(p => p.id !== id);
	})
}