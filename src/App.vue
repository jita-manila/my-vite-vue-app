<template>
    <nut-navbar class="top-nav-wrapper" :placeholder="true">
    <template #content>
      <div class="d-flex justify-center align-center">
        <img class="logo" src="./assets/img/logo.png" alt="">
        <div class="slogan">鱼了个鱼</div>
      </div>
    </template>
    </nut-navbar>
    <main class="d-flex flex-column">
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>简单难度</nut-button>
        </nut-animate>
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>中等难度</nut-button>
        </nut-animate>
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>简单难度</nut-button>
        </nut-animate>
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>简单难度</nut-button>
        </nut-animate>
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>简单难度</nut-button>
        </nut-animate>
        <nut-animate type='breath' :loop='true'>
          <nut-button type='primary'>简单难度</nut-button>
        </nut-animate>

    </main>
</template>

<script setup>
  import { useDark, useToggle } from '@vueuse/core'
  import { ref, computed } from 'vue'
  
  const theme = ref('')

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const toggle = (v) => {
    toggleDark(v)
    theme.value = v ? 'dark' : ''
  }
</script>

<style lang="scss">
.logo {
  width: 32px;
  height: 32px;
}
.slogan {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-left: 6px;
}
.top-nav-wrapper {
  background: transparent !important;
  box-shadow: none !important;
}
main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  .nut-button {
    margin: 10px;
  }
}
</style>
