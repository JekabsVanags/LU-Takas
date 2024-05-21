<script>

  import { darkMode, toggleDarkMode } from "$lib/stores";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  })

</script>

<style>
  button{
    position: sticky;
    bottom: 20px;
    left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 100px;
    border-width: 0px;
    margin: 20px;
  }
  button.light-mode{
    background-color: #1C3144;
  }
  button:hover.light-mode{
    background-color: #061c2e;
  }
  button.dark-mode{
    background-color: #C3D898;
  }
  button:hover.dark-mode{
    background-color: #f5ffe0;
  }
</style>

<button on:click={toggleDarkMode} class={isDarkMode ? "dark-mode" : "light-mode"}>
</button>