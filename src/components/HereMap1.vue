<template>
    <div>
        <div class="here-map"></div>
        <div ref="map" v-bind:style="{width: width, height: height}"></div>
    </div>
</template>

<script>
    export default {
        name: "HereMap1",
        data() { 
            return {
                map: { },
                platform: { },
                geocoder:{ }
            }
        },

        props: { 
            appId: String,
            appCode: String,
            lat: String,
            lng: String,
            width: String,
            height: String,
            location: String
        },

        route(){
            let params = {
            "mode": "fastest;car",
            "waypoint0": "geo!" + this.start,
            "waypoint1": "geo!" + this.finish,
            "representation": "display"
        }
        this.map.removeObjects(this.map.getObjects());
        this.router.calculateRoute(params, data => {
            if(data.response){
                this.directions = data.response.route[0].leg[0].maneuver;
                data = data.response.route[0];
                let lineString = new H.geo.lineString();
                data.shape.forEach(point => {
                    let parts = point.split(",");
                    lineString.pushLatLngAlt(parts[0], parts[1]);
                });
                let routeLine = new H.map.Polyline(lineString, {
                    style: { strokeColor: "blue", lineWidth: 5 }
                });
                let startMarker = new H.map.Marker({
                    lat: this.start.split(",")[0],
                    lng: this.start.split(",")[1]
                });
                let finishMarker = new H.map.Marker({
                    lat: this.finish.split(",")[0],
                    lng: this.finish.split(",")[1]
                });
                this.map.addObjects([routeLine, startMarker, finishMarker]);
                this.map.setViewBounds(routeLine.getBounds());
            }
        }, error => {
            console.error(error);
        });
        },
        

        created () {
            this.platform = new H.service.Platform ({
                "app_id": this.appId,
                "app_code": this.appCode
            });
            this.directions = [];
            this.router = this.platform.getRoutingService();
            //this.geocoder = this.platform.getGeocodingService();
         },

        mounted () { 
            this.map = new H.Map (
                this.$refs.map,
                this.platform.createDefaultLayers().normal.map,
                {
                    zoom: 14,
                    center: { lng: this.lng, lat: this.lat}
                }
            );
            this.route(this.start, this.finish);
            // this.geocoder.geocode({ searchText: this.location }, data => {
            //     if(data.Response.View.length > 0) {
            //         if(data.Response.View[0].Result.length > 0) {
            //             var coords = data.Response.View[0].Result[0].Location.DisplayPosition;
            //             this.map.setCenter({lat: coords.Latitude, lng: coords.Longitude });
            //             this.map.addObject(new H.map.Marker({lat: coords.Latitude, lng: coords.Longitude}));
            //         }
            //     }
            // }, error => {
            //     console.error(error);
            // }); 
        },
        
        onChange (){
            if((changes["start"] && !changes["start"].isFirstChange()) || (changes["finish"] && !changes["finish"].isFirstChange())) {
                this.route(this.start, this.finish);
            }
         }


        
    }
</script>

<style scoped></style>
