//import
import { reactive, watch, onMounted, ref } from "vue"
import datas from "../../../public/mock/data.json"
import menuItem from "@/components/menuItem/index.vue"
//start
export default {
  name: 'main',
  components: {
    menuItem,
  },
  props: {

  },
  setup() {
    let start = ref(false);
    let showPopup = ref(false);
    onMounted(async () => {
    });
    function clickMenu(e){
      start.value = true;
      showPopup.value = e;
    }
    return {
      showPopup,
      clickMenu,
      datas,
      start,
    }
  }
}