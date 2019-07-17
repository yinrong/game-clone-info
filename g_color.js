;(function() {

let txt = `

#FDFEE1
推特
佐罗 风暴


#FFF205
捍卫者
收割者


#FF6C66
猪女 蛇女
爆破大师


#A7FF66
奥利
猎魔


#E77713
大汉



#10B4C1
范海辛 武皇帝


`

g_color = {}

let cur_color = null
txt
    .split('\n')
    .map(l => l.trim())
    .forEach( (l) => {
        if (l.length === 0) {
            cur_color = null
            return
        }
        if (cur_color === null) {
            cur_color = l
            return
        }
        l.split(/ +/).forEach(z => g_color[z] = cur_color)
    })

})()
