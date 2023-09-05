//import
import { reactive, watch, onMounted, ref } from "vue"
//start
export default {
  name: 'menuItem',
  components: {
  },
  props: {
    menuData: {
      type: Array,
      default: [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    let openItems = ref([]);
    onMounted(async () => {
    });
    function toggleItem(item) {
      if (isOpen(item)) {
        // 如果已經展開，則關閉
        openItems.value.splice(openItems.value.indexOf(item.key), 1);
      } else {
        // 如果未展開，則展開並收合其他已展開的項目
        openItems.value = [item.key];
        
      }
    }
    function isOpen(item) {
      return openItems.value.includes(item.key);
    }
    function isSelected(item) {
      return openItems.value.includes(item.key);
    }
    function chanbeBackground(item) {
      if(props.level!=0)return false
      return openItems.value.includes(item.key);
    }
    return {
      props,
      toggleItem,
      openItems,
      isOpen,
      isSelected,
      chanbeBackground,
    }
  }
}