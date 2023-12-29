import React, { Component, Suspense } from 'react'

const ComingSoon = React.lazy(() => import('./components/ComingSoon'))
const Nowplaying = React.lazy(() => import('./components/Nowplaying'))

export default class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>正在加载</div>}>
          <ComingSoon></ComingSoon>
          <Nowplaying></Nowplaying>
        </Suspense>
      </div>
    )
  }
}
