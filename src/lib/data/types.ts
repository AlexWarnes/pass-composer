import type { Camera, Vector2 } from 'three';

export type PassType = 'Glitch' | 'DotScreen' | 'Film' | 'UnrealBloom' | 'SAO';
export type PassConfig = GlitchProps | DotScreenProps | FilmProps | UnrealBloomProps;
export type PassLayer = GlitchLayer | DotScreenLayer | FilmLayer | UnrealBloomLayer;


export interface PassLayerMetadata {
	name: string;
	id: string;
	requiresContext: boolean; // if true, r/s/c = useThrelte
	// props: GlitchProps | DotScreenProps | FilmProps | UnrealBloomProps;
}
export interface GlitchProps {
	dt_size: number; // 64
}
export interface GlitchLayer extends PassLayerMetadata {
	props: GlitchProps | any;
}

export interface DotScreenProps {
	center: Vector2 | undefined; // ?
	angle: number | undefined; // default? rad? Deg?
	scale: number | undefined; // ?
}

export interface DotScreenLayer extends PassLayerMetadata {
	props: DotScreenProps | any;
}

export interface FilmProps {
	noiseIntensity: number | undefined; // //0.5,
	scanlinesIntensity: number | undefined; // // 0.1
	scanlinesCount: number | undefined; // // 250
	grayscale: boolean; // true
}
export interface FilmLayer extends PassLayerMetadata {
	props: FilmProps | any;
}
export interface UnrealBloomProps {
	resolution: Vector2; // new Vector2(256, 256),
	strength: number; // 1,
	radius: number | undefined; // ?
	threshold: number | undefined; // ?
}
export interface UnrealBloomLayer extends PassLayerMetadata {
	props: UnrealBloomProps | any;
}

export interface SAOProps {
	scene?: any;
	camera?: Camera;
	useDepthTexture: boolean; // false
	useNormals: boolean; // false
  resolution: Vector2; // new Vector2(256, 256)
}
export interface SAOLayer extends PassLayerMetadata {
	props: SAOProps | any;
}