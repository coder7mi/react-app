import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    const StyledInput = styled.input`
      outline: none;
      border: 1px solid gray;
    `
    const StyledDiv = styled.div`
      background: ${(props) => props.bg || 'red'};
      width: 200px;
      height: 200px;
    `
    return (
      <div>
        <StyledInput type="text" placeholder="输入" />

        <StyledDiv bg="blue"></StyledDiv>
      </div>
    )
  }
}
