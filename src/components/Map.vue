<script>
import tt from '@tomtom-international/web-sdk-maps';
import { store } from '../store';

export default {
    name: 'MapSingle',

    props: {
        apartemnt: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            store,
        };
    },

    methods: {

        getSignleMap() {
            let map = null;

            map = tt.map({
                key: 'KEiNGuhsySt5PgvkmCw7C9Sb5vGdacR6',
                container: 'map',
                center: [this.store.lon, this.store.lat],
                zoom: 15,
                radius: 20000,
            });

            new tt.Marker().setLngLat([this.store.lon,  this.store.lat]).addTo(map);
            for (let index = 0; index < this.store.apartments.length; index++) {
                new tt.Marker().setLngLat([this.store.apartments[index].lon,  this.store.apartments[index].lat]).addTo(map);
            }
           
            map.addControl(new tt.NavigationControl());

            return map;
        },
    },

    mounted() {
        this.getSignleMap();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div id="map" class="map"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.map {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-top: 20px;
}




</style>