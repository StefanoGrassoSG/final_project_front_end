<script>
    import axios from "axios";

  export default {
  data() {
    return {
        apartments : null
    }
  },
  methods: {

  },
  created(){

  },
  props:{
    name: String,
    address: String,
    path: String
  }
}
</script>

<template>
    <div class="card">
        <h3>
            {{ name }}
        </h3>
        <h4>
            address: {{ address }}
        </h4>
        <div class="img">
            <img :src="'http://127.0.0.1:8000/storage/'+path" alt="" class="img-fluid" v-if="path.startsWith('uploads')">
            <img :src="path" alt="" v-if="!path.startsWith('uploads')" class="img-fluid">
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>