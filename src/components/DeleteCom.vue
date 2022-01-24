<template>
  <div class="todo mt-1">
    <ul class="list-group mt-3" v-for="(todo,index) in todoList" :key="index">
      <li class="list-group-item d-flex justify-content-between">
        <div class="ml-1">
          <label class="form-check-label ml-3" >{{todo.title}}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore();
    const state = reactive({
      todoList: store.getters.get_deletes
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>