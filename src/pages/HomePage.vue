<script>
    import axios from "axios";
    import BannerComponent from '../components/BannerComponent.vue';
    import ApartmentCard from '../components/ApartmentCard.vue';
    import LoadingComponent from '../components/LoadingComponent.vue';
  export default {
  data() {
    return {
        apartments : null,
        aptLoading :false
    }
  },
  methods: {
    getApt(){
		this.aptLoading = true
        axios.get('http://127.0.0.1:8000/api/apartment')
            .then(res=>{
                console.log(res.data.results.data)
                this.apartments = res.data.results.data
				this.aptLoading = false
            })
			.catch(err=>{
				console.log(err)
			})
    }
  },
  created(){
    this.getApt();
  },
  components: {
    BannerComponent,
    ApartmentCard,
    LoadingComponent
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
			<template v-if="aptLoading">
				<LoadingComponent/>
			</template>
           <template v-if="!aptLoading">
				<template v-if="apartments.length > 0 || apartments.lenght != null">
					<div class="col-4 my-3 px-2 d-flex align-content-stretch" v-for="(apt,i) in apartments" :key="i">
						<ApartmentCard
						:name="apt.name"
						:address="apt.address"
						:path="apt.cover_img"/>
					</div>
				</template>
				<template v-else>
					no results found
				</template>
		   </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>