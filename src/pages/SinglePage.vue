<script>
import axios from "axios";
import ModalComponentMessage from "../components/ModalComponentMessage.vue";
import LoadingComponent from '../components/LoadingComponent.vue';


export default {
    data() {
        return {
            singleApt: null,
            loading: false
        }
    },
    mounted() {

    },
    methods: {
        getSingleApt() {
            this.loading = true,
                axios.get(`http://127.0.0.1:8000/api/apartment/${this.$route.params.id}`)
                    .then(res => {
                        console.log(res.data)
                        this.singleApt = res.data.results
                        this.loading = false


                    })
                    .catch(err => {
                        console.log(err.response)
                    })
        },
        getIp() {
            axios.get('https://api.ipify.org?format=json')
                .then(res => {
                    let ip = res.data.ip
                    this.sendIp(ip)
                })
        },
        sendIp(ip) {
            let data = {
                ip: ip,
                id: this.$route.params.id
            }
            axios.post('http://127.0.0.1:8000/api/ip/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.data)
                })
        }
    },
    created() {
        this.getSingleApt();
        this.getIp()
    },
    components: {
        ModalComponentMessage,
        LoadingComponent

    }
}
</script>

<template>
    <template v-if="loading">
        <LoadingComponent />
    </template>

    <template v-if="!loading">
        <ModalComponentMessage />

        <div class="container">
            <h1>
                {{ singleApt.name }}
            </h1>
            <section class="img-container my-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <img class="img-fluid" v-bind:src="singleApt.cover_img" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="row">
                            <div v-for="singleImg in singleApt.image" :key="index" class="col-6 extra-img">
                                <div class="card">
                                    <div class="card-body">
                                        <img class="img-fluid" v-bind:src="singleImg.src" alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="info-container mb-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div>
                            <h3>
                                Descrizione
                            </h3>
                            <p class="fs-5">
                                {{ singleApt.description }}
                            </p>
                        </div>
                    </div>
                    <div class="apt-card-dx col-md-6 col-sm-12 border rounded-4 px-4 align-self-start">

                        <div class="card-title mt-3">
                            <h3>
                                Dettagli appartamento
                            </h3>
                            <hr>
                        </div>
                        <div class="info d-flex flex-column justify-content-md-end">
                            <div class="card-body card-info-apt d-flex flex-wrap">
                                <div class="col-12 col-md-6">
                                    <ul>
                                        <li class="mb-3">
                                            <span class="span-info">N. stanze: </span>{{ singleApt.room }}
                                        </li>
                                        <li class="mb-3">
                                            <span class="span-info">N. bagni: </span>{{ singleApt.bathroom }}
                                        </li>
                                        <li>
                                            <span class="span-info">Prezzo/notte: </span>{{ singleApt.price }}&euro;
                                        </li>

                                    </ul>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <ul>
                                        <li class="mb-3">
                                            <span class="span-info">N. letti: </span>{{ singleApt.bed }}
                                        </li>
                                        <li class="mb-3">
                                            <span class="span-info">Bagno condiviso: </span>
                                            <span class="span-info" v-if="singleApt.shared_bathroom">Sì</span>
                                            <span class="span-info" v-else>No</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="services">
                                <h3>
                                    Servizi inclusi
                                </h3>
                                <ul>
                                    <li class="fs-5 d-flex d-lg-inline mx-2" v-for="singleService in singleApt.services"
                                        :key="index">
                                        {{ singleService.name }}
                                    </li>
                                </ul>
                            </div>

                            <div class="card-body card-info-apt">
                                <div class="row">
                                    <div class="col d-flex justify-content-center">
                                        <button type="button" class="btn-contact" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Contatta l'host
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="map col-12 my-5">
                        <h3>
                            Mappa
                        </h3>
                        <iframe
                            :src="'https://maps.google.com/maps?q=' + singleApt.lat + ',' + singleApt.lon + '&hl=es;z=14&amp;output=embed'"
                            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div class="host-card d-flex flex-column align-items-center d-md-block">
                        <h3 class="text-center">
                            Host
                        </h3>

                        <div class="row ">
                            <div class="col-12 col-md-3 my-3">
                                <div class="d-flex justify-content-center justify-md-start">
                                    <div class="img-container user-icon">
                                        <!-- <img class="img-fluid"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                                            alt="" style="width: 100%; height: 100%;border-radius: 50%;"> -->
                                        <img src="../assets/img/user_icon.png" alt="">
                                    </div>
                                    <h5 class="align-self-center mx-3 host-name">
                                        {{ singleApt.user.name }}
                                        {{ singleApt.user.last_name }}
                                    </h5>
                                </div>
                            </div>

                            <div class="col-12 col-md-3 my-3 d-flex justify-content-center">
                                <div class="languages">
                                    <h4 class="text-center text-md-start host-info">
                                        Informazioni
                                    </h4>
                                    <ul class="fs-5">
                                        <li>
                                            Host dal: {{ singleApt.user.created_at.substr(0, 10) }}
                                        </li>
                                        <li>
                                            Identita verificata <span class="text-green">&check;</span>
                                        </li>
                                        <li>
                                            Email: {{ singleApt.user.email }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-12 col-md-3 my-3 d-flex justify-content-center justify-md-start">
                                <div class="languages">
                                    <h4 class="host-info">
                                        Lingue
                                    </h4>
                                    <ul class="fs-5">
                                        <li>
                                            Italiano
                                        </li>
                                        <li>
                                            Inglese
                                        </li>
                                        <li>
                                            Cinese
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class=" col-12 col-md-3 my-3 d-flex flex-column align-items-center align-items-md-start">
                                <h4 class="host-info">
                                    Hai dubbi?
                                </h4>
                                <form action="">
                                    <div class=" col d-flex mb-3">
                                        <button type="button" class=" btn-contact" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Contatta l'host
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </template>
</template>

<style lang="scss" scoped>
h1 {
    color: #3461AB;
    font-weight: bold;
}

h3 {
    color: #3461AB;
    font-weight: bold;
}

ul {
    padding: 0;

    li {
        list-style: none;
    }
}

.extra-img:nth-child(3),
.extra-img:nth-child(4) {
    margin-top: 8px;
}

.card {
    background-color: transparent;

}

.apt-card-dx {
    background-color: #D2E6F8;

    .span-info {
        color: #888A8C;
        font-weight: bold;
    }

    li {
        font-size: 15px;
    }

    .card-info-apt {
        padding-top: 20px;
        padding-bottom: 10px;
    }

}



.btn-contact {
    padding: 10px;
    font-size: 13px;
    background-color: #00ABE8;
    color: white;
    font-weight: bold;
    border-radius: 10px !important;
    border: none !important;
}

.btn-contact:hover {
    background-color: #3461AB;
    color: white;
    font-weight: bold;
}

.host-card {
    border: 1px solid #3461AB;
    border-radius: 10px;
    padding-top: 10px;

    .span-info {
        color: #888A8C;
        font-weight: bold;
    }

    h5 {
        margin-bottom: 0 !important;
    }
}

.host-info {
    color: #3461AB;
    font-weight: bold;
}

.host-name {
    font-weight: bold;
    color: #3461AB;
}

.user-icon {
    max-width: 50px;
    max-height: 50px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>