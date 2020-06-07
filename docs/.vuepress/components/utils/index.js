function renderTime(date) {
    var dateee = new Date(date).toJSON()
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/-/g, '/')
}
export function dateFormat(date) {
    date = renderTime(date)
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const mon = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    return `${year}-${mon}-${day}`
}


const imgUrl = [
    'https://ae01.alicdn.com/kf/H046403451c8b4efabd9f0a794de68422a.jpg',
    'https://ae01.alicdn.com/kf/Hadb437cad7a5482c96560470e28bf0ceO.jpg',
    'https://ae01.alicdn.com/kf/Heca4a9627eb34f6b8099401eab7fb012Z.jpg',
    'https://ae01.alicdn.com/kf/H8ac3295c4a524772a9a05aacf68648876.jpg',
    'https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg',
    'https://ae01.alicdn.com/kf/H5fca4fbc6efe4cabb9840908f54f091da.jpg'
]


export let chooseImg = () => imgUrl[Math.ceil(Math.random()*6-1)];
