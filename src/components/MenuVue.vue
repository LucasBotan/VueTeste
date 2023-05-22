<template>
  <img class="hamburger" src="/hamburger.png" alt=""
    @click="openedMenu = !openedMenu" @keydown="openedMenu = !openedMenu">
  <div class="menu" :class="{ active: openedMenu }">
    <ul class="menu-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/doe">Doe agora</router-link></li>
      <li>
        <router-link to="/">Dashboard</router-link>
        <ul>
          <li><router-link to="/">Minhas doações</router-link></li>
          <li><router-link to="/">Transparência</router-link></li>
        </ul>
      </li>
      <li><router-link to="/">Galeria</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
      <li><router-link to="/">Termos de uso</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuVue',
  data() {
    return {
      openedMenu: false,
    };
  },
  watch: {
    $route() {
      this.openedMenu = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hamburger {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 50px;
  cursor: pointer;
  z-index: 10;
}
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 15vw;
  height: 100vh;
  background-color: #E38024;
  padding: 20px 20px;
  transition: .3s;
  .menu-list {
    padding: 0;
    margin-top: 80px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    li {
      a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;
        list-style: none;
        padding: 0 0 0 20px;
      }
    }
  }
  &:not(.active) {
    left: -100vw;
  }
}

</style>
