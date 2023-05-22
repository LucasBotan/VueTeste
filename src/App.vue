<template>
  <router-view/>
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
button {
  width: 100%;
  height: 40px;
  background-color: #B9151B;
  border-radius: 8px;
  outline: none;
  border: 0;
  color: #FFF;
  margin-top: 30px;
  transition: .3s;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    opacity: .85;
  }
  &.secondary-button {
    border: 2px solid #B9151B;
    color: #B9151B;
    background-color: transparent;
    &:hover {
      background-color: #B9151B;
      color: #ffffff;
      opacity: 1;
    }
  }
  &.primary-button {
    background-color: #12385C;
  }
}

label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='tel'],
  input[type='number'],
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
</style>
