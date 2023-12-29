function reducer(
  preState = {
    list1: [],
    list2: []
  },
  action = {}
) {
  const newState = { ...preState }
  switch (action.type) {
    case 'change_list1':
      console.log(action)
      newState.list1 = action.payload
      return newState

    case 'change_list2':
      console.log(action)
      newState.list2 = action.payload
      return newState
    default:
      return preState
  }
}

export default reducer
