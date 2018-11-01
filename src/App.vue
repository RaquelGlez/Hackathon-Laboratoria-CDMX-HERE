<template>
  <div id="app">
    <router-view/>
    <!-- <HereMap1
      appId = "kjUJtSCkxIEv0qQOYCUE"
      appCode = "3lVlTVLLiPXEesKAAu1HgQ"
      [start]="start"
      [finish]="finish"
      lat= "19.4978"
      lng= "-99.1269"
      width= "30%"
      height= "500px" /> -->
      <HereMap2
        appId = "kjUJtSCkxIEv0qQOYCUE"
        appCode = "3lVlTVLLiPXEesKAAu1HgQ"
        location= " Benito Juarez, CDMX"
        lat= "19.3983994"
        lng= "-99.1576614"
        width= "30%"
        height= "500px" />
      <ConfirmDriver/>
  </div>
</template>

<script>
  //import HereMap1 from "./components/HereMap1.vue"
  import HereMap2 from "./components/HereMap2.vue"
  import ConfirmDriver from "./components/ConfirmDriver.vue"
  
  export default {
    name: "app",
    components: {
      //HereMap1
      HereMap2,
      ConfirmDriver
    }
  }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>


