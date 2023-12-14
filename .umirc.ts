import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Umijs',
  },
  dva: {
    immer: {
      enableES5: true,
      enableAllPlugins: true,
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});
