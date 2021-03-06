import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue";
import Welcome from "./components/Welcome.vue";
import HistoryBrief from "./components/history/HistoryBrief.vue";
import HistoryAdd from "./components/history/HistoryAdd.vue";
import HistoryDetial from "./components/history/HistoryDetial.vue";
import HistoryEdit from "./components/history/HistoryEdit.vue";
import HistoryNew from "./components/history/HistoryNew.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home', component: Home, redirect: '/historyNew', children: [
        {path: '/welcome', component: Welcome},
        {path: '/historyBrief', component: HistoryBrief},
        {path: '/historyAdd', component: HistoryAdd},
        {path: '/historyDetial/:id', component: HistoryDetial},
        {path: '/historyEdit', component: HistoryEdit},
        {path: '/historyNew', component: HistoryNew},
      ]
    }
  ],
  mode: "history"
})


export default router
