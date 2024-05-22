<script>
  import { base } from "$app/paths";


  import { darkMode, setSelection } from "$lib/stores.js";

  let isDarkMode;
  let img = "trails.jpg";

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
    background-position: center; 
    background-size: cover;
  }

  #text-div {
    display: flex;
    flex: 1 1;
    height: 100%;
    padding-left: 35vw;
    padding-right: 35vw;
    justify-content: center;
    flex-direction: column;
    color: #EAF1DB;
    background: rgba(0, 0, 0, 0.5);
  }
  
  @media(max-width: 800px){
    #text-div{
      padding-left: 10vw;
      padding-right: 10vw;
    }
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
    margin-left: 0px;
    transition: margin-left 0.5s ease;
  }
  a.light-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
  a.dark-mode{
    background-color: #C3D898;
    color: #1C3144;
  }
  a:hover{
    margin-left: 10px;
    transition: margin-left 0.5s ease;
  }

</style>

<div>
  <div id="image-div" style="background-image: url({img})">
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
      <a href="{base}/programmas" on:click={() => setSelection(1)} class={isDarkMode ? "dark-mode" : "light-mode"}>
        Apskatīt atsauksmes!
      </a>
    </div>
  </div>
</div>
