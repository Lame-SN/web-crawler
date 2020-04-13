const fs = require('fs')

const houseFilePath = 'ganji/ganji.json'

const loadHouses = () => {
    let content = fs.readFileSync(houseFilePath, 'utf8')
    let ms = JSON.parse(content)
    return ms
}

const m = {
    data: loadHouses()
}

m.all = function() {
    let ms = this.data
    return ms
}

module.exports = m
