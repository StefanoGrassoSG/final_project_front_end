import { reactive } from 'vue';

export const store = reactive({
    apartments: null,
    totalApt: 0,
    lat: null,
    lon: null,
    city: null,
    inputSearchBar: ''
})