import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			base: "Lu-Takas",
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		prerender: {
			// other prerender options...

			async handleHttpError({ error, request, response }) {
				if (error === 404) {
					console.error(`404 Error: ${request.url}`);
					// Handle the 404 error here, e.g., redirect to a custom error page
					// or render a specific error component.
					return {
						html: '<h1>404 Not Found</h1><p>The page you requested could not be found.</p>',
					};
				}

				// For other types of errors, you can handle them differently or return null
				// to let SvelteKit handle them by default.
				return null;
			},
		},
	},
};