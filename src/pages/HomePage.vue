<script>
    import axios from "axios";
    import BannerComponent from '../components/BannerComponent.vue';
    import ApartmentCard from '../components/ApartmentCard.vue';
    import LoadingComponent from '../components/LoadingComponent.vue';
  export default {
  data() {
    return {
        apartments : null,
		totalAptPages : null,
		nextPageCounter : 1,
        aptLoading :false
    }
  },
  methods: {
    getApt(){
		this.aptLoading = true
        axios.get('http://127.0.0.1:8000/api/apartment')
            .then(res=>{
                console.log(res.data.results)
                this.apartments = res.data.results.data
				this.totalAptPages = res.data.results.last_page
				console.log(this.totalAptPages)
				this.aptLoading = false
            })
			.catch(err=>{
				console.log(err)
				this.aptLoading = false
			})
    },
	nextPage(){
		if(this.nextPageCounter < this.totalAptPages){
			this.nextPageCounter++
			console.log(this.totalAptPages)
			console.log(this.nextPageCounter)
		}
		else{
			this.nextPageCounter = 1
			console.log(this.totalAptPages)
			console.log(this.nextPageCounter)
		}
		this.aptLoading = true
		axios.get(`http://127.0.0.1:8000/api/apartment?page=${this.nextPageCounter}`)
		.then(res=>{
                console.log(res.data.results)
                this.apartments = res.data.results.data
				// this.totalAptPages = res.data.results.last_page
				// console.log(this.totalAptPages)
				this.aptLoading = false
            })
			.catch(err=>{
				console.log(err)
				this.aptLoading = false
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
				<button @click="nextPage" v-if="totalAptPages != nextPageCounter"
					class="btn btn-success">next</button>
		   </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>