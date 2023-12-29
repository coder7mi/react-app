import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledUl = styled.ul`
      background: green;
      li {
        color: yellow;
      }
    `
    return (
      <div>
        <StyledUl>
          <li>电影</li>
          <li>影院</li>
          <li>我的</li>
        </StyledUl>
      </div>
    )
  }
}
