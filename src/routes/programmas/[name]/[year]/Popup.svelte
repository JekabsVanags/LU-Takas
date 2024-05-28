<script>
  import { darkMode } from "$lib/stores";

  export let close;
  export let title;
  export let content;
  export let img;
  export let imgAlt;

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

</script>

<style>
  .obscure{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    border: none;
  }

  .popup.dark-mode{
    color: #EAF1DB;
    background-color: #1C3144;
  }

  .popup.light-mode{
    color: #1C3144;
    background-color: #F0F0F0;;
  }
  .popup{
    background-color: white;
    position: fixed;
    width: 70%;
    height: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 0px;
  }

  .description{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 30px;
    text-align: start;
  }
  img{
    width: 30%;
    height: 100%;
    object-fit: cover;
  }
  p{
    text-indent: 20px;
    font-size: 17px;
    overflow: auto;
    height: 60vh;
    line-height: 30px;
  }
  h1{
    text-align: center;
    font-size: 32px;
    margin-bottom: 5px;
    width: 95%;
  }

  @media(max-width: 800px){
    .popup{
      flex-direction: column;
    }
    .description{
      width: 100%;
      padding: 10px;
    }
    img{
      width: 100%;
      height: 20%;
    }
    p{
      max-width: 90%;
      overflow: auto;
      text-align: start;
      height: 44vh;
      padding-left: 15px;
      padding-right: 15px;
    }
    h1{
      text-align: center;
    }
  }
  button.close{
    background-color: white;
    position: fixed;
    top: 20px;
    right: 20px;
    border: none;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  button.close:hover{
    font-weight: 800;
  }
  .close.light-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
</style>

<button class="obscure" on:click={close}>
  <button class="popup {isDarkMode ? "dark-mode" : "light-mode"}" on:click|stopPropagation>
    <button class="close {isDarkMode ? "dark-mode" : "light-mode"}" on:click={close}>
      X
    </button>
    <img src={img} alt={imgAlt}/>
    <div class="description">
      <h1>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  </button>
</button>