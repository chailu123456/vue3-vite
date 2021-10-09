<template>
  <div>
    <input :value="val" @input="$emit('update:val', $event.target.value)" type="text" />
    <slot name="test"></slot>
    <h3><span style="font-size: 14px">store值:</span> {{ $store.state.title }}</h3>
    <el-button> 我是 ElButton </el-button>
    <el-badge :value="1211" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
  </div>
</template>

<script lang="ts">
import { toRefs, defineComponent, watch } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Input",
  props: {
    val: {
      type: String,
      default: "",
    },
  },
  emits: ["update:val"],
  setup(props, { emit }) {
    const route = useRoute();
    console.log(route.meta);

    watch(
      () => props.val,
      (newVal) => {
        emit("update:val", newVal);
      },
    );
    return {
      ...toRefs(props),
    };
  },
});
</script>
<style scoped lang="less"></style>
