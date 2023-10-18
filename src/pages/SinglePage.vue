<script>
import axios from "axios";


export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
    created() {
    },
    components: {

    }
}
</script>

<template>
    <div class="container">
        <h1>
            Appartamento
        </h1>
        <section class="img-container">
            <div class="row m-5">
                <div class="col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid"
                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <img class="img-fluid"
                                        src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <img class="img-fluid"
                                        src="https://plus.unsplash.com/premium_photo-1661858661945-40c62d8fca88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1781&q=80"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <img class="img-fluid"
                                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <img class="img-fluid"
                                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="info-container mx-5 mb-5">
            <h2>
                Appartamento
            </h2>
            <p>
                6 bagni, 200 camere da letto, 15mq
            </p>

            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="services">
                        <h3>
                            Servizi
                        </h3>
                        <ul>
                            <li>
                                Vasca da bagno
                            </li>
                            <li>
                                Wi-fi
                            </li>
                            <li>
                                Aria condizionata
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>
                            Descrizione
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis earum vitae
                            nostrum
                            omnis eos aspernatur saepe consequuntur placeat odit qui ab suscipit adipisci, asperiores
                            est
                            maiores officia ipsam. Culpa, dolore. Eveniet nesciunt quos sed ipsam explicabo? Quo
                            delectus
                            tempora facilis, animi illo recusandae? Vero ea voluptas odio tempora, ratione, amet
                            sapiente animi
                            dolor illum commodi sed, aut ut harum et ad culpa quaerat voluptatem quo cumque placeat
                            tempore id
                            facere voluptates? Aperiam repudiandae, quo voluptatem aliquam, expedita officia eaque earum
                            ducimus
                            doloribus labore maxime consequuntur, ab perferendis harum placeat! Maxime libero vero
                            atque,
                            accusantium labore dolorem tempora incidunt molestiae molestias officia repellendus sed
                            suscipit ex
                            in veniam aliquid. Quas sunt quos sapiente dolores unde laboriosam aliquam eligendi
                            accusamus
                            assumenda!
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-title m-3">
                            <h3>
                                Prenotazione
                            </h3>
                            <hr>
                        </div>

                        <div class="card-body">
                            <form action="">
                                <label for="check-in">Check-in</label>
                                <div class="input-group mb-3">
                                    <input id="check-in" type='date' name="chack-in" class="form-control"
                                        aria-describedby="basic-addon1">
                                </div>

                                <label for="check-out">Check-out</label>
                                <div class="input-group mb-3">
                                    <input id="check-out" type='date' name="chack-out" class="form-control"
                                        aria-describedby="basic-addon1">
                                </div>

                                <label for="check-in">Ospiti</label>
                                <div class="input-group mb-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Numero di ospiti</option>
                                        <option value="1">Una</option>
                                        <option value="2">Due</option>
                                        <option value="3">Tre</option>
                                        <option value="3">Quattro</option>
                                    </select>
                                </div>

                                <label for="check-in">Prezzo</label>
                                <div class="card mb-3">
                                    <div class="card-body">
                                        120 euro
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col d-flex justify-content-center mb-3">
                                        <button type="submit" class="btn btn-primary m-auto">
                                            Contatta l'host
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="map col-12 my-5">
                    <h3>
                        Mappa
                    </h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div class="host card">
                    <h2>
                        Host
                    </h2>

                    <div class="row ">
                        <div class="col-6 col-sm-3 my-3">
                            <div class="d-flex">
                                <div class="img-container" style="width: 50px; height: 50px; ">
                                    <img class="img-fluid"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                                        alt="" style="width: 100%; height: 100%;border-radius: 50%;">
                                </div>
                                <h5 class="align-self-center mx-3">
                                    Peppa Pig
                                </h5>
                            </div>
                        </div>

                        <div class="col-6 col-sm-3 my-3">
                            <div class="languages">
                                <h4>
                                    Info
                                </h4>
                                <ul>
                                    <li>
                                        Host dal: 14/09/1200
                                    </li>
                                    <li>
                                        Identita verificata &check;
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-6 col-sm-3 my-3">
                            <div class="languages">
                                <h4>
                                    Lingue
                                </h4>
                                <ul>
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
                        <div class="col-6 col-sm-3 my-3">
                            <h4>
                                Hai dubbi?
                            </h4>
                            <form action="">
                                <div class="col d-flex mb-3">
                                    <button type="submit" class="btn btn-primary mb-3">
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

<style lang="scss" scoped></style>