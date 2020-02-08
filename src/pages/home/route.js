import {
  DefaultPage,
} from './'


export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    {
      path: 'default-page',
      name: 'Default Page',
      component: DefaultPage,
      isIndex: true,
    },
  ]
}