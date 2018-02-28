const navigate = (state = {}, action) => {
  switch (action.type) {
    case 'CART':
      return { choice: action.type, show: action.show }
    case 'REQUESTS':
      return { choice: action.type, show: action.show }
    case 'PROVIDERS':
      return { choice: action.type, show: action.show }
    case 'PRODUCTS':
      return { choice: action.type, show: action.show }
    case 'PROFILE':
      return { choice: action.type, show: action.show }
    default:
      return state
  }
}

export default navigate
