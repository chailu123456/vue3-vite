import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "@/style/test.less";
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "222",
    },
  },
  setup(props) {
    const router = useRouter();
    const back = () => {
      router.push({
        path: "/about",
      });
    };
    return () => {
      return (
        <div class="home">
          <div class="home-title">
            测试
            <p>1</p>
          </div>
          <button onClick={back}>{props.msg}</button>
        </div>
      );
    };
  },
});
