// echarts
const chartStore = {
    pie: null,
    bar: null,
    line: null,
}

const optionForPie = function(data) {
    let option = {
        title: {
            text: '北京租房户型信息一览',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '厅室',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    return option
}

const optionForHall = function(hall) {
    let data = _.map(hall, (v, k) => {
        let o = {
            name: k,
            value: v.length,
        }
        return o
    })
    let option = optionForPie(data)
    return option
}

const optionForBar = function(data) {
    let option = {
        title: {
            text: '北京房源 按地区划分',
        },
        xAxis: {
            data: data.axis,
            name: '房源地区',
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            name: '房源数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data.data
            }
        ]
    }
    return option
}

const optionForType = function(area) {
    let data = {
        axis: [],
        data: [],
    }
    _.each(area, (v, k) => {
        data.axis.push(k)
        data.data.push(v.length)
    })
    let option = optionForBar(data)
    return option
}

const optionForLine = function(data) {
    let option = {
        title: {
            text: '顺义城区租金'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0]
                let value = params.value
                let s = value[0] + ': ' + value[1]
                return s
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            name: '',
            type: 'value',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: '租金',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            min: 8,
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    };
    return option
}

const optionForArea = function(area) {
    let value = area['顺义城区']
    let data = _.map(value, (v, k) => {
        let o = {
            name: k,
            value: [k, v['money']],
        }
        return o
    })
    let option = optionForLine(data)
    return option
}

const renderChart = function(d) {
    let data = d

    let tingshi = _.groupBy(data, 'tingshi')
    let hallOption = optionForHall(tingshi)
    let pie = chartStore.pie
    pie.setOption(hallOption)

    let data2 = []
    for (let i of data) {
        // 顺义城区', '管庄', '亦庄', '长阳', '回龙观', '望京' 方庄  石门 良乡
        if (i['address'] === '顺义城区' || i['address'] === '管庄' || i['address'] === '亦庄'
            || i['address'] === '长阳' || i['address'] === '望京' || i['address'] === '方庄'
            || i['address'] === '石门' || i['address'] === '良乡') {
            data2.push(i)
        }
    }
    let type = _.groupBy(data2, 'address')
    let typeOption = optionForType(type)
    let bar = chartStore.bar
    bar.setOption(typeOption)

    let data1 = []
    for (let i of data) {
        if (i['address'] === '顺义城区') {
            data1.push(i)
        }
    }
    let address = _.groupBy(data1, 'address')
    let addressOption = optionForArea(address)
    let line = chartStore.line
    line.setOption(addressOption)
}

const fetchHouse = function() {
    let protocol = location.protocol
    // 如果是通过 node 运行，则调用 api 来获取数据
    if (protocol === 'http:') {
        // 使用 ajax 动态获取数据
        api.fetchHouses(function (d) {
            d = JSON.parse(d)
            renderChart(d)
        })
    } else {
        // 直接使用 JSON 数据 不从后台获取
        let d = houseJSON()
        log('d', d)
        renderChart(d)
    }
}

const initedChart = function() {
    _.each(chartStore, (v, k) => {
        let selector = '#' + k
        let element = document.querySelector(selector)
        let chart = echarts.init(element)
        chartStore[k] = chart
    })
}

const __main = function() {
    initedChart()
    fetchHouse()
}

// 页面内容载入完毕
$(document).ready(function() {
    __main()
})
