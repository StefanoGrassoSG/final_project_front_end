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
       <div class="h-25">
            <h3>
                {{ name }}
            </h3>
            <h4>
                address: {{ address }}
            </h4>
       </div>
        <div class="img h-75">
            <img :src="'http://127.0.0.1:8000/storage/'+path" alt="" class="h-100 img-fluid" v-if="path.startsWith('uploads')">
            <img :src="path" alt="" v-if="!path.startsWith('uploads')" class="h-100 img-fluid">
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>