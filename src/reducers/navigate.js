const initialState = {}

const navigate = (state = initialState, action) => {
  switch (action.type) {
    case 'CART': return { ...state, choice: action.type }
    case 'REQUESTS': return { ...state, choice: action.type }
    case 'PROVIDERS': return { ...state, choice: action.type }
    case 'PRODUCTS': return { ...state, choice: action.type }
    case 'PROFILE': return { ...state, choice: action.type }
    default: return state
  }
}

export default navigate
