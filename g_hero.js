;(function() {

let txt = `

推特,推特,推特*3,收割者,维和部队,雷电工程师
,收割者,收割者*3,小丑,爆破大师,
,捍卫者,捍卫者*3,政治家,猎熊者,
佐罗,摔跤王,摔跤王*3,摇滚,乐章,
,雷电工程师,雷电工程师*3,堡垒,斯巴达勇士,
,登月,登月*3,傻白,亚历山大,
风暴,飞机,飞机*3,推特,篮球,
,摔跤王,摔跤王*3,摇滚,乐章,
,傻白,傻白*3,圣雄,威廉,
赫尔墨斯,高斯,高斯*3,摔跤王,大汉,
,飞机,飞机*3,推特,篮球,
,圣诞,,,,
猪女,蛇女,蛇女*2,篮球,维和部队,亚瑟王
,篮球,篮球*3,科西嘉怪物,堡垒,
,大汉,大汉*3,上帝之鞭,幸运的查理,
猴子,乐章,乐章*3,蛇女,血腥玛丽,
,半藏,半藏*3,篮球,雷电工程师,
,大汉,大汉*3,上帝之鞭,幸运的查理,
蝎子,黑豹,黑豹*3,乐章,蛇女,
,半藏,半藏*3,篮球,雷电工程师,
,大流士,大流士*3,电锯,洗脑大王,
玉藻前,吕布,吕布*3,摔跤王,电锯,
,黑豹,黑豹*3,乐章,蛇女,
,大流士,大流士*3,电锯,洗脑大王,
奥利,凯撒,凯撒*3,猎熊者,世界首富,
,爱贝,爱贝*3,无冕女王,贞德,
,演说家,演说家*3,捍卫者,乔治大叔,
猎魔,罗宾,罗宾*3,爱贝,武皇帝,
,始皇帝,始皇帝*3,凯撒,亚历山大,
,黑洞,黑洞*3,贞德,罗宾,
熊猫,痛苦画手,痛苦画手*3,威廉,乔治大叔,
,威廉,威廉*3,画师,彼得,
,黑洞,黑洞*3,贞德,罗宾,
美杜莎,梵高,梵高*3,爱贝,演说家,
,布狄卡,布狄卡*3,痛苦画手,罗宾,
,登月,登月*3,傻白,亚历山大,
范海辛,武皇帝,武皇帝*3,亚历山大,石油大王,
,亚历山大,亚历山大*3,凯撒,黑胡子,
,电锯,电锯*3,洗脑大王,乐章,
人鱼,提灯女士,提邓女士*3,领头人,凯撒,
,乔治大叔,乔治大叔*3,花木兰,演说家,
,阴阳师,阴阳师*3,电锯,蛇女,
海王,拉格纳,拉格纳*3,武皇帝,爱贝,
,提灯女士,提邓女士*3,领头人,凯撒,
,阴阳师,阴阳师*3,电锯,蛇女,
船长,大汉,大汉*3,上帝之鞭,幸运的查理,
,妖僧,妖僧*3,大汉,推特,
,拉格纳,拉格纳*3,武皇帝,爱贝,
吸血鬼,妖僧,妖僧*3,大汉,推特,
,大汉,大汉*3,上帝之鞭,幸运的查理,
,电锯,电锯*3,洗脑大王,乐章,
小红帽,阴阳师,阴阳师*3,电锯,蛇女,
,妖僧,妖僧*3,大汉,推特,
,大流士,大流士*3,电锯,洗脑大王,
莫里亚蒂,西楚霸王,,,,
,阴阳师,阴阳师*3,电锯,蛇女,
,妖僧,妖僧*3,大汉,推特,
伊露维塔,傻白,傻白*3,圣雄,威廉,
,演说家,演说家*3,捍卫者,乔治大叔,
,政治家,政治家*3,演说家,贞德,
唐吉,登月,登月*3,傻白,亚历山大,
,傻白,傻白*3,圣雄,威廉,
,演说家,演说家*3,捍卫者,乔治大叔,
灯神,莫扎特,莫扎特*3,黑洞,政治家,
,黑洞,黑洞*3,贞德,罗宾,
,演说家,演说家*3,捍卫者,乔治大叔,
`

    let reds = {}
    let cur_k = null
    let lines = txt
        .split('\n')
        .map(e => e.trim())
        .filter(e => e.length > 0)
        .map(e => e.split(',').map(z => z.trim()) )
        .forEach( (cells) => {
            if (cells[0].length > 0 || !cur_k) {
                // new hero
                cur_k = cells[0]
                reds[cur_k] = []
            }
            reds[cur_k].push(cells.slice(1).filter(x => x.length > 0))
        })

    /* target format:
         { label: 'root',
            children: [
            {
                label: 'c1',
                children: [
                { label: 'c11' },
                { label: 'c12' },
                ]
            },
            ],
         }
     */

    /*
      now reds = {
         red: [
           [yellow, purple, purple, ...],
           [yellow, purple, purple, ...],
           [yellow, purple, purple, ...],
         ]
      }
    */
    console.log(reds)

    g_hero = []
    function getNameFromLabel(label) {
        return label.replace(/\*\d+$/, '')
    }

    for (let red in reds) {
        let d = {}
        d.label = red
        d.name = getNameFromLabel(red)
        d.level = 3
        d.children = []
        for (let yellow_purples of reds[red]) {
            let z = {
                label: yellow_purples[0],
                name: getNameFromLabel(yellow_purples[0]),
                level: 2,
            }
            let purples = yellow_purples.slice(1)
                .map(x => ({
                    label: x,
                    name: getNameFromLabel(x),
                    level: 1,
                }) )
            if (purples.length > 0) {
                z.children = purples
            }
            d.children.push(z)
        }
        g_hero.push(d)
    }
    console.log(g_hero)
    
    function getLabels(o) {
        if (o.name) {
            if (!debug_all_heros[o.name]) {
                debug_all_heros[o.name] = 1
            }
        }
        if (o.children) {
            for (let child of o.children) {
                getLabels(child)
            }
        }
    }

    let debug_all_heros = {}
    for (let h of g_hero) {
        getLabels(h)
    }
    console.log('all_heros:', Object.keys(debug_all_heros).join(' '))
})()
