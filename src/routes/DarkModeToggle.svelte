<script>

  import { darkMode, toggleDarkMode } from "$lib/stores.js";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  })

</script>

<style>

</style>

