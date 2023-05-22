<template>
  <Menu />
  <section class="home">
    <div class="image-container">
      <h1>Com sua doação, você nos ajuda a mudar a realidade de milhares de animais</h1>
    </div>
    <div class="form-container">
      <div class="form-container-header">
        <h2>Preencha o formulário e seja um doador!</h2>
      </div>
      <div class="form-container-body">
        <form>
          <label for="name">
            Nome*:
            <input type="text" name="name" placeholder="Digite seu nome">
          </label>
          <label for="email">
            E-mail*:
            <input type="email" name="email" placeholder="Digite seu e-mail">
          </label>
          <label for="password">
            Senha*:
            <input type="password" name="password" placeholder="Digite sua senha">
          </label>
          <label for="nasc">
            Data de nascimento*:
            <input type="text" name="nasc" placeholder="DD/MM/AAAA">
          </label>
          <label for="sexo">
            Sexo*:
            <select name="sexo">
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </label>
          <label for="tel">
            Telefone*:
            <input type="tel" name="tel" placeholder="Digite seu telefone">
          </label>
        </form>
        <label for="policies" class="policies">
          <input type="checkbox" name="policies" />
          Li e aceito as políticas de privacidade.
        </label>
        <button>Registrar</button>
        <button class="secondary-button" @click="openedLogin = !openedLogin"
          @keydown="openedLogin = !openedLogin">
          Fazer login
        </button>
      </div>
    </div>
  </section>
  <div class="modal-container" v-if="openedLogin" :class="{ active: openedLogin }">
    <div class="modal-login">
      <label for="email">
        Email*:
        <input type="email" name="email" id="email">
      </label>
      <label for="password">
        Senha*:
        <input type="password" name="password" id="password">
      </label>
      <button class="primary-button">
        Login
      </button>
      <div class="close" @click="openedLogin = !openedLogin"
          @keydown="openedLogin = !openedLogin">X</div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/MenuVue.vue';

export default {
  name: 'HomeView',
  components: {
    Menu,
  },
  data() {
    return {
      openedLogin: false,
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  .image-container {
    display: flex;
    align-items: flex-end;
    background-image: url('../assets/bg_home.png');
    background-size: cover;
    background-position: center;
    width: 70vw;
    padding: 35px 55px;
    h1 {
      font-size: 68px;
      margin: 0;
      color: #FFF;
    }
    @media (max-width: 1130px) {
      width: 60vw;
      h1 {
        font-size: 38px;
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .form-container {
    width: 30vw;
    .form-container-header {
      display: flex;
      align-items: center;
      background: #E38024;
      padding: 20px 10px;
      h2 {
        color: #FFF;
        font-size: 20px;
        margin: 0;
        text-align: center;
        width: 100%;
      }
    }
    .form-container-body {
      padding: 25px;
      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .policies {
        display: block;
        margin-top: 30px;
      }
    }
    @media (max-width: 1130px) {
      width: 40vw;
    }
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
}
.modal-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  .modal-login {
    position: relative;
    background-color: #E38024;
    padding: 40px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 350px;
    border-radius: 5px;
    label {
      color: #FFF;
      font-weight: 600;
    }
    button {
      margin: 20px;
      margin-left: 0;
    }
    .close {
      color: #ffffff;
      font-size: 24px;
      font-weight: 600;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
  &:not(.active) {
    opacity: 0;
  }
}
</style>
