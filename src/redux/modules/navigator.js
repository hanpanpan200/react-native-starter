const NAVIGATOR_REQUEST = 'NAVIGATOR/REQUEST'

const navigatorInitialState = {}

const navigator = (state = navigatorInitialState, action) => {
  switch (action.type) {
    case NAVIGATOR_REQUEST:
      return { ...state }
    default:
      return state
  }
}

export default navigator