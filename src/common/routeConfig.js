import { App } from '../pages/home'
import { PageNotFound } from '../pages/common'
import homeRoute from '../pages/home/route'
import commonRoute from '../pages/common/route'
import exampleRoute from '../pages/example/route'
import _ from 'lodash';

const childRoutes = [
  homeRoute,
  commonRoute,
  exampleRoute
]

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    ...childRoutes,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ].filter(r => r.component || ( r.childRoutes && r.childRoutes.length > 0 ))
}];

function handleIndexRoute(route) {
  if(!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = _.find(route.childRoutes, (child => child.isIndex));
  if(indexRoute) {
    const first = { ...indexRoute };
    first.path = '';
    first.exact = true;
    first.autoIndexRoute = true;
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute)
}

routes.forEach(handleIndexRoute);
export default routes;