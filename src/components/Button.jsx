import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "@/style/test.less";
export default defineComponent({
  name: "Button",

  render() {
    console.log(this.$slots);
    return <div class="home">{this.$slots.content?.()}</div>;
  },
});
