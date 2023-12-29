import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    const StyledChild = styled(Child)`
      background: red;
    `

    const MyBtn = styled.button`
      color: red;
    `
    const BigBtn = styled(MyBtn)`
      font-size: 24px;
    `
    return (
      <div>
        <StyledChild />
      </div>
    )
  }
}

function Child(props) {
  return <div className={props.className}>Child</div>
}
