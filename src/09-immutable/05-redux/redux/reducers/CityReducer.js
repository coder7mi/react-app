import { fromJS } from 'immutable'
const CityReducer = (
  preState = {
    city: '北京'
  },
  action
) => {
  const { type } = action
  const newState = fromJS(preState)
  switch (type) {
    case 'changeCity':
      newState.set('city', action.payload).toJS()
      return newState

    default:
      return preState
  }
}

export default CityReducer
