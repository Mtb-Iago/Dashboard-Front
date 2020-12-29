<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <h1>Login do Sistema</h1>
        </header>
        <div class="form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Endereço de email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Seu email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Nunca vamos compartilhar seu email, com ninguém.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Clique em mim</label
              >
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'loginComponent',

    data(){

        return {

        }
    },

    methods: {
        login(){
            this.$router.push({name: 'home'})
        }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped />
