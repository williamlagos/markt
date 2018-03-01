const navigate = (state = {}, action) => {
  switch (action.type) {
    case 'CART': return { choice: action.type }
    case 'REQUESTS': return { choice: action.type }
    case 'PROVIDERS': return { choice: action.type }
    case 'PRODUCTS': return { choice: action.type }
    case 'PROFILE': return { choice: action.type }
    default: return state
  }
}

export default navigate
