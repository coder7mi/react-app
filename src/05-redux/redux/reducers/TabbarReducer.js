const TabbarReducer = (
  preState = {
    show: true
  },
  action
) => {
  const { type } = action
  const newState = { ...preState }
  switch (type) {
    case 'hideTabbar':
      newState.show = false
      return newState

    case 'showTabbar':
      newState.show = true
      return newState

    default:
      return preState
  }
}

export default TabbarReducer
