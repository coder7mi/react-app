import React, { Component } from 'react'
import myPropTypes from 'prop-types'

export default class Navbar extends Component {
  // 类属性
  static propTypes = {
    title: myPropTypes.string,
    leftShow: myPropTypes.bool,
    rightShow: myPropTypes.bool
  }

  // 默认值
  static defaultProps = {
    title: 'navbar',
    leftShow: true,
    rightShow: true
  }

  render() {
    const { title, leftShow, rightShow } = this.props
    return (
      <>
        {leftShow && <button>返回</button>}

        <span>{title}</span>

        {rightShow && <button>更多</button>}
      </>
    )
  }
}
