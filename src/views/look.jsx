import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.jsx";
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "222",
    },
  },
  components: {
    Button,
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
          <button onClick={back}>{props.msg}</button>
          <Button
            v-slots={{
              content: (scope) => <div>插槽123哈哈哈</div>,
            }}
          ></Button>
        </div>
      );
    };
  },
});
