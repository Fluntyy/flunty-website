import { writable } from 'svelte/store';

export const fade = writable(0);
export const opacity = writable(1);
export const socials = writable([]);
export const projectsStore = writable({ isLoading: true, projects: [] });
export const socialsStore = writable({ isLoading: true, socials: [] });