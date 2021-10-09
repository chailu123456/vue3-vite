import { defineComponent } from "vue";
import "@/style/test.less";
export default defineComponent({
  props: {
    valJsx: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const slots = {
      foo: () => <span>B</span>,
    };
    const changeVal = (event) => {
      console.log(event.target.value);
      emit("update:valJsx", event.target.value);
    };
    return (props) => {
      return (
        <div>
          <input value={props.valJsx} onChange={changeVal} type="text" />
          <div v-slots={slots}></div>
        </div>
      );
    };
  },
});
