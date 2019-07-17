;(function() {

let txt = `

#c7ecfe
风暴
飞机
摔跤王
摇滚
堡垒
推特
佐罗 风暴
收割者
高斯 赫尔墨斯

#fc6105
猪女 蛇女
爆破大师
维和部队
雷电工程师 小丑
爆破大师
乐章 篮球 斯巴达勇士 亚瑟王 科西嘉怪物 猴子 玉藻前 血腥玛丽 半藏 蝎子 黑豹


#71cd2a
奥利
猎魔
猎熊者
猎魔 罗宾 痛苦画手 熊猫 始皇帝 画师 彼得
武皇帝 亚历山大 威廉 凯撒
爱贝 石油大王 美杜莎

#6ed9ed
范海辛 武皇帝
黑胡子 范海辛 人鱼 提灯女士 领头人 花木兰 海王 拉格纳 无冕女王 乔治大叔


#b494c6
大汉 上帝之鞭 幸运的查理 阴阳师 船长 妖僧 吸血鬼 小红帽
大流士 电锯 洗脑大王

#fed807
捍卫者
政治家
登月
傻白
圣雄
贞德 演说家 唐吉 灯神 莫扎特 黑洞
伊露维塔


`

/* 未分类：

圣诞
吕布
世界首富
梵高
布狄卡
莫里亚蒂
西楚霸王


*/

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
