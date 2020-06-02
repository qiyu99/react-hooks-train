import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './page/login'
import Buttons from './page/ui/buttons'
import Message from './page/ui/message'
import FormLogin from './page/form/login'
import Detail from './page/detail'
import Nomatch from './page/nomatch'

export default function IRouter () {
  return (
    <HashRouter>
      <App>
        <Route exact path="/" render={() => (<Redirect to="/admin"/>)}/>
        <Route path="/login" component={Login} />
        <Route path="/admin" render={()=>
          <Admin>
            <Switch>
              <Route path="/admin/ui/buttons" component={Buttons} />
              <Route path="/admin/ui/message" component={Message} />
              <Route path="/admin/form/login" component={FormLogin} />
              <Route component={Nomatch} />
              <Redirect from="/*" to="/admin" />
            </Switch>
          </Admin>
        } />
        <Route path="/order/detail" component={Detail} />
      </App>
    </HashRouter>
  );
}