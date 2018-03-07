export const showCart = () => ({ type: 'CART' })
export const showRequests = () => ({ type: 'REQUESTS' })
export const showProviders = () => ({ type: 'PROVIDERS' })
export const showProfile = () => ({ type: 'PROFILE' })

export const showProgress = (item) => ({ type: 'PROGRESS', item })
export const showProducts = (query) => ({ type: 'PRODUCTS', query })

export const addToCart = (items) => ({
  type: 'ADD_CART',
  items
})
