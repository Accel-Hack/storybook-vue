import * as VueRouter from 'vue-router';
import TopPage from '../src/components/pages/TopPage/TopPage.vue';
import ProfilePage from '../src/components/pages/ProfilePage/ProfilePage.vue';

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Top',
    component: () => TopPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => ProfilePage
  }
];

export const createRouter = (type: 'memory' | 'history') => {
  const history =
    type === 'memory'
      ? VueRouter.createMemoryHistory()
      : VueRouter.createWebHistory();
  return VueRouter.createRouter({ history, routes });
};
