<script>

  import { darkMode, setSelection } from "$lib/stores";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

</script>

<style>

  #image-div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  #image-div.light-mode{
    background-image: -moz-linear-gradient(#1C3144, #1C3144);
  }
  #image-div.dark-mode{
    background-image: -moz-linear-gradient(#6e7759, #515c39);
  }

  #text-div{
    width: 488px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    color: #EAF1DB;
  }

  h1 {
    margin: 0px;
  }

  p{
    margin: 20px 0px 20px 0px;
  }

  a{
    width: 100%;
    border-width: 0;
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
  }
  a.light-mode{
    background-color: #C3D898;
    color: #1C3144;
  }
  a:hover.light-mode{
    background-color: rgb(224, 235, 202);
  }
  a.dark-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
  a:hover.dark-mode{
    background-color: #24394b;
  }

</style>

<div>
  <div id="image-div" class={isDarkMode ? "dark-mode" : "light-mode"}>
    <div id="text-div">
      <h1>LU TAKAS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, 
        eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. 
        Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam 
        in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor 
        ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  
        Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. 
      </p>
      <a href="/programmas" on:click={() => setSelection(1)} class={isDarkMode ? "dark-mode" : "light-mode"}>
        Apskatīt atsauksmes!
      </a>
    </div>
  </div>
</div>
