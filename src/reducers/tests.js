const tests = (state = '', action) => {
  switch (action.type) {
    case 'TEST': return 'ABC'
    default: return ''
  }
}

export default tests
