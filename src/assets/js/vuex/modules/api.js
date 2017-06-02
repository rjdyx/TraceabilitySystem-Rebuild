const host = require(projectRoot + 'env')

const state = {
    pre: ''
}
// getters
const getters = {
    PRE_URL: state => {
        let regx = /^\/{1,}/g
        url = url.replace(regx, '')
        return host + '/api/' + state.pre
    }
}

export default {
    getters
}
