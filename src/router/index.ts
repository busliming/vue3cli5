import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddCom from '@/components/AddCom.vue'
import DoneCom from '@/components/DoneCom.vue'
import DeleteCom from '@/components/DeleteCom.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children: [
      {
        path: '',
        redirect: { name: 'Add' }
      },
      {
        path: '/add',
        name: 'Add',
        component: AddCom
      },
      {
        path: '/done',
        name: 'Done',
        component: DoneCom
      },
      {
        path: '/delete',
        name: 'Delete',
        component: DeleteCom
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
