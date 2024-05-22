<script>
  import { base } from "$app/paths";
  import ProgramItem from "./ProgramItem.svelte";

</script>
<style>
  .container{
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
</style>

<div class="container">
  <ProgramItem 
  reversed={1} 
  image = "lu-test-image.jpg"
  imageAlt = "lu ēka"
  title = "Datorzinātņu bakalaurs"
  link = "{base}/programmas/datoriki"
  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "
  />
  <ProgramItem 
  reversed={0} 
  image = "lu-test-image.jpg"
  imageAlt = "lu ēka"
  title = "Ģeogrāfijas bakalaurs"
  link = "{base}/programmas/geografi"
  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "
  />
  <ProgramItem 
  reversed={1} 
  image = "lu-test-image.jpg"
  imageAlt = "lu ēka"
  title = "Medicīnas bakalaurs"
  link = "{base}/programmas/mediki"
  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "
  />
</div>
