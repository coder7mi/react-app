import React, { Component } from 'react'

//BrowserRouter 重名名为 Router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

function isAuth() {
  return localStorage.getItem('token')
}

// BrowserRouter 没有#的路径，真正朝后端发请求页面，后端没有对应的处理路径，就会404
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          {this.props.children}
          <Switch>
            <Route path="/films" component={Films} />
            <Route path="/cinemas" component={Cinemas} exact />
            <Route path="/cinemas/search" component={Search} />

            <Route
              path="/center"
              render={(props) => {
                return isAuth() ? <Center /> : <Redirect to="/login" />
              }}
            />

            {/* 动态路由，"："不能省略，为占位符 */}
            {/* <Route path="/detail/:id" component={Detail} /> */}

            <Route path="/detail" component={Detail} />
            <Route path="/login" component={Login} />
            <Route path="/city" component={City} />

            {/* 重定向 
                模糊匹配
                精确匹配 exact*/}
            <Redirect from="/" to="/films" exact />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
