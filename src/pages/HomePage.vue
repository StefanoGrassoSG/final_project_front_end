<script>
    import axios from "axios";
    import BannerComponent from '../components/BannerComponent.vue';
    import ApartmentCard from '../components/ApartmentCard.vue';
  export default {
  data() {
    return {
        apartments : null
    }
  },
  methods: {
    getApt(){
        axios.get('http://127.0.0.1:8000/api/apartment')
            .then(res=>{
                console.log(res.data.results.data)
                this.apartments = res.data.results.data
            })
    }
  },
  created(){
    this.getApt();
  },
  components: {
    BannerComponent,
    ApartmentCard
  }
}
</script>

<template>
    <BannerComponent/>
        <h1 class="text-center my-5"> 
            QUESTO è IL CONTENUTO DELLA HOME PAGE
        </h1>
    <div class="container">
        <div class="d-flex justify-content-between flex-wrap align-content-stretch w-100">
            <div class="col-4 my-3 px-2 d-flex align-content-stretch" v-for="(apt,i) in apartments" :key="i">
                    <ApartmentCard
                    :name="apt.name"
                    :address="apt.address"
                    :path="apt.cover_img"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>