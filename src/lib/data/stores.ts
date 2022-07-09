import { writable, type Writable } from "svelte/store";
import type { PassConfig, PassLayer } from "./types";

export const passLayers: Writable<PassLayer[]> = writable([]);
