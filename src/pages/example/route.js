import {
  WelcomePage,
  CounterPage,
  Layout,
} from './'

export default {
  path: 'examples',
  name: 'Examples',
  component: Layout,
  childRoutes: [
    {
      path: '',
      name: 'Welcome page',
      component: WelcomePage
    },
    {
      path: 'counter',
      name: 'Counter page',
      component: CounterPage,
    },
  ]
}