const CityReducer = (
  preState = {
    city: '北京'
  },
  action
) => {
  const { type } = action
  const newState = { ...preState }
  switch (type) {
    case 'changeCity':
      newState.city = action.payload
      return newState

    default:
      return preState
  }
}

export default CityReducer
