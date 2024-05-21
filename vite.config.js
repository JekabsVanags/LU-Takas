import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

function addPrefixToHref() {
	return {
		name: 'add-prefix-to-href',
		enforce: 'post',
		generateBundle(options, bundle) {
			for (const [fileName, asset] of Object.entries(bundle)) {
				if (fileName.endsWith('.html') && asset.type === 'asset') {
					const html = asset.source.toString();
					const modifiedHtml = html.replace(/href="\.\//g, 'href="/LU-Takas/');
					bundle[fileName].source = modifiedHtml;
				}
			}
		}
	};
}


export default defineConfig({
	// @ts-ignore
	plugins: [sveltekit(), addPrefixToHref()]
});

