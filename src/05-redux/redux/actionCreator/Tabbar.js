function hide() {
  //逻辑处理...

  return {
    type: 'hideTabbar'
  }
}

function show() {
  return {
    type: 'showTabbar'
  }
}

export { hide, show }
