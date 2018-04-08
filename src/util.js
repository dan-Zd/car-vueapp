/**
 * Created by jason on 2017/9/4.
 */
// 格式化金钱
function formatMoney(number, places, symbol, thousand, decimal, isCent) {

    isCent = isCent || true

    if (isCent) {
        number = number / 100 || 0
    } else {
        number = number || 0
    }
    places = !isNaN(places = Math.abs(places)) ? places : 2
    symbol = symbol !== undefined ? symbol : ''
    thousand = thousand || ','
    decimal = decimal || '.'
    var negative = number < 0 ? '-' : '',
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + '',
        j = (j = i.length) > 3 ? j % 3 : 0
    return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

//计算停车单开始时间与结束时间的时长
function calParkingDuration(begin, end) {
    function formatSeconds(value) {
        var t = parseInt(value)// 秒
        var t1 = 0// 分
        var t2 = 0// 小时
        if (t > 60) {
            t1 = parseInt(t / 60)
            t = parseInt(t % 60)
            if (t1 > 60) {
                t2 = parseInt(t1 / 60)
                t1 = parseInt(t1 % 60)
            }
        }
        var result = '' + parseInt(t) + '秒'
        if (t1 > 0) {
            result = '' + parseInt(t1) + '分钟' + result
        }
        if (t2 > 0) {
            result = '' + parseInt(t2) + '小时' + result
        }
        return result
    }
    if (begin && end) {
        let duration = end - begin
        return formatSeconds(duration / 1000)
    }
    return '无'
}

//格式化时间(传入时间戳,毫秒级)
function formatTime(val) {
    if (!val) {
        return ''
    }
    function f(v) {
        return v < 10 ? '0' + v : v
    }

    let time = new Date(val)
    let y = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    let h = time.getHours()
    let mm = time.getMinutes()
    let s = time.getSeconds()
    return y + '-' + f(m) + '-' + f(d) + ' ' + f(h) + ':' + f(mm) + ':' + f(s)
}
export {formatMoney,calParkingDuration,formatTime}
