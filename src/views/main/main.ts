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
      // {left:50,top:50},
      // {left:310,top:50},
      // {left:50,top:600},
      // {left:310,top:600},
    ])
    onMounted(async () => {
      for(var a = 0;a<=99;a++){
        balls.push({left:getRandomInt(window.innerWidth),top:getRandomInt(window.innerHeight)});
      }
    });
    function clickMenu(e){
      start.value = true;
      showPopup.value = e;
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
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