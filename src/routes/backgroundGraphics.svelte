<script>
  import { darkMode } from "$lib/stores";


  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

</script>

<style>
  .bl{
    position: absolute;
    bottom: 130px;
    overflow: hidden;
  }
  .tr{
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
  }
  svg.light-mode{
    stroke: #164270;
  }
  svg.dark-mode{
    stroke: #C3D898;
  }
  @media(max-width: 800px){
    .background{
      display: none;
    }
  }
</style>

<div class="background">
  <div class="bl">
    <svg class={isDarkMode ? "dark-mode" : "light-mode"} viewBox="21.327 85.901 447.275 184.834" width="447.275" height="184.834" xmlns="http://www.w3.org/2000/svg">
      <path style="fill: none; stroke-dasharray: 20, 20; stroke-width: 8px;" d="M 21.327 85.901 C 50.948 87.481 65.166 104.068 63.981 135.664 C 63.028 161.066 80.603 179.431 116.706 190.759 C 150.5 201.363 185.453 207.089 221.564 207.939 C 306.496 209.938 388.842 230.87 468.602 270.735"/>
    </svg>
  </div>
  <div class="tr">
    <svg class={isDarkMode ? "dark-mode" : "light-mode"} viewBox="23.7087 0 452.1732 851.83" width="452.1732" height="851.83" xmlns="http://www.w3.org/2000/svg">
      <path style="fill: none; stroke-dasharray: 20, 25; stroke-width: 8px;" d="M 56.471 0 C 91.765 32.549 95.686 73.725 68.235 123.529 C 53.842 149.643 40.901 176.505 29.412 204.118 C 9.797 251.261 40.778 291.849 122.353 325.882 C 161.435 342.187 200.847 357.677 240.588 372.353 C 304.755 396.049 362.99 431.932 415.294 480 C 458.42 519.633 448.812 577.411 386.471 653.333 C 340.419 709.417 370.223 775.583 475.882 851.83"/>
    </svg>
  </div>
</div>
