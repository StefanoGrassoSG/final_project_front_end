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
    <div class="container">
        <div class="row align-items-center justify-content-center p-4 citation-container">
            <div class="col-6 fly-house">
                <img src="../assets/img/fly-house.png" alt="">
            </div>
            <div class="col-6 citation d-flex flex-column text-end">
                <h2>
                    “Le persone non fanno i viaggi,
                    sono i viaggi che fanno
                    le persone”
                </h2>
                <h5 class="name-citation fs-4">
                    John Steinbeck
                </h5>
            </div>
            <div class="circle-img-back">
                <img src="../assets/img/graphic_circle.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
.citation-container {
    position:relative;
    .fly-house {
    img {
        width: 500px;
    }

    }
    .citation {
        h2 {
            font-weight: bolder;
            color: #3461AB;
        }
        h5 {
            font-weight: bolder;
            color: #15B4F0
        }
    }
    .circle-img-back {
        img {
            position: absolute;
            top:83px;
            right:49px;
            width: 541px;
            z-index: -1;
        }
    }

}

</style>