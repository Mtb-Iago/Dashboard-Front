<template>
  <div class="navbar">
    <h3 class="logo"><i class="fa fa-user"></i> Logomarca</h3>
    <a href="" class="logout" @click.prevent="logout">Sair <i class="fa fa-sign-out-alt"></i></a>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",

  methods: {
      logout(){
          this.$router.push( {name: 'login'} )
      }
  }
};
</script>

<style lang="scss" scoped>
        .navbar {
        
        
            .logo {
            color: #fff;

            }
            .logout {
                color: #fff;
                text-decoration: none;
            }
        }
</style>