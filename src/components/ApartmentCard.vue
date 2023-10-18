<script>
import axios from "axios";

export default {
    data() {
        return {
            apartments: null
        }
    },
    methods: {

    },
    created() {

    },
    props: {
        name: String,
        address: String,
        path: String
    }
}
</script>

<template>
    <div class="card border rounded-4">
        <div class="img h-75 border rounded-4">
            <img :src="'http://127.0.0.1:8000/storage/' + path" alt="" class="h-100 img-fluid"
                v-if="path.startsWith('uploads')">
            <img :src="path" alt="" v-if="!path.startsWith('uploads')" class="h-100 img-fluid">
        </div>
        <div class="info-apt m-3">
            <h4>
                {{ name }}
            </h4>
            <div>
                <span class="info-small-apt">
                    Indirizzo:
                </span>
                {{ address }}
            </div>
            <div>
                <span class="info-small-apt">
                    Prezzo:
                </span>
                {{ price }} X&euro;/notte
            </div>
            <div>
                <span class="info-small-apt">
                    Mq:
                </span>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
img {
    border-start-end-radius: 10px;
    border-start-start-radius: 10px;
}

.info-apt {
    h4 {
        font-weight: bold;
        color: #3461AB;
    }
}

.info-small-apt {
    font-size: 15px;
    font-weight: bold;
    color: #888A8C;
}
</style>