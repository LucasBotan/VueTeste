<template>
  <Menu />
  <section class="home">
    <div class="image-container">
      <h1>Com sua doação, você nos ajuda a mudar a realidade de milhares de animais</h1>
    </div>
    <div class="form-container">
      <div class="form-container-header">
        <h2>Preencha o para gerar o QRCode!</h2>
      </div>
      <div class="form-container-body">
        <form>
          <label for="name">
            Nome*:
            <input type="text" name="name" placeholder="Digite seu nome">
          </label>
          <label for="cpf">
            CPF*:
            <input type="text" name="cpf" placeholder="Digite seu CPF">
          </label>
          <label for="preco">
            Valor (R$)*:
            <input type="number" name="preco" placeholder="Digite o valor">
          </label>
        </form>
        <button>Gerar QRCode</button>
        <img src="/qrcode.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/MenuVue.vue';

export default {
  name: 'HomeView',
  components: {
    Menu,
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
        label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          input[type='text'],
          input[type='email'],
          input[type='password'],
          input[type='tel'],
          select {
            outline: none;
            border: 1px solid red;
            background: #FFF;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            height: 30px;
            padding: 2px 10px;
          }
        }
      }
      img {
        display: block;
        width: 200px;
        margin: 40px auto 0;
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
</style>
