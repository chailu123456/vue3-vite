<template>
  <div>
    <!-- <h1>input组件封装</h1> -->
    <Input v-model:val="val">
      <template v-slot:test>
        <p>test</p>
      </template>
    </Input>
    <InputJsx v-model:valJsx="valJsx">
      <template v-slot:test>
        <p>test</p>
      </template>
    </InputJsx>
    <button @click="getVal">获取input</button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.jsx";
import Input from "@/components/Input.vue";
import InputJsx from "@/components/Input.jsx";
import "@/style/default.less";
import { useStore } from "vuex";
export default defineComponent({
  name: "",
  components: {
    HelloWorld,
    Input,
    InputJsx,
  },
  setup() {
    const data = reactive({});
    const val = ref("");
    const valJsx = ref("");
    const $store = useStore();
    const getVal = () => {
      console.log("val值" + val.value);
      console.log("valJsx值" + valJsx.value);
      // $store.commit("setState", 10);
      $store.dispatch("getdata");
    };
    return {
      val,
      valJsx,
      getVal,
      ...toRefs(data),
    };
  },
});
</script>
<style scoped lang="less">
// @import "@/style/default.less";
p {
  line-height: 40px;
  background: @rp-color-warn;
  color: @rp-color-text-link;
}
</style>
