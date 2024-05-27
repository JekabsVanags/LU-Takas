<script>
  import { darkMode } from "$lib/stores.js";
  import DarkModeToggle from "./DarkModeToggle.svelte";
  import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";

	let isDarkMode;

	darkMode.subscribe((value) => {
    isDarkMode = value;
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<style>
	:global(h1, p, a) {
		font-family: 'Inria Sans', sans-serif;
	}

	div{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: -8px;
		width: 100vw;
	}

	div.dark-mode{
		background-color: #1C3144;
	}

	div.light-mode{
		background-color: #F0F0F0;
	}

</style>

<div class={isDarkMode ? "dark-mode" : "light-mode"}>
	<Header></Header>
	<slot />
	<DarkModeToggle></DarkModeToggle>
	<Footer></Footer>
</div>
