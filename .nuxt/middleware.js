const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['router'] = require('../middleware/router.js')
middleware['router'] = middleware['router'].default || middleware['router']

export default middleware
