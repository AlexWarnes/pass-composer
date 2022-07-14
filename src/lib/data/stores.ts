import { writable, type Writable } from "svelte/store";
import type { PassLayer } from "./types";

export const passLayers: Writable<PassLayer[]> = writable([]);
export const photosensitiveApproved: Writable<boolean> = writable(false);