import { fromJS } from 'immutable'

const CinemaListReducer = (
  preState = {
    list: []
  },
  action
) => {
  const { type } = action
  const newState = { ...preState }
  switch (type) {
    case 'changeList':
      newState.list = action.payload
      return newState

    default:
      return preState
  }
}

export default CinemaListReducer
