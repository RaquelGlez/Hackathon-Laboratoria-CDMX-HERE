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
      height= "500px" 
      
            appId = "kjUJtSCkxIEv0qQOYCUE"
      appCode = "3lVlTVLLiPXEesKAAu1HgQ"
      location= " Benito Juarez, CDMX"
      lat= "19.3983994"
      lng= "-99.1576614"
      width= "30%"
      height= "500px"
      /> -->
      <HereMap2
        https://route.api.here.com/routing/7.2/calculateroute.json
        ?app_id={kjUJtSCkxIEv0qQOYCUE}
        &app_code={3lVlTVLLiPXEesKAAu1HgQ}
        &mode=fastest;car;traffic:disabled
        &waypoint0=geo!52.516858379,13.3884717
        &waypoint1=geo!stopOver!52.51704771,13.39131492
        &waypoint2=geo!52.51733824,13.394678415
       />
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


