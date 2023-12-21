import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import CommingSoon from './films/CommingSoon'
import NowPlaying from './films/NowPlaying'

export default class Films extends Component {
  render() {
    return (
      <div>
        <span>films</span>
        <Switch>
          <Route path="/films/nowplaying" component={NowPlaying} />
          <Route path="/films/commingSoon" component={CommingSoon} />

          <Redirect from="/films" to="/films/nowplaying" />
        </Switch>
      </div>
    )
  }
}
