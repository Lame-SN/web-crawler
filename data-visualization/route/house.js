const house = require('../model/house')

const all = {
    path: '/api/house/all',
    method: 'get',
    func: function(request, response) {
        let ms = house.all()
        let r = JSON.stringify(ms)
        response.send(r)
    }
}

const routes = [
    all,
]

module.exports.routes = routes
