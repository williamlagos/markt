export const showCart = () => ({ type: 'CART' })
export const showRequests = () => ({ type: 'REQUESTS' })
export const showProviders = () => ({ type: 'PROVIDERS' })
export const showProducts = () => ({ type: 'PRODUCTS' })
export const showProfile = () => ({ type: 'PROFILE' })

export const addToCart = (items) => ({
  type: 'ADD_CART',
  items
})
