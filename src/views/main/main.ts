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
    let balls = reactive([
      {left:50,top:50},
      {left:310,top:50},
      {left:50,top:600},
      {left:310,top:600},
    ])
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
      balls,
    }
  }
}