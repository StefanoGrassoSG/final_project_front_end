<script>
import axios from "axios";
import BannerComponent from '../components/BannerComponent.vue';
import ApartmentCard from '../components/ApartmentCard.vue';
import LoadingComponent from '../components/LoadingComponent.vue';

export default {
	data() {
		return {
			apartments: null,
			totalAptPages: null,
			nextPageCounter: 1,
			aptLoading: false,
			inputSearchbar: null,
			buttonReset: null,
		}
	},
	mounted() {
		var options = {
			minNumberOfCharacters: 0,
			searchOptions: {
				key: "KEiNGuhsySt5PgvkmCw7C9Sb5vGdacR6",
				language: "it-IT",
				limit: 5,
			},
			autocompleteOptions: {
				key: "KEiNGuhsySt5PgvkmCw7C9Sb5vGdacR6",
				language: "it-IT",
			},
		}
		var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
		var searchBoxHTML = ttSearchBox.getSearchBoxHTML()
		let prova = this.$refs.prova;
		prova.appendChild(searchBoxHTML);

		ttSearchBox.on("tomtom.searchbox.resultsfound", this.handleResultsFound)

	},
	methods: {
		handleResultsFound(event) {
			var results = event.data.results;
			if (event.data.results.fuzzySearch.results.length === 0) {
				this.getApt()
			}
			else {
				this.search(results.autocomplete.context.inputQuery);
			}

		},
		getApt() {
			this.aptLoading = true
			axios.get('http://127.0.0.1:8000/api/apartment')
				.then(res => {
					this.apartments = res.data.results.data
					this.totalAptPages = res.data.results.last_page
					this.aptLoading = false
					this.buttonReset = res.data.results.total
				})
				.catch(err => {
					console.log(err)
					this.aptLoading = false
				})
		},
		search(param) {
			this.aptLoading = true
			let data = {
				data: param
			}
			axios.post('http://127.0.0.1:8000/api/apartment', data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
				.then(res => {
					console.log(res)
					this.apartments = res.data.results.data
					this.totalAptPages = res.data.results.last_page
					this.aptLoading = false
					this.buttonReset = res.data.results.total
				})
				.catch(err => {
					console.log(err)
				})
		},
		nextPage() {
			if (this.nextPageCounter < this.totalAptPages) {
				this.nextPageCounter++
			}
			else {
				this.nextPageCounter = 1
			}
			this.aptLoading = true
			axios.get(`http://127.0.0.1:8000/api/apartment?page=${this.nextPageCounter}`)
				.then(res => {
					console.log(res.data.results)
					this.apartments = res.data.results.data
					this.aptLoading = false
				})
				.catch(err => {
					console.log(err)
					this.aptLoading = false
				})
		}
	},
	created() {
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
	<BannerComponent />

	<div class="search-bar-div">
		<div ref="prova" @keyup.enter="search()" class="w-50">

		</div>
	</div>


	<div class="container">
		<div id="my-container" class="mt-5 d-flex justify-content-center flex-wrap align-content-stretch w-100">
			<template v-if="aptLoading">
				<LoadingComponent />
			</template>
			<template v-if="!aptLoading">
				<template v-if="apartments.length > 0 || apartments.lenght != null">
					<div class="col-4 my-3 px-2 d-flex align-content-stretch" v-for="(apt, i) in apartments" :key="i">
						<ApartmentCard :name="apt.name" :address="apt.address" :path="apt.cover_img" />
					</div>
				</template>
				<template v-else>
					no results found
				</template>
				<button v-if="buttonReset > 3" @click="nextPage" class="btn btn-success">next</button>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.search-bar-div {
	display: flex;
	justify-content: center;
}
</style>