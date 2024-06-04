<script>
  import { base } from "$app/paths";
  import { darkMode, section, setSelection, toggleDarkMode } from "$lib/stores.js";
  import Logo from "./svg/Logo.svelte";
  import SwitchIcon from "./svg/SwitchIcon.svelte";

	let selection;

	let isDarkMode;

	darkMode.subscribe((value) => {
		isDarkMode = value;
	})

	section.subscribe((value) => {
		selection = value;
	});

</script>

<style>
	.container {
		background-color: #164270;
		min-height: 10vh;
		display: flex;
		flex: 0 1;
		flex-direction: row;
		padding-left: 15%;
		padding-right: 15%;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 0px 2cap black;
	}

	.menu-item{
		font-size: 16px;
		text-transform: uppercase;
		font-weight: 600;
		text-decoration: none;
		color: #EAF1DB;
		margin-left: 20px;
	}

	.menu-item-selected{
		font-size: 16px;
		text-transform: uppercase;
		text-decoration: underline;
		color: #EAF1DB;
		font-weight: 800;
		margin-left: 20px;
	}

	.menu-item:hover{
		text-decoration: underline;
	}

	@media(max-width: 800px){
		#menu{
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	#logo{
		height: 66px;
	}

	button{
    border-radius: 100px;
    border-width: 0px;
    margin-left: 20px;
    z-index: 20;
		padding: 10px;
		width: 34px;
		height: 34px;
		font-weight: 600;
		background-color: #1C3144;
		color: #061c2e;
  }
  button:hover{
    background-color: #061c2e;
  }

</style>

<div class="container">
	<a href="/" on:click={() => setSelection(0)}>
		<Logo/>
	</a>
	<nav id="menu">
		<a on:click={() => setSelection(0)} class="{selection === 0 ? "menu-item-selected" : "menu-item"}" href="{base}/">Sākums</a>
		<a on:click={() => setSelection(1)} class="{selection === 1 ? "menu-item-selected" : "menu-item"}" href="{base}/programmas">Programmas</a>
		<button on:click={toggleDarkMode} class={isDarkMode ? "dark-mode" : "light-mode"}>
		<SwitchIcon isDarkMode={isDarkMode}></SwitchIcon>
		</button>
	</nav>
</div>