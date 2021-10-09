<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
  setup() {
    console.log(77);
  },
};
</script>
