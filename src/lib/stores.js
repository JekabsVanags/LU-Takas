import { writable } from 'svelte/store';


//Selected menu setting
export const section = writable(0);

export function setSelection(s) {
  section.update((n) => s);
}


//Dark mode setting
export const darkMode = writable(false);

export function toggleDarkMode() {
  darkMode.update((n) => !n);
}
