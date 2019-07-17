;(function() {


/* level:
   .3 红
   .2 黄
   .1 紫
*/
let txt = `

7-25
蝎子.3
梵高.1
梵高.2
黑豹猎手.2

8-22
小红帽.3
吕布.1
吕布.2
阴阳师.2


9-19
灯神.3
莫扎特.1
莫扎特.2
演说家.2

10.17
海王
高斯.1
高斯.2
拉格纳.2

11.14
赫尔墨斯
布狄卡.1
布狄卡.2
高斯.2


12.12
玉藻前.3
犯罪打击者.1
犯罪打击者.2
吕布.2


1.9
美杜莎.3
西楚霸王.1
西楚霸王.2
梵高.2


2.6
莫里亚蒂.3
查理曼.1
查理曼.2
西楚霸王.2





`

/*
*/

g_date = {}

let cur_date = null
txt
    .split('\n')
    .map(l => l.trim())
    .forEach( (l) => {
        if (l.length === 0) {
            cur_date = null
            return
        }
        if (cur_date === null) {
            cur_date = l
            return
        }
        g_date[l] = cur_date
    })

})()
