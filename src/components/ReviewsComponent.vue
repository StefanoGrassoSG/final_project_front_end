<script >
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
    <div class="review-container text-center d-flex justify-content-center align-items-center">
        <img src="../assets/img/testimonial_shadow.png" alt="">
        <div class="circle-graph-1"></div>
        <div class="circle-graph-2"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/main";
    .review-container{
        margin-top: 40px;
        padding: 4.25rem;
        background-image: url(../assets/img/reviews-img.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: 80%;
        width: 100%;
        position: relative;

            img{
                margin-bottom: 20px;
                width: 500px;
            }

        }

        .circle-graph-1 {
            background-color: white;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            position: absolute;
            top: -74px;
            right: 200px;
        }
        .circle-graph-2 {
            background-color: white;
            border-radius: 50%;
            height: 100px;
            width: 100px;
            position: absolute;
            top: 206px;
            right: 400px;
        }

</style>