import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				return
			}
		},
		adapter: adapter({
			base: "Lu-Takas",
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		})
	}
}