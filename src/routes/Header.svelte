<script>
  import { base } from "$app/paths";
  import { darkMode, section, setSelection, toggleDarkMode } from "$lib/stores.js";

	let logo = "favicon.png";
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

	#logo{
		height: 66px;
	}

	button{
    border-radius: 100px;
    border-width: 0px;
    margin: 20px;
    z-index: 20;
		padding: 10px;
		width: 80px;
		font-weight: 600;
  }
  button.light-mode{
    background-color: #1C3144;
		color: #f5ffe0;
  }
  button:hover.light-mode{
    background-color: #061c2e;
  }
  button.dark-mode{
    background-color: #C3D898;
		color: #061c2e;
  }
  button:hover.dark-mode{
    background-color: #f5ffe0;
  }
	
</style>

<div class="container">
	<a href="." on:click={() => setSelection(0)}>
		<img src={logo} alt="logo" id="logo"/>
	</a>
	<nav id="menu">
		<a on:click={() => setSelection(0)} class="{selection === 0 ? "menu-item-selected" : "menu-item"}" href="{base}/">Sākums</a>
		<a on:click={() => setSelection(1)} class="{selection === 1 ? "menu-item-selected" : "menu-item"}" href="{base}/programmas">Programmas</a>
		<button on:click={toggleDarkMode} class={isDarkMode ? "dark-mode" : "light-mode"}>{isDarkMode ? "Gaišais" : "Tumšais"}</button>
	</nav>
</div>