//import
import { reactive, watch, onMounted, ref, toValue } from "vue"
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
    let balls = reactive([])
    let flattenedData = ref([])
    let selectData = ref("")
    onMounted(async () => {
      //扁平化資料
      flattenedData.value = flattenData(datas);
      //隨機創造100個球
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
    function flattenData(data) {
      let result = [];
      data.forEach(item => {
        const { children, ...rest } = item;
        result.push(rest);
        if (children) {
          result = result.concat(flattenData(children));
        }
      });
      return result;
    }
    return {
      showPopup,
      clickMenu,
      datas,
      start,
      balls,
      selectData,
      flattenedData,
    }
  }
}