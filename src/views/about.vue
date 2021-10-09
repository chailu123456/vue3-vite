<script lang="tsx">
// import { watch } from "fs";
import { defineComponent, ref, watchEffect, watch, reactive } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "backBtn",
  setup() {
    const router = useRouter();
    const back = () => {
      router.push({
        path: "/",
      });
    };
    let count = ref(0);

    let numObj = reactive({ num: 0 });
    let a = "dadasdasdasda";
    const add = () => {
      count.value++;
      a = "-------";
      numObj.num++;

      styleSetting();
    };
    const link = document.createElement("link");
    console.log(link);
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `src/style/a.less`;
    document.head.appendChild(link);

    const styleSetting = () => {
      const head = document.head || document.getElementsByTagName("head")[0];

      // 卸载原有的主题样式，设置定时器是为了防止抖动
      for (let i = head.children.length - 1; i > -1; i--) {
        const currentChild: any = head.children[i];
        console.log(currentChild);
        if (currentChild.rel === "stylesheet" && currentChild.href.includes("a")) {
          setTimeout(() => {
            currentChild.parentNode.removeChild(currentChild);
            const link = document.createElement("link");
            console.log(link);
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = `src/style/b.less`;
            document.head.appendChild(link);
          }, 500);
        }
      }
    };

    watch(count, (newVal, oldVal) => {
      console.log("执行");
      console.log(newVal, oldVal);
    });
    watchEffect(() => {
      console.log(count.value);
      console.log(a);
      console.log(numObj);
    });
    return () => {
      return (
        <div>
          <h1>about</h1>
          <h3>{count.value}</h3>

          <button onClick={() => add()}>add</button>
          <button onClick={() => back()}>返回</button>
        </div>
      );
    };
  },
});
</script>
<style scoped lang="less">
h1 {
  color: @rp-color-warn;
}
</style>
