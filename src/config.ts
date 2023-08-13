// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "matteorenoldi.com";
export const SITE_DESCRIPTION = "My personal website";
export const MY_NAME = "Matteo Renoldi";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
