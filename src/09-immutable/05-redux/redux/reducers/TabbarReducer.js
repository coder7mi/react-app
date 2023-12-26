import { fromJS } from 'immutable'

const TabbarReducer = (
  preState = fromJS({
    show: true
  }),
  action
) => {
  const { type } = action
  switch (type) {
    case 'hideTabbar':
      preState.set('show', false)
      return preState

    case 'showTabbar':
      preState.set('show', true)
      return preState

    default:
      return preState
  }
}

export default TabbarReducer
