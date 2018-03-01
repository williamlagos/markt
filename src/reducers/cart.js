const initialState = { items: [] }

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': return { ...state, items: [action.items] }
    default: return state
  }
}

export default cart
