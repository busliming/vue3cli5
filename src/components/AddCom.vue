<template>
  <div class="form-group mt-10">
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      v-model="value"
      @keyup.enter="handleAdd"
    />
    <small id="emailHelp" class="form-text text-muted">请输入待办事项</small>
    <!-- {{todoList}} -->
    <!-- 待办事项 -->
    <div class="todo mt-10">
      <ul class="list-group mt-3" v-for="(todo,index) in todoList" :key="index">
        <li class="list-group-item d-flex justify-content-between">
          <div class="ml-1">
            <input type="checkbox" v-model="todo.isDone" @change="handleDone(index)">
            <label class="form-check-label ml-3" >{{todo.title}}</label>
          </div>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="handleDelete(index)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore();
    const state = reactive({
      value: '',
      todoList: store.getters.get_todos,
    });
    const handleAdd = () => {
      if(state.value.trim() == '') return;
      store.dispatch('add_todos',{
        id: state.todoList.length+1,
        title: state.value,
        content: state.todoList.length,
        isDone: false
      })
      state.value = ''
    };
    const handleDone = (index: Number) => {
      store.dispatch('done_todos',index)
    };
    const handleDelete = (index: Number) => {
      store.dispatch('delete_todos',index)
    };
    
    watch(state.todoList, () => {
      // console.log(nv,ov)
      localStorage.setItem('todos',JSON.stringify(state.todoList))
    })
    return {
      ...toRefs(state),
      handleAdd,
      handleDone,
      handleDelete
    };
  },
});
</script>

<style lang="scss" scoped>
.mt-10{
  margin-top: 10px;
}
</style>
