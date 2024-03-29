const initialState = {}

const navigate = (state = initialState, action) => {
  switch (action.type) {
    case 'CART': return { ...state, choice: action.type }
    case 'REQUESTS': return { ...state, choice: action.type }
    case 'PROVIDERS': return { ...state, choice: action.type }
    case 'PROFILE': return { ...state, choice: action.type }
    case 'PROGRESS': return { ...state, choice: action.type, item: action.item || {} }
    case 'PRODUCTS': return { ...state, choice: action.type, query: action.query || '' }
    default: return state
  }
}

export default navigate
