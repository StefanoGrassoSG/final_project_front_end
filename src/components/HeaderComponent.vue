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
  <header class="text-center mb-5 justify-content-between">
      <div class="row shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="col-4 logo">
            <a href="#">
              <img src="../assets/img/logo_ultimate.png" alt="">
            </a>
          </div>
          <div class="col-4 logo-complete">
            <img src="../assets/img/logo_completo.png" alt="">
          </div>
          <div class="col-4">
            <a href="http://127.0.0.1:8000/login">
              <button type="submit" class="btn btn-logout">
                <div class="d-flex align-items-center fw-bold">
                    <div class="text-out-lg">
                        Log In
                    </div>
                    <div class="icon-out-lg">
                        <img src="../assets/img/user_icon.png" alt="" class="user-logo img-fluid d-line"> 
                    </div>                                          
                </div>
              </button>
            </a>
          </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
@import "../../node_modules/rfs/scss";
h1 {
  @include font-size(4rem);
}
.row {
  .logo-complete {
    img{
      width: 150px;
    }    
  }
  .logo {
    img {
      width: 40px;
    }
  }
  .btn-logout {
    border-radius: 20px;
    &:hover {
      -webkit-box-shadow: -1px 7px 16px 2px rgba(0, 0, 0, 0.29);
      box-shadow: -1px 7px 16px 2px rgba(0, 0, 0, 0.29);
    }
    .text-out-lg{
      color: #7f7f7f;
    }
    .icon-out-lg {
      img {
        width: 25px;
        margin-left: 5px;
      }
    }
  }
}
</style>
