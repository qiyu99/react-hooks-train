import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './page/login'
import Buttons from './page/ui/buttons'
import Detail from './page/detail'
import Nomatch from './page/nomatch'

export default function IRouter () {
  return (
    <HashRouter>
      <App>
        <Route path="/login" component={Login} />
        <Route path="/admin" render={()=>
          <Admin>
            <Route path="/admin/ui/buttons" component={Buttons} />
            <Route component={Nomatch} />
          </Admin>
        } />
        <Route path="/order/detail" component={Detail} />
      </App>
    </HashRouter>
  );
}