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
    selectData: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let openItems = ref([]);
    onMounted(async () => {
      openItems.value = [findFather(props.menuData,props.selectData)];
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
    function findFather(data, keyToFind) {
      for (const item of data) {
        if (item.key === keyToFind) {
          return keyToFind; // 如果找到匹配的 key，返回它自己
        }
    
        if (item.children) {
          const result = findFather(item.children, keyToFind);
          if (result) {
            return item.key; // 如果在子层中找到匹配的 key，返回当前层级的 key
          }
        }
      }
    
      return null; // 如果未找到匹配的 key，返回 null 或其他适当的值
    }
    watch(
      () => props.selectData,
      (val) => {
        openItems.value = [findFather(props.menuData,val)];
      })
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