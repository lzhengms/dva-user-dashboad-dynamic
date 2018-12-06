import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic'



// Router4异步加载路由,router4移除了getComponent
// 异步加载import和require：动态引入
// import users from '' :编译时打进去的，是静态引入的



function RouterConfig({ history, app }) {
 /*  const routes = [
    {
      path: '/users',
      name: 'UsersPage',
      exact: true,
      component() {
        return asyncComponent(Users, app, require('./models/users'))
      }
    },
    {
      path: '/',
      name: 'IndexPage',
      exact: true,
      component() {
        return asyncComponent(IndexPage)
      }
    }
  ]; */

  // return <Router history={history} routes={routes} />;


  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={dynamic({app, component: () => import('./routes/IndexPage')})} />
        <Route path="/users" exact component={dynamic({app, component: () => import('./routes/Users'), models: () => [import('./models/users')]})} />
        {/* <Route path="/" exact component={IndexPage} />
        <Route path="/users" exact component={Users} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
