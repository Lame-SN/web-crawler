const fs = require('fs')

const request = require('syncrequest')
const cheerio = require('cheerio')

const log = console.log.bind(console)

class House {
    constructor() {
        // title/厅室/平方/朝向/地址/封面图片链接/租金
        this.title = ''
        this.tingshi = ''
        this.pingfang = 0
        this.chaoxiang = ''
        this.address = ''
        this.coverUrl = ''
        this.money = 0
    }
}

const houseFromDiv = (div) => {
    let e = cheerio.load(div)
    // 创建一个类的实例获取数据
    let house = new House()

    let item_title = e('.title-font')
    house.title = item_title.text()

    let item_size = e('.size')
    house.tingshi = item_size.find('span').eq(0).text()

    let ind = item_size.find('span').eq(2).text().indexOf('㎡')
    house.pingfang += Number(item_size.find('span').eq(2).text().slice(0, ind))

    house.chaoxiang = item_size.find('span').eq(4).text()

    let item_address = e('.area')
    let address2 = item_address.find('a').eq(1).find('span').text()
    let index = address2.indexOf('...')
    //address2 = address2.slice(0, index)

    house.address = item_address.find('a').eq(0).text().slice(1)

    house.coverUrl = e('.js-img').attr('src')

    house.money = Number(e('.price').find('span').eq(0).text())

    return house
}

const ensurePath = (dir) => {
    let exists = fs.existsSync(dir)
    if (!exists) {
        fs.mkdirSync(dir)
    }
}

const cachedUrl = (url) => {
    let dir = 'cached'
    ensurePath(dir)
    let cacheFile = dir + '/' + url.split('/')[4] + '.html'
    // 检查缓存文件是否存在
    let exists = fs.existsSync(cacheFile)
    if (exists) {
        let s = fs.readFileSync(cacheFile)
        return s
    } else {
        let r = request.get.sync(url)
        let body = r.body
        // 写入缓存
        fs.writeFileSync(cacheFile, body)
        return body
    }
}

const houseFromUrl = (url) => {
    // 获取 HTML 数据
    let body = cachedUrl(url)
    log('body', typeof body)
    let e = cheerio.load(body)
    let houseDivs = e('.f-list-item')
    log('houseDivs length', houseDivs.length)

    let houses = []
    for (let i = 1; i < houseDivs.length; i++) {
        let div = houseDivs[i]
        // 扔给 houseFromDiv 函数来获取到一个 house 对象
        let h = houseFromDiv(div)
        houses.push(h)
    }
    return houses
}

const saveHouse = (houses) => {
    let s = JSON.stringify(houses, null, 2)

    let dir = 'ganji'
    ensurePath(dir)
    let path = dir + '/' + 'ganji.json'
    fs.writeFileSync(path, s)
}

const downloadCovers = (houses) => {
    let dir = 'covers'
    ensurePath(dir)
    const request = require('request')
    for (let i = 0; i < houses.length; i++) {
        let h = houses[i]
        let url = h.coverUrl
        // 保存图片的路径
        let path = dir + '/' + h.ranking + '_' + h.name + '.jpg'
        request(url).pipe(fs.createWriteStream(path))
    }
}

const __main = () => {
    let houses = []
    for (let i = 2; i < 12; i++) {
        let url = `http://bj.ganji.com/zufang/pn${i}/`
        let moviesInPage = houseFromUrl(url)
        houses = [...houses, ...moviesInPage]
    }
    saveHouse(houses)
    //downloadCovers(houses)
    log('爬取成功啦, 数据已经写入到 ganji.json 中啦')
}

__main()

