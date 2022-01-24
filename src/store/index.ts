import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos' ) || '[]'),
    dones: [] as string[],
    deletes: [] as string[],
  },
  getters: {
    get_todos(state){
      return state.todos
    },
    get_dones(state){
      return state.dones
    },
    get_deletes(state){
      return state.deletes
    }
  },
  mutations: {
    add_todos(state,todo){  
      state.todos.push(todo)
    },
    done_todos(state,index){
      state.dones = state.todos.splice(index,1)
    },
    delete_todos(state,index){
      state.deletes = state.todos.splice(index,1)
    }
  },
  actions: {
    add_todos({commit},todo){
      commit('add_todos', todo)
    },
    done_todos({commit},index){
      commit('done_todos', index)
    },
    delete_todos({commit},index){
      commit('delete_todos', index)
    }
  },
  modules: {
  }
})
