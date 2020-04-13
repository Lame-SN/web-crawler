const houseJSON = function() {
    let d = [
      {
        "title": "双兴北区 风格装修 超值好房 宽敞大方 步行到地铁",
        "tingshi": "1室1厅1卫",
        "pingfang": 49.2,
        "chaoxiang": "西向",
        "address": "顺义城区",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/d639c0de0827d2e14db09d0153508f4a?w=294&h=220&crop=1",
        "money": 1760
      },
      {
        "title": "朝阳东坝  东湾家园两居室随时入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 80,
        "chaoxiang": "南北向",
        "address": "东坝",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/c431485c54eb22368cba77f10ab09f78?w=294&h=220&crop=1",
        "money": 5001
      },
      {
        "title": "未来假日花园 联排4层别墅出租 居家办公会所均可",
        "tingshi": "3室4厅3卫",
        "pingfang": 320,
        "chaoxiang": "南北向",
        "address": "马家堡",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/2fd6ef2b61d9aaee35e097e993dfcae4?w=294&h=220&crop=1",
        "money": 26000
      },
      {
        "title": "管庄地铁站 杨闸环岛 北京新天地 杨闸新村 一居室 免物业",
        "tingshi": "1室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "管庄",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/fc9bf1e37f6d69835c7718469a9e3126?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "爱心服务 华龙美树第五站超精装修，不后悔的选择",
        "tingshi": "1室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "东向",
        "address": "管庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/626d5fff4ac6e90d7f9e19095e3b5ccc?w=294&h=220&crop=1",
        "money": 3500
      },
      {
        "title": "天通苑北二区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 103,
        "chaoxiang": "西南向",
        "address": "天通苑",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2195f53ab09134c13b04b7505c0b967b8.jpg?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "铁科院 四道口 财大交大家属院交大东路一居",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "交通大学",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/acec7410bd716276fb36a380535b9f3f?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "红星北里小区 押一付一 水电均摊 南北向 10min到地铁",
        "tingshi": "1室1厅1卫",
        "pingfang": 51.48,
        "chaoxiang": "西向",
        "address": "旧宫 ",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/f5f624e6196d0b3d38dd02e49cd29235?w=294&h=220&crop=1",
        "money": 3110
      },
      {
        "title": "首创美澜湾 刚出租两居室  全新设施",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "观音寺",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/eef73b69a72f8f45d32e3372f4d90d61?w=294&h=220&crop=1",
        "money": 3500
      },
      {
        "title": "崇文门 都市馨园 精装南向一居室 家电齐全 拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 37,
        "chaoxiang": "南向",
        "address": "崇文门",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/52f496852c35ec85589eb2c1497504c4?w=294&h=220&crop=1",
        "money": 6000
      },
      {
        "title": "陶然亭 平原里 便宜一居室 家具家电齐全看房方便 拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 43,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/2fa91dc1676263de3fe865e413f72bd3?w=294&h=220&crop=1",
        "money": 5100
      },
      {
        "title": "水恋晶城 2室2厅1卫",
        "tingshi": "2室2厅1卫",
        "pingfang": 95,
        "chaoxiang": "南北向",
        "address": "武夷花园",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v243042414369d42d596aca4d41dce6b8e.jpg?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "加华印象街 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "西向",
        "address": "武夷花园",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v28994e0c1e8fd42acbafb4b21a5bffcea.jpg?w=294&h=220&crop=1",
        "money": 3600
      },
      {
        "title": "花园小区 精装修2居室 家电齐全 房子干净 不容错过",
        "tingshi": "2室1厅1卫",
        "pingfang": 88,
        "chaoxiang": "南北向",
        "address": "密云城区",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/c50485ae382f611d7998f89701f1b498?w=294&h=220&crop=1",
        "money": 2300
      },
      {
        "title": "苹果社区(南区) 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "北向",
        "address": "双井",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v25e93e249001244cc96daf1e9a267a3dd.jpg?w=294&h=220&crop=1",
        "money": 9300
      },
      {
        "title": "王F温馨公寓 三层123平老式精装三居室 看房有钥匙",
        "tingshi": "3室2厅2卫",
        "pingfang": 123,
        "chaoxiang": "南北向",
        "address": "北七家",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/9c4bc79cd412f7606e73f116c89e2871?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "南四环东路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 30,
        "chaoxiang": "南向",
        "address": "小红门",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v23cf52372df5a49bc9e4d434f5b465b86.jpg?w=294&h=220&crop=1",
        "money": 2100
      },
      {
        "title": "业主直租 自住房 果园地铁沿线 广渠路口 大方居精装两居室",
        "tingshi": "2室2厅1卫",
        "pingfang": 90,
        "chaoxiang": "东南向",
        "address": "九棵树",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/9315b7d51986d35d417b54da673ba5d0?w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "北京金隅混凝土 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 54,
        "chaoxiang": "南北向",
        "address": "卢沟桥",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2f936b6e0b4e44b64a4c3e4e6e0d8b6b1.jpg?w=294&h=220&crop=1",
        "money": 2600
      },
      {
        "title": "东王庄小区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 63,
        "chaoxiang": "南北向",
        "address": "五道口",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v28359c1cf32a346f48df97a39ab685cb0.jpg?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "大河庄苑 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 58,
        "chaoxiang": "东向",
        "address": "中关村",
        "coverUrl": "http://pic6.58cdn.com.cn/p1/small/n_v1bkuyfvjuopffptelvrjq.jpg?w=294&h=220&crop=1",
        "money": 7700
      },
      {
        "title": "六道口社区 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 44.7,
        "chaoxiang": "南向",
        "address": "学院路",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v25e3861b3a7ad42cca26bbbe00b2e4a53.jpg?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "国贸 财富中心 二次装修 家具全 拎包入住 干净整洁 随时看",
        "tingshi": "1室1厅1卫",
        "pingfang": 100.79,
        "chaoxiang": "北向",
        "address": "建外大街",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/e5eb597ccd5ed1fa6d06a4ba879ac752?w=294&h=220&crop=1",
        "money": 18000
      },
      {
        "title": "温泉花园(A区) 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "北七家",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v2def1d3ed1e2741e18ca2aed9381f9173.jpg?w=294&h=220&crop=1",
        "money": 750
      },
      {
        "title": "椿树两居，业主诚心出租，看房随时，价钱可谈。",
        "tingshi": "2室1厅1卫",
        "pingfang": 63.35,
        "chaoxiang": "东西向",
        "address": "宣武门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/ccc12bfc403c1538760a26a1897657d3?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "广安门 金融街 7号线达官营 荣丰2008 南向复式 装修好",
        "tingshi": "1室1厅1卫",
        "pingfang": 32.65,
        "chaoxiang": "南向",
        "address": "广安门外",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/64d7c9f51033a8c432c69eaf71469fc2?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "8号线育新地铁站附近  西三旗公交站育新嘉园两居室带电梯",
        "tingshi": "2室1厅1卫",
        "pingfang": 91.56,
        "chaoxiang": "南北向",
        "address": "西三旗",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/1d73cd2421786c163c343b6400394d94?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "展览路 庄 南北露园 外交学院 阜成门 阜外医院附近",
        "tingshi": "3室2厅1卫",
        "pingfang": 140,
        "chaoxiang": "东北向",
        "address": "展览路",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/ccf84a442b07163cf05f72adaa4986e8?w=294&h=220&crop=1",
        "money": 16000
      },
      {
        "title": "瀛海朗苑 瀛海家园 兴悦居 8号线南段德茂站图片真实拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "南北向",
        "address": "瀛海镇",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/436144385b1e9fd026d4a877630fce6b?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "誉天下二期类独栋 位置好 花园大 随时拎包入住",
        "tingshi": "5室2厅4卫",
        "pingfang": 385,
        "chaoxiang": "南北向",
        "address": "天竺",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/5258ef25dbf40d311e9430af0715bc36?w=294&h=220&crop=1",
        "money": 26000
      },
      {
        "title": "金台路 朝阳公园 团结湖  道家园小区简装两居 看房随时联系",
        "tingshi": "2室1厅1卫",
        "pingfang": 62,
        "chaoxiang": "南向",
        "address": "甜水园",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/125d8e7d6353df9db674e5dcc3e358ac?w=294&h=220&crop=1",
        "money": 6800
      },
      {
        "title": "新装修 南北两居 9月初起租,看房随时预约即可 家具可配齐",
        "tingshi": "2室2厅1卫",
        "pingfang": 96,
        "chaoxiang": "南北向",
        "address": "来广营",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/5085a6336777fec6e0396f6ac459b943?w=294&h=220&crop=1",
        "money": 9500
      },
      {
        "title": "皂君东里 交大F中 大钟寺 四道口 精装两居室急租 本房照片",
        "tingshi": "2室1厅1卫",
        "pingfang": 59,
        "chaoxiang": "南北向",
        "address": "皂君庙",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/5a8dea2cd5e852e65091b94e9855f3e6?w=294&h=220&crop=1",
        "money": 8800
      },
      {
        "title": "崇文门新景家园 精装2居室 东南向家电齐全居家合租密码锁",
        "tingshi": "2室1厅1卫",
        "pingfang": 61.62,
        "chaoxiang": "东南向",
        "address": "崇文门",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/125346a7dbc9297368a1fc01c72274d6?w=294&h=220&crop=1",
        "money": 7600
      },
      {
        "title": "崇文门25号线磁器口 新景家园 婚房一居 国瑞城 花市枣苑",
        "tingshi": "1室1厅1卫",
        "pingfang": 42.93,
        "chaoxiang": "东向",
        "address": "崇文门",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/cc3f47f285e03453291e2798445c214e?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "篱笆房站，首创新悦都，南北通透，家具家电全齐，业主直签",
        "tingshi": "3室2厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/4715c75655b160315705d7799087cec7?w=294&h=220&crop=1",
        "money": 3100
      },
      {
        "title": "夏日租房补贴持续中 西北旺 大牛坊(一期) 性价比高 带飘窗",
        "tingshi": "1室1厅1卫",
        "pingfang": 58.96,
        "chaoxiang": "北向",
        "address": "西北旺",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/2fc81a324d5e886905759529e0602fb7?w=294&h=220&crop=1",
        "money": 4690
      },
      {
        "title": "阳春温馨三居室 业主直租 看房方便 装修好拎包入住 核心地段",
        "tingshi": "3室2厅2卫",
        "pingfang": 127.76,
        "chaoxiang": "西北向",
        "address": "万柳",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/7f771d3d74e5528d61022fe04cddc350?w=294&h=220&crop=1",
        "money": 17000
      },
      {
        "title": "北京市通州区马驹桥镇神龙新屯三居室出租 紧邻 同济南路亦庄线",
        "tingshi": "3室1厅1卫",
        "pingfang": 100,
        "chaoxiang": "南向",
        "address": "马驹桥",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/d7e19d7f4ed5bd2c9e38c5f86406d373?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "4号线新宫 万达旁 南庭新苑南区4325 朝南精装一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 52,
        "chaoxiang": "东向",
        "address": "新宫",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/009b70fd7cfc94348511707503e008d2?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "兴胜路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 28,
        "chaoxiang": "南北向",
        "address": "南彩",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2761940a90df9433caf558b96aaa8fb26.jpg?w=294&h=220&crop=1",
        "money": 1000
      },
      {
        "title": "期颐百年 专属服务 水电均摊 朝南采光好 地铁方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 15.36,
        "chaoxiang": "南向",
        "address": "新发地",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/76d4ad40e07153c75bf2f40ce750c6d9?w=294&h=220&crop=1",
        "money": 2050
      },
      {
        "title": "海上海花园 上海建筑 中国电信 自然新天地写字楼 实拍大两居",
        "tingshi": "2室2厅1卫",
        "pingfang": 106,
        "chaoxiang": "西南向",
        "address": "大红门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/aab9c27050311ba0d70b3670250b9b28?w=294&h=220&crop=1",
        "money": 7100
      },
      {
        "title": "简约不简单丨凤凰卫视旁 景园大厦 163大两居 全新配置 新",
        "tingshi": "2室2厅2卫",
        "pingfang": 163,
        "chaoxiang": "西向",
        "address": "朝阳公园",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/d6acd389ad1d7219f63b37eb2bb47074?w=294&h=220&crop=1",
        "money": 23500
      },
      {
        "title": "4号线新宫 德鑫嘉园 电梯一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 62,
        "chaoxiang": "南向",
        "address": "新宫",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/fe62bae3fc1e4a65b34b37d183819daa?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "门头沟龙山家园336总站旁 看房随时 南北通透三居 看房有钥",
        "tingshi": "3室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "城子街道 ",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/b800c94a475d689e05067c4aa1e28507?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "香江北岸一居望京来广营15号线马泉营14号线善各庄地铁沿线",
        "tingshi": "1室0厅0卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "来广营",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/10c1dd83534ed2c16247dcf805460905?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "林肯公园2期 168平三居室 户型好采光足 随时看 提包入住",
        "tingshi": "3室2厅2卫",
        "pingfang": 168,
        "chaoxiang": "西南向",
        "address": "亦庄",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/72c5200c14e0f466e188bc851dbda3ba?w=294&h=220&crop=1",
        "money": 14000
      },
      {
        "title": "南海雅苑 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 61,
        "chaoxiang": "东南向",
        "address": "亦庄",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2e528d61f533149afa57cb4816cd9c793.jpg?w=294&h=220&crop=1",
        "money": 3000
      },
      {
        "title": "紫城嘉园 裕和家园 马连洼北路一号院上地东里上地西里嘉华大厦",
        "tingshi": "2室1厅1卫",
        "pingfang": 78,
        "chaoxiang": "南北向",
        "address": "马连洼",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/224c22d6b727094e435dc08417fbeb7d?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "宜兰园一区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "新发地",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2dfc2f413b7fa45fbaa37ec79527151f5.jpg?w=294&h=220&crop=1",
        "money": 5499
      },
      {
        "title": "惠新西街北口 加利大厦 安慧里小区精装2居 有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南向",
        "address": "亚运村",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/ab4e5c6c22ed1d85d83ea99ce06a329a?w=294&h=220&crop=1",
        "money": 6900
      },
      {
        "title": "广安门 金融街 7号线达官营 荣丰2008 南向复式 装修好",
        "tingshi": "1室1厅1卫",
        "pingfang": 32.65,
        "chaoxiang": "南向",
        "address": "广安门外",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/64d7c9f51033a8c432c69eaf71469fc2?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "广外南社区 2时 可短租 南北向 地铁方便出行",
        "tingshi": "1室1厅1卫",
        "pingfang": 54.21,
        "chaoxiang": "东向",
        "address": "劲松",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/0c2391d0bfa760ab037dc3d5ce5b7b98?w=294&h=220&crop=1",
        "money": 5320
      },
      {
        "title": "精装三居 陶然亭 畅柳园 黑窑厂红土店 看房随时 好房不多见",
        "tingshi": "3室1厅1卫",
        "pingfang": 95,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/a4df76b552845862bfb378639848a328?w=294&h=220&crop=1",
        "money": 9800
      },
      {
        "title": "西辛北区 紧邻地铁 中间楼层 价格还能聊",
        "tingshi": "2室1厅1卫",
        "pingfang": 53,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/2868a7724b2e7b134bee6bd157c60978?w=294&h=220&crop=1",
        "money": 2800
      },
      {
        "title": "宋家庄5号10号亦庄线红狮家园精装两居室家电齐全看房方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "东西向",
        "address": "宋家庄",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/d72000037be12e28b6354b03356a81b7?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "三家店村中街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "石门",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v27fd4a114f49444cf8b0de84816fd98fa.jpg?w=294&h=220&crop=1",
        "money": 650
      },
      {
        "title": "舰船研究院，学士居，林萃路10号院精装三居室，随时看房",
        "tingshi": "3室1厅1卫",
        "pingfang": 87,
        "chaoxiang": "南北向",
        "address": "北沙滩",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/87d75903e24d2c714ce3feccbce7caa9?w=294&h=220&crop=1",
        "money": 8700
      },
      {
        "title": "碧桂园 房主急租 家具家电齐全 随时看房 有钥匙 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 93,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/ef2c5c459d1b60580f8c4d27349bab89?w=294&h=220&crop=1",
        "money": 3100
      },
      {
        "title": "酒仙桥瞰都精美2居，高层水暖，家具全，装修很好，有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "东北向",
        "address": "酒仙桥",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/e68a1bf5a8fd8ce56f29c6f66f82c652?w=294&h=220&crop=1",
        "money": 11000
      },
      {
        "title": "西四 平安里 新街口 太平仓精装两居出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 58,
        "chaoxiang": "南北向",
        "address": "西四",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/6baf958770ccd90b4afd74be9b66e338?w=294&h=220&crop=1",
        "money": 9000
      },
      {
        "title": "西长安壹号 超值大两居 带燃气 精装全齐 紧邻上岸站 随时看",
        "tingshi": "2室2厅2卫",
        "pingfang": 160,
        "chaoxiang": "东向",
        "address": "永定",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/8be7baa68918528cf759069b885f1003?w=294&h=220&crop=1",
        "money": 4600
      },
      {
        "title": "306医院附近科学院南里精装大三居，随时看房，房子不多了抓紧",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南向",
        "address": "北沙滩",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/cb5107c2fb59a379c2a73a9e244e5df4?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "车道沟 北洼西里 北洼路 车道沟南里 昌运宫两居出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 86.2,
        "chaoxiang": "南向",
        "address": "北洼路",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/e97d8d9865358080e73f3071f2b88835?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "可谈！融科橄榄城 老客户房子 保持干净 家电齐全 看房方便",
        "tingshi": "3室2厅2卫",
        "pingfang": 145,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/f6befbbf44ee2b68c4f7903d3009996a?w=294&h=220&crop=1",
        "money": 19500
      },
      {
        "title": "草厂北巷 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 30,
        "chaoxiang": "南向",
        "address": "鼓楼",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v2993ed1aadf67462d82139ee657e2122f.jpg?w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "顺义城区，幸福东区温馨两居室居室，拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 64,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/8804de84d7a85cb4f32643fbfcb12cfc?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "华业东方玫瑰 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "西向",
        "address": "梨园",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2496599fad0c64581b7763de976a6c961.jpg?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "北三环 蓟门桥 明光北里 北影 政法校内 一室一厅出租",
        "tingshi": "1室1厅1卫",
        "pingfang": 46,
        "chaoxiang": "南向",
        "address": "蓟门桥",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/008aab3917b2de829789d71657678377?w=294&h=220&crop=1",
        "money": 4600
      },
      {
        "title": "八通线 管庄地铁站 杨闸环岛东杨闸新村 精装全齐两居拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "管庄",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/112d220bacca27c17e685b33b02e6a57?w=294&h=220&crop=1",
        "money": 5700
      },
      {
        "title": "五路居137号院 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 19,
        "chaoxiang": "南北向",
        "address": "五路居",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2a1528d6aeb974624a200e362eb20e3f7.jpg?ws=0821e7bdf3c24c215f8a68201a59ac1c&w=294&h=220&crop=1",
        "money": 2000
      },
      {
        "title": "长阳半岛3号院 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 22,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic8.58cdn.com.cn/p1/small/n_v28dc0e1eea5064285a80bf11d37b3d4d0.jpg?w=294&h=220&crop=1",
        "money": 600
      },
      {
        "title": "单间 将府家园 卡布奇诺 主卧独卫 4家两卫 全女生",
        "tingshi": "1室0厅1卫",
        "pingfang": 29,
        "chaoxiang": "南向",
        "address": "酒仙桥",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/dcbc4741c3c796d3b77871ea9b2b725d?w=294&h=220&crop=1",
        "money": 3599
      },
      {
        "title": "芍药居北里小区 3室1厅2卫",
        "tingshi": "3室1厅2卫",
        "pingfang": 58,
        "chaoxiang": "西北向",
        "address": "芍药居",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v2ded44b742911424d9699ce6633270b3a.jpg?w=294&h=220&crop=1",
        "money": 7950
      },
      {
        "title": "房山长阳 首开熙悦山澜庭 邻地铁 家电齐全拎包入住 随时看房",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/b3c7d028326defbce6344c50165973b0?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "白房子 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 22,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic6.58cdn.com.cn/p1/small/n_v230315878183e4bdd915c27f7929b8ef9.jpg?w=294&h=220&crop=1",
        "money": 550
      },
      {
        "title": "观音惠园 3室2厅2卫",
        "tingshi": "3室2厅2卫",
        "pingfang": 132.37,
        "chaoxiang": "南北向",
        "address": "四惠",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2666fd505eb2c426cbb44b166354a5a15.jpg?w=294&h=220&crop=1",
        "money": 10000
      },
      {
        "title": "五元桥 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 26,
        "chaoxiang": "南向",
        "address": "大山子",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v21eefbd169375440698e09d663f32d0c2.jpg?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "中心禧园 南北三居 空置 随时看房",
        "tingshi": "3室2厅2卫",
        "pingfang": 143,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/27ee843c073b090e016826bfc14c8bba?w=294&h=220&crop=1",
        "money": 23500
      },
      {
        "title": "北街家园一区 大两居 晚上看房 家电齐全",
        "tingshi": "2室1厅1卫",
        "pingfang": 84,
        "chaoxiang": "南向",
        "address": "沙河",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/6f20028272c852e56599393332d1e52e?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "无中介 翠北嘉园 馨悦家园 福田总部 屯佃地铁 安河桥北精装",
        "tingshi": "1室0厅1卫",
        "pingfang": 45,
        "chaoxiang": "西向",
        "address": "上庄",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/403e6bc08ba68c7dc79ee9c424e2aa03?w=294&h=220&crop=1",
        "money": 2650
      },
      {
        "title": "新上！青年路 甘露园 大悦城 精装大开间 随时看房 拎包入住",
        "tingshi": "1室0厅1卫",
        "pingfang": 35,
        "chaoxiang": "东向",
        "address": "甘露园",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/47bab8625d716cf86175e0f75bad177d?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "紧邻角门东10号线 永辉超市 集美家居 海上海精装两居室",
        "tingshi": "2室1厅1卫",
        "pingfang": 98,
        "chaoxiang": "南向",
        "address": "大红门",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/a2578c8993d94f9ad283ce4aa1254bc4?w=294&h=220&crop=1",
        "money": 7200
      },
      {
        "title": "新上！朝阳公园 清境明湖 带健身卡 三居室 随时看房拎包入住",
        "tingshi": "2室2厅1卫",
        "pingfang": 165,
        "chaoxiang": "东向",
        "address": "朝阳公园",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/3e12ca6988336a75b8ebf6c49483b855?w=294&h=220&crop=1",
        "money": 16500
      },
      {
        "title": "顺义城区，幸福东区温馨两居室居室，拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 64,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/8804de84d7a85cb4f32643fbfcb12cfc?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "惠新西街北口 加利大厦 安慧里小区精装2居 有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南向",
        "address": "亚运村",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/ab4e5c6c22ed1d85d83ea99ce06a329a?w=294&h=220&crop=1",
        "money": 6900
      },
      {
        "title": "珺悦国际 3室2厅2卫",
        "tingshi": "3室2厅2卫",
        "pingfang": 133,
        "chaoxiang": "西南向",
        "address": "生物医药基地",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v26c16cbe30f1c425daf845edc4b7fa466.jpg?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "百子湾家园 俩居室 干净整洁 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 103,
        "chaoxiang": "南向",
        "address": "百子湾",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/0abbaf8fc7d6c685e7dae4aea8794890?w=294&h=220&crop=1",
        "money": 7300
      },
      {
        "title": "中信城 四居室 南北通透 空房 看房有钥匙 可长租",
        "tingshi": "4室2厅2卫",
        "pingfang": 170,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/818fbfeab9ee7efc5f9d533ae81e95fe?w=294&h=220&crop=1",
        "money": 23000
      },
      {
        "title": "单间 将府家园 卡布奇诺 主卧独卫 4家两卫 全女生",
        "tingshi": "1室0厅1卫",
        "pingfang": 29,
        "chaoxiang": "南向",
        "address": "酒仙桥",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/dcbc4741c3c796d3b77871ea9b2b725d?w=294&h=220&crop=1",
        "money": 3599
      },
      {
        "title": "农展南里社区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 67,
        "chaoxiang": "南向",
        "address": "团结湖",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v213283b5f82f3471c9e34f14e4a89a24f.jpg?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "北街家园一区 大两居 晚上看房 家电齐全",
        "tingshi": "2室1厅1卫",
        "pingfang": 84,
        "chaoxiang": "南向",
        "address": "沙河",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/6f20028272c852e56599393332d1e52e?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "宋家庄5号10号亦庄线红狮家园精装两居室家电齐全看房方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "东西向",
        "address": "宋家庄",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/d72000037be12e28b6354b03356a81b7?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "明春东园 5室3厅3卫",
        "tingshi": "5室3厅3卫",
        "pingfang": 328,
        "chaoxiang": "南北向",
        "address": "郁花园",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v2e035a499c0734d38b6b8901d201953fc.jpg?w=294&h=220&crop=1",
        "money": 16000
      },
      {
        "title": "云杉路 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "张家湾",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v269197870ab0b40e68cd603621dee6714.jpg?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "万达华贸东方梅地亚国贸中国尊电视台好房源",
        "tingshi": "2室1厅1卫",
        "pingfang": 63,
        "chaoxiang": "南向",
        "address": "国贸",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/25346d55e5b03844d702e869c70d2397?w=294&h=220&crop=1",
        "money": 7600
      },
      {
        "title": "车道沟 北洼西里 北洼路 车道沟南里 昌运宫两居出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 86.2,
        "chaoxiang": "南向",
        "address": "北洼路",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/e97d8d9865358080e73f3071f2b88835?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "大兴亦庄 贵园东里 精装全齐 南北通透 干净整洁 随时看房",
        "tingshi": "3室2厅2卫",
        "pingfang": 103,
        "chaoxiang": "南北向",
        "address": "亦庄",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/7a53c6517fc0cec895425f4d35acb2bd?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "整租俸伯公寓 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic4.58cdn.com.cn/p1/small/n_v2ac30910cc60148d89b524f7de7739cf7.jpg?w=294&h=220&crop=1",
        "money": 1100
      },
      {
        "title": "水恋晶城 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 59,
        "chaoxiang": "南北向",
        "address": "武夷花园",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v2dbb74107bb24443b9d96cd3fc456800b.jpg?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "北苑 北苑路北 地铁5号线 媒体村天居园 天畅园 正规一居",
        "tingshi": "1室1厅1卫",
        "pingfang": 74,
        "chaoxiang": "南向",
        "address": "媒体村",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/9607370bca734d9631848b33c83bec4b?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "南北通透精装二居 随时看房",
        "tingshi": "2室1厅1卫",
        "pingfang": 72,
        "chaoxiang": "南向",
        "address": "劲松",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/dd141c692d91542e3e9f25ba8b2d5518?w=294&h=220&crop=1",
        "money": 5600
      },
      {
        "title": "羊耳峪南里出租，干净， 简单家具，",
        "tingshi": "2室1厅1卫",
        "pingfang": 60.08,
        "chaoxiang": "南北向",
        "address": "燕山",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/e9d8d3cd17de94e1ff0d64c937d33d77?w=294&h=220&crop=1",
        "money": 900
      },
      {
        "title": "广安门北街20号小区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "东西向",
        "address": "广安门内",
        "coverUrl": "http://pic1.58cdn.com.cn/p1/small/n_v2f71e5ad37649457d8d42daea03847370.jpg?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "香江北岸一居望京来广营15号线马泉营14号线善各庄地铁沿线",
        "tingshi": "1室0厅0卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "来广营",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/10c1dd83534ed2c16247dcf805460905?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "68.88平米整租精装好房急租",
        "tingshi": "2室1厅1卫",
        "pingfang": 68.88,
        "chaoxiang": "西向",
        "address": "和平里",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/be747ece784754e9c443181e8d7274ca?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "后沙峪西马各庄村 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 22,
        "chaoxiang": "南向",
        "address": "后沙峪",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v24d7fdea8ec284f55b53cb4f4cc9e6114.jpg?w=294&h=220&crop=1",
        "money": 1000
      },
      {
        "title": "广外南社区 2时 可短租 南北向 地铁方便出行",
        "tingshi": "1室1厅1卫",
        "pingfang": 54.21,
        "chaoxiang": "东向",
        "address": "劲松",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/0c2391d0bfa760ab037dc3d5ce5b7b98?w=294&h=220&crop=1",
        "money": 5320
      },
      {
        "title": "中关村远中悦莱公寓豪华三居室 北大 微软 新中关",
        "tingshi": "3室1厅2卫",
        "pingfang": 142,
        "chaoxiang": "南北向",
        "address": "中关村",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/a10b4512d392838f1d41ed45df5bef19?w=294&h=220&crop=1",
        "money": 14000
      },
      {
        "title": "精装三居 陶然亭 畅柳园 黑窑厂红土店 看房随时 好房不多见",
        "tingshi": "3室1厅1卫",
        "pingfang": 95,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/a4df76b552845862bfb378639848a328?w=294&h=220&crop=1",
        "money": 9800
      },
      {
        "title": "十里河站地铁10.14号线旁 美景东方 出租精装两居随时看房",
        "tingshi": "2室2厅1卫",
        "pingfang": 83,
        "chaoxiang": "东南向",
        "address": "华威桥",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/3c855be6b97d2f80d3c42bae7e235780?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "舰船研究院，学士居，林萃路10号院精装三居室，随时看房",
        "tingshi": "3室1厅1卫",
        "pingfang": 87,
        "chaoxiang": "南北向",
        "address": "北沙滩",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/87d75903e24d2c714ce3feccbce7caa9?w=294&h=220&crop=1",
        "money": 8700
      },
      {
        "title": "Y527(陈各庄路) 5室2厅1卫",
        "tingshi": "5室2厅1卫",
        "pingfang": 350,
        "chaoxiang": "南北向",
        "address": "通州",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v288885d3579d34c3a9adddaa05a923199.jpg?w=294&h=220&crop=1",
        "money": 5000
      },
      {
        "title": "小东街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 22,
        "chaoxiang": "南向",
        "address": "顺义",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2e8eca125a44d4118bec5d83f63407a73.jpg?w=294&h=220&crop=1",
        "money": 750
      },
      {
        "title": "酒仙桥瞰都精美2居，高层水暖，家具全，装修很好，有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "东北向",
        "address": "酒仙桥",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/e68a1bf5a8fd8ce56f29c6f66f82c652?w=294&h=220&crop=1",
        "money": 11000
      },
      {
        "title": "天洋城南向2居 随时看房 包物业取暖 拎包入住 采光好联系",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "南向",
        "address": "燕郊",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/4f6be56abe123c2918e5956c06a6f2b8?w=294&h=220&crop=1",
        "money": 1400
      },
      {
        "title": "中心禧园 南北三居 空置 随时看房",
        "tingshi": "3室2厅2卫",
        "pingfang": 143,
        "chaoxiang": "南北向",
        "address": "陶然亭",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/27ee843c073b090e016826bfc14c8bba?w=294&h=220&crop=1",
        "money": 23500
      },
      {
        "title": "顺悦家园 3室1厅1卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "马坡",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v21814ffac9b234688a6ff3f9a5f08a370.jpg?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "北三环 蓟门桥 明光北里 北影 政法校内 一室一厅出租",
        "tingshi": "1室1厅1卫",
        "pingfang": 46,
        "chaoxiang": "南向",
        "address": "蓟门桥",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/008aab3917b2de829789d71657678377?w=294&h=220&crop=1",
        "money": 4600
      },
      {
        "title": "左家庄南里精装2居室 业主直租 西坝河 柳芳 静安里",
        "tingshi": "2室1厅1卫",
        "pingfang": 62,
        "chaoxiang": "南北向",
        "address": "国展",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/2a0016ac294323002fa0e29159ecf654?w=294&h=220&crop=1",
        "money": 7600
      },
      {
        "title": "此房大两居，家具齐全，交通便利",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "燕郊",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/1e40aa13301cb83bac978c8161ac9c09?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "山水汇豪A区，窦店镇政府对面，高速口附近！",
        "tingshi": "3室1厅1卫",
        "pingfang": 107,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/5bd9d628d40471581e9abdb6b8c4b481?w=294&h=220&crop=1",
        "money": 2100
      },
      {
        "title": "果园北区 2000月",
        "tingshi": "2室1厅1卫",
        "pingfang": 68,
        "chaoxiang": "南北向",
        "address": "密云城区",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/bff3c9bc2ec002fcb3c511acbb68ca80?w=294&h=220&crop=1",
        "money": 2000
      },
      {
        "title": "阜外大街 展览路 阜外北四巷 大开间出租 附近多套房源",
        "tingshi": "1室0厅0卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "阜成门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/02e8ea7eed4518b8df1737e1d45dca0d?w=294&h=220&crop=1",
        "money": 4800
      },
      {
        "title": "朝阳公园麦子店枣营亮马桥两居室 随时可以拎包入住",
        "tingshi": "2室2厅1卫",
        "pingfang": 71,
        "chaoxiang": "南向",
        "address": "麦子店",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/5d54762ece5cf5bf87b23c449826914b?w=294&h=220&crop=1",
        "money": 7000
      },
      {
        "title": "出租海淀上庄东小营用友 永丰 三嘉信苑 装修两居室 看房随时",
        "tingshi": "2室1厅1卫",
        "pingfang": 63,
        "chaoxiang": "南北向",
        "address": "上庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/8d59fa74e9a7e0fc93f8b83fca7db2c5?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "嘉园豪装  一居室 临近地铁 包物业取暖  随时可以看房",
        "tingshi": "1室1厅1卫",
        "pingfang": 48,
        "chaoxiang": "南向",
        "address": "次渠",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/9907c66c6149a64c1881fbbbdea5b258?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "大牛坊二期小两居出租，摆渡车直达16号线永丰站",
        "tingshi": "2室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "西北旺",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/1a69b12503ba8204b1f2ad7965de8cc9?w=294&h=220&crop=1",
        "money": 4599
      },
      {
        "title": "方庄（热推）出租,户型方正,小区环境好,价格可聊",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南北向",
        "address": "方庄",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/f9caff62e8d853f1ca72324edbf6b5e8?w=294&h=220&crop=1",
        "money": 5500
      },
      {
        "title": "通州 玉桥 幸福艺居 温馨中层一居室 史家妇幼附近 交通方便",
        "tingshi": "1室1厅1卫",
        "pingfang": 62,
        "chaoxiang": "南北向",
        "address": "玉桥",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/0b4e2c1e5688fab2219e36ff1dd9c4a1?w=294&h=220&crop=1",
        "money": 3500
      },
      {
        "title": "西海洪一街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 18,
        "chaoxiang": "南向",
        "address": "石门",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v28a665e574f964f3b8bdb2df6a6f158dd.jpg?w=294&h=220&crop=1",
        "money": 850
      },
      {
        "title": "通州梨园  电梯房 南北通透2居室 精装修业主直租拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "果园",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/7bc3d8646d14b23cf7d9ef4b865d0d47?w=294&h=220&crop=1",
        "money": 5000
      },
      {
        "title": "首租亦庄桥地铁站 星岛假日 肯定豪装 正规两居室出租随时看",
        "tingshi": "2室1厅1卫",
        "pingfang": 108,
        "chaoxiang": "南北向",
        "address": "亦庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/edd3bf79527d23df460539bf3b92baba?w=294&h=220&crop=1",
        "money": 7200
      },
      {
        "title": "酒仙桥58总部IT产业园将台地铁站丽都壹号卡布其诺将府公园",
        "tingshi": "1室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南向",
        "address": "酒仙桥",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/a92c1b6015115c37bd8c0ce446f3c917?w=294&h=220&crop=1",
        "money": 9200
      },
      {
        "title": "清水湾。精装两居。家电齐全。看房提前预约",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南向",
        "address": "武夷花园",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/ce5135cf233e3b120b105e05e2ec8eb6?w=294&h=220&crop=1",
        "money": 5300
      },
      {
        "title": "锦官苑 观缘 24保安 独立物业 小区环境好 干净拎包住",
        "tingshi": "3室1厅2卫",
        "pingfang": 136,
        "chaoxiang": "南北向",
        "address": "车公庄",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/3b04ced31e660ef0e468904cadad3e94?w=294&h=220&crop=1",
        "money": 16500
      },
      {
        "title": "园博园南路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 52.8,
        "chaoxiang": "南北向",
        "address": "卢沟桥",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v25a3b5069baa248e9af0c5ceb50b1440b.jpg?w=294&h=220&crop=1",
        "money": 1300
      },
      {
        "title": "君堂好园 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 68,
        "chaoxiang": "南向",
        "address": "十八里店",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v2c360c4f870a3475b8034502b5b9aab19.jpg?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "康泽佳苑 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2fe43c5cd29874653b0ddddcd2077108b.jpg?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "汇新家园 万柳 中关村三小 带电梯 小区环境好 出行便利",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "西南向",
        "address": "万柳",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/9965e9927e5894902d317dbcadd3c676?w=294&h=220&crop=1",
        "money": 8200
      },
      {
        "title": "民族学院南路7号院，精装两居，紧邻北舞，民大附中，国图，鑫德",
        "tingshi": "2室1厅1卫",
        "pingfang": 55,
        "chaoxiang": "南北向",
        "address": "魏公村",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/dfd3fcdd14438934189ecf1cb0b3d464?w=294&h=220&crop=1",
        "money": 7000
      },
      {
        "title": "保利春天里 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 84.73,
        "chaoxiang": "南向",
        "address": "生物医药基地",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v24f83d28c78324d7aa55901972a916929.jpg?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "朝青 大悦城 华纺  南北通透 精装三居  近地铁6号线",
        "tingshi": "3室2厅2卫",
        "pingfang": 139,
        "chaoxiang": "南北向",
        "address": "朝青板块",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/f9ad61628ac0d1ef91fb489932974851?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "温暖又温心,新光大中心精装修复试真的给你不一样的感受",
        "tingshi": "1室2厅2卫",
        "pingfang": 80,
        "chaoxiang": "东向",
        "address": "北关",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/8cf9553d888d9cfd4402b2c17ddbce53?w=294&h=220&crop=1",
        "money": 6800
      },
      {
        "title": "来来来  新华联家园南区简装三居室出租  临近果园  八通线",
        "tingshi": "3室2厅2卫",
        "pingfang": 124.53,
        "chaoxiang": "南北向",
        "address": "果园",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/f9791f495888578966f9f0b097b2ab5e?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "临8号线 三居两卫  低楼层 干净整洁 家电齐 价格可聊",
        "tingshi": "3室2厅2卫",
        "pingfang": 125,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/331cbfad95896ebcb714b2b0d917a373?w=294&h=220&crop=1",
        "money": 7000
      },
      {
        "title": "华欣湾b区 精装两居室 现房出租 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 76,
        "chaoxiang": "南向",
        "address": "怀柔城区",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/f38c30c2a5521d61bba949b4e77f54b5?w=294&h=220&crop=1",
        "money": 2600
      },
      {
        "title": "机场南楼生活区南竺园二层两居室看房方便速度联系",
        "tingshi": "2室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南北向",
        "address": "机场",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/b62117144d5322788ba9ee7ad853d141?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "彩俸北区 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v2a1786968236848c9997a7a0b352ab2b0.jpg?w=294&h=220&crop=1",
        "money": 1000
      },
      {
        "title": "免费停车 可月付地铁6号线北运河西附近精装温馨一居室面积大",
        "tingshi": "1室1厅1卫",
        "pingfang": 58,
        "chaoxiang": "北向",
        "address": "运河大街",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/f3b6c27f7abda97ede8db339dbd0b8c4?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "铁三区 恒华国际 小三峡对面 月坛公园附近 南北通透 随时看",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南北向",
        "address": "复兴门",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/b7504a35bacc88c1be05370b85464eb8?w=294&h=220&crop=1",
        "money": 7300
      },
      {
        "title": "季景沁园 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 129,
        "chaoxiang": "南向",
        "address": "望京",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v2940b9115d5694015b47f97e81e2c0551.jpg?w=294&h=220&crop=1",
        "money": 9800
      },
      {
        "title": "滨河德露苑 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 79.78,
        "chaoxiang": "南北向",
        "address": "大峪",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v212b340e8c78f4952955c9143fc56eacc.jpg?w=294&h=220&crop=1",
        "money": 3100
      },
      {
        "title": "东大街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 28,
        "chaoxiang": "南向",
        "address": "东大街",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v26fcb7ef554654a6ca6a1c3d7e4bf6fd5.jpg?w=294&h=220&crop=1",
        "money": 2100
      },
      {
        "title": "芳星园三区 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 15,
        "chaoxiang": "南北向",
        "address": "方庄",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v29072843f96744c20bcce39ed97f05808.jpg?w=294&h=220&crop=1",
        "money": 2000
      },
      {
        "title": "远洋万和公馆全新家具 楼层位置好 周边交通便利 社区环境优美",
        "tingshi": "3室2厅3卫",
        "pingfang": 210,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/bd1462f2b9f82debb76ca141cde96a32?w=294&h=220&crop=1",
        "money": 38000
      },
      {
        "title": "苏州街 小南庄 三义庙 紫金庄园 人民大学 看房联系",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南向",
        "address": "人民大学",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/dc9edd3f1d53cb3c26e61a92696ac899?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "万科蓝 3室2厅1卫",
        "tingshi": "3室2厅1卫",
        "pingfang": 98,
        "chaoxiang": "南北向",
        "address": "科技园区",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2e497a858e73645858df50a48be29747b.jpg?w=294&h=220&crop=1",
        "money": 9500
      },
      {
        "title": "广泉小区  西南两居室  装修比图片好  喜欢找我约 满意",
        "tingshi": "2室1厅1卫",
        "pingfang": 101,
        "chaoxiang": "西南向",
        "address": "双井",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/09a0ceada66eb7009d5488b1a4519776?w=294&h=220&crop=1",
        "money": 10000
      },
      {
        "title": "润枫水尚 地铁6号线 青年路站 达美 大悦城 东坝 四惠",
        "tingshi": "3室2厅2卫",
        "pingfang": 198,
        "chaoxiang": "南北向",
        "address": "朝青板块",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/373d67eeeb04f36ae57c30c0e1898af1?w=294&h=220&crop=1",
        "money": 19000
      },
      {
        "title": "亦庄文化园站  林肯公园正规两居室  家电全齐  随时看",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "西北向",
        "address": "亦庄",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/f48060531db8ff5e67fe0f666604553a?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "安宁里南区正规一居室4500元月，家具家电齐全 看房有钥匙",
        "tingshi": "1室1厅1卫",
        "pingfang": 55,
        "chaoxiang": "东西向",
        "address": "安宁庄",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/6c7c041df74ab291e97cef97137e2e8f?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "燕顺路悦榕湾 精装二居室看房随时紧邻815 819公交站双包",
        "tingshi": "2室1厅1卫",
        "pingfang": 88,
        "chaoxiang": "南向",
        "address": "燕郊",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/16b1ff582df5562a6d40a33a8228ff7d?w=294&h=220&crop=1",
        "money": 2099
      },
      {
        "title": "温馨舒适  无中介 公寓直租 独门独户 精装全配 拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 25,
        "chaoxiang": "东南向",
        "address": "天竺",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/71bf54d291e4f4e47d1ca735f63b800e?w=294&h=220&crop=1",
        "money": 2698
      },
      {
        "title": "新上 地铁十四号线 园博园 红山郡 精装一居 家具家电全齐",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南北向",
        "address": "卢沟桥",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/3f3001d0cb825e6cf3d61b2d2263e6a0?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "黄村东蓝桥通透一居室出租全齐随时看房",
        "tingshi": "1室1厅1卫",
        "pingfang": 56,
        "chaoxiang": "南北向",
        "address": "磁各庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/1a86c6bb6139e3a2e3a2c82585ad25eb?w=294&h=220&crop=1",
        "money": 2300
      },
      {
        "title": "未来假日花园 联排4层别墅出租 居家办公会所均可",
        "tingshi": "3室4厅3卫",
        "pingfang": 320,
        "chaoxiang": "南北向",
        "address": "马家堡",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/2fd6ef2b61d9aaee35e097e993dfcae4?w=294&h=220&crop=1",
        "money": 26000
      },
      {
        "title": "管庄地铁站 杨闸环岛 北京新天地 杨闸新村 一居室 免物业",
        "tingshi": "1室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "管庄",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/fc9bf1e37f6d69835c7718469a9e3126?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "爱心服务 华龙美树第五站超精装修，不后悔的选择",
        "tingshi": "1室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "东向",
        "address": "管庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/626d5fff4ac6e90d7f9e19095e3b5ccc?w=294&h=220&crop=1",
        "money": 3500
      },
      {
        "title": "长阳 首开熙悦山 两居室 出租",
        "tingshi": "2室2厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/3d10d98ef3bf07d7ebc2503934ecf7a4?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "亦庄文化园站  林肯公园正规两居室  家电全齐  随时看",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "西北向",
        "address": "亦庄",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/f48060531db8ff5e67fe0f666604553a?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "G6辅路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 30,
        "chaoxiang": "东向",
        "address": "南口",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v2cb5d8d18a2174642a0da17e66a94a880.jpg?w=294&h=220&crop=1",
        "money": 1200
      },
      {
        "title": "丰台南路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 28,
        "chaoxiang": "南向",
        "address": "看丹桥",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v26fcb7ef554654a6ca6a1c3d7e4bf6fd5.jpg?w=294&h=220&crop=1",
        "money": 2010
      },
      {
        "title": "百子湾 沿海 精装大两居 通透户型 拎包入住 看房随时 地铁",
        "tingshi": "2室1厅1卫",
        "pingfang": 95,
        "chaoxiang": "东西向",
        "address": "百子湾",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/d7558c79d3a4f8711878ac738693cd5e?w=294&h=220&crop=1",
        "money": 8500
      },
      {
        "title": "颐源居 3室2厅2卫 格局方正 客厅朝南",
        "tingshi": "3室2厅2卫",
        "pingfang": 168,
        "chaoxiang": "东南向",
        "address": "公主坟",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/5168ea402a84309ccfaa46d3ee42e953?w=294&h=220&crop=1",
        "money": 25000
      },
      {
        "title": "大望路 东区国际 南向高层三居 双储物间 客厅内置阳台 华业",
        "tingshi": "3室2厅2卫",
        "pingfang": 216,
        "chaoxiang": "南向",
        "address": "四惠",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/a7c0cab75f171dbceb21e13bc5f71990?w=294&h=220&crop=1",
        "money": 19000
      },
      {
        "title": "松榆西里小区 潘家园地铁10号线 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 77.48,
        "chaoxiang": "南北向",
        "address": "潘家园",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/6cb7ae3abb4f6215ff613effcdaa15bd?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "车公庄 富通大厦大三居 看房随时 采光无敌 拎包入住",
        "tingshi": "3室1厅2卫",
        "pingfang": 134,
        "chaoxiang": "东南向",
        "address": "车公庄",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/f03ee61c931c3866e2fbfd5900894d34?w=294&h=220&crop=1",
        "money": 13500
      },
      {
        "title": "方庄（热推）出租,户型方正,小区环境好,价格可聊",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南北向",
        "address": "方庄",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/f9caff62e8d853f1ca72324edbf6b5e8?w=294&h=220&crop=1",
        "money": 5500
      },
      {
        "title": "金隅自由筑 干净装修采光好上下两层精致风格大一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "东向",
        "address": "土桥",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/d1ce23395590c268e7686a602ff2f714?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "宏仁家园 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "马驹桥",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2931de7ab27874770bc330c81411d570b.jpg?w=294&h=220&crop=1",
        "money": 3950
      },
      {
        "title": "锦官苑 观缘 24保安 独立物业 小区环境好 干净拎包住",
        "tingshi": "3室1厅2卫",
        "pingfang": 136,
        "chaoxiang": "南北向",
        "address": "车公庄",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/3b04ced31e660ef0e468904cadad3e94?w=294&h=220&crop=1",
        "money": 16500
      },
      {
        "title": "青塔 西四环边上 地铁1号线五棵松 青塔东里西翠芳庭电梯两居",
        "tingshi": "2室1厅1卫",
        "pingfang": 94,
        "chaoxiang": "东南向",
        "address": "青塔",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/74b4ab53d5ac2092726f4de230e3dea2?w=294&h=220&crop=1",
        "money": 5300
      },
      {
        "title": "和平街十五区2号院 紧邻光熙门 青年沟路 和平西桥",
        "tingshi": "2室1厅1卫",
        "pingfang": 77.71,
        "chaoxiang": "东西向",
        "address": "和平街",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/57569e0122dff81c02e835b4b9784b48?w=294&h=220&crop=1",
        "money": 7220
      },
      {
        "title": "乐栋300 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 39,
        "chaoxiang": "东向",
        "address": "双桥",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v2411872f216e14261a197a8927f5b2253.jpg?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "双井 国贸 大望路沿海赛洛城精装loft 看房随时 期待光临",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "北向",
        "address": "百子湾",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/5c7e42bfa019fc7690963b192dd148f2?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "朝青 四惠康家园甘露园电梯一居室  紧邻朝阳路6号线",
        "tingshi": "1室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "西向",
        "address": "甘露园",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/dcbdf3f8aa9ea2657110747731b00433?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "豆各庄 富力又一城 顶层复式 跃层 全明格局 价格可聊",
        "tingshi": "5室2厅3卫",
        "pingfang": 219,
        "chaoxiang": "南北向",
        "address": "豆各庄",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/e430d035f972feb03a5ce15810f8635a?w=294&h=220&crop=1",
        "money": 13999
      },
      {
        "title": "上地东里，两居室,南北通透，价钱可谈，家电齐全，看房随时",
        "tingshi": "2室1厅1卫",
        "pingfang": 56,
        "chaoxiang": "南北向",
        "address": "上地",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/45feff21743803503ee9dabf6a8cc752?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "首开华润城花香苑 南北通透 3室 修 新房 家具家电齐全",
        "tingshi": "3室2厅2卫",
        "pingfang": 141,
        "chaoxiang": "南北向",
        "address": "科技园区",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/178499b892300aa311731fc27980c408?w=294&h=220&crop=1",
        "money": 13500
      },
      {
        "title": "远洋万和公馆全新家具 楼层位置好 周边交通便利 社区环境优美",
        "tingshi": "3室2厅3卫",
        "pingfang": 210,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/bd1462f2b9f82debb76ca141cde96a32?w=294&h=220&crop=1",
        "money": 38000
      },
      {
        "title": "西山林语 装修好 家具家电齐全 随时起租  中间层 出入方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "马连洼",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/1c605a2278fc773fa06643d600e04388?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "园田路三条 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "石门",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v222d7aba224df4f429e98a3543ed36f0e.jpg?w=294&h=220&crop=1",
        "money": 700
      },
      {
        "title": "新纪家园 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 105,
        "chaoxiang": "西北向",
        "address": "太阳宫",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v2f58e35af951343628311d1a3c8647018.jpg?w=294&h=220&crop=1",
        "money": 11500
      },
      {
        "title": "首经贸中街1号院 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 26,
        "chaoxiang": "南向",
        "address": "玉泉营",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2ac8d46239b9441fbbbfb6e6c9244888e.jpg?ws=d19366a4fd0f3a54937b176354e874ca&w=294&h=220&crop=1",
        "money": 2400
      },
      {
        "title": "枣园小区 新装修的二居室 干净舒适整洁",
        "tingshi": "2室1厅1卫",
        "pingfang": 66.11,
        "chaoxiang": "南北向",
        "address": "枣园",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/ae81bd5a6b041fdc8e9ed21d3ee5aceb?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "旅游新村 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南北向",
        "address": "通州北苑",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v27f532d47c8e147579a1754a055f3a47f.jpg?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "来来来  新华联家园南区简装三居室出租  临近果园  八通线",
        "tingshi": "3室2厅2卫",
        "pingfang": 124.53,
        "chaoxiang": "南北向",
        "address": "果园",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/f9791f495888578966f9f0b097b2ab5e?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "龙湖好望山 4室2厅3卫",
        "tingshi": "4室2厅3卫",
        "pingfang": 229,
        "chaoxiang": "南北向",
        "address": "马坡",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v22c3cdadd11a8461eafbaedf6d754a3f2.jpg?w=294&h=220&crop=1",
        "money": 14000
      },
      {
        "title": "临近高米店南康顺园朝北次卧设施齐全交通便利随时入住价格",
        "tingshi": "3室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "黄村",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/7b19a7e42c95d9bf56c1ae44aab847ae?w=294&h=220&crop=1",
        "money": 1450
      },
      {
        "title": "津南街 2室2厅1卫",
        "tingshi": "2室2厅1卫",
        "pingfang": 100,
        "chaoxiang": "南向",
        "address": "顺义",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v207f68cb5e149457aa1534fe17d091ff4.jpg?w=294&h=220&crop=1",
        "money": 32000
      },
      {
        "title": "恒通商务园 IT产业园 七棵树 大悦城附近精装坝鑫全南一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南向",
        "address": "东坝",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/57fe5bdadb0f1f4d03d6787d49822dd0?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "出租 行宫二里 两居 85平米 2500元",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/8872215d9cefb2ee0da67ad4b652cd6c?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "荣丰2008 达官营地铁 七号线 北京西站公寓出租 拎包入住",
        "tingshi": "1室0厅1卫",
        "pingfang": 34,
        "chaoxiang": "东向",
        "address": "广安门外",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/6e8a4d27618f425686cd5d32dc1359b1?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "奥林匹克花园(一期) 3室2厅2卫",
        "tingshi": "3室2厅2卫",
        "pingfang": 140,
        "chaoxiang": "南向",
        "address": "东坝",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2d22e6ad8ddb243cd9a9b055e237a648d.jpg?w=294&h=220&crop=1",
        "money": 10500
      },
      {
        "title": "永乐园社区 两居室出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "房山城关",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/43c05b4e526e61e8e6c87ca0d4fdb6fd?w=294&h=220&crop=1",
        "money": 2200
      },
      {
        "title": "空港南法信站 整租豪装高层公寓，交通便利，朝南户型，押一付一",
        "tingshi": "1室1厅1卫",
        "pingfang": 25,
        "chaoxiang": "东南向",
        "address": "机场",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/f267a75ca3ad29f6cf33bff1b23e7467?w=294&h=220&crop=1",
        "money": 2660
      },
      {
        "title": "樱花园新上一居室 随时看房 一层 房子非常好",
        "tingshi": "1室1厅1卫",
        "pingfang": 33.96,
        "chaoxiang": "南北向",
        "address": "机场",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/968affd90ac6a2defccf1b59ec4fc998?w=294&h=220&crop=1",
        "money": 2400
      },
      {
        "title": "东直门奥加国际开间70平可办照空房办公利用率高",
        "tingshi": "1室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "东向",
        "address": "三里屯",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/089b3c15595b756e462dc49211297cf7?w=294&h=220&crop=1",
        "money": 9000
      },
      {
        "title": "雁鸣园 精装修 中楼层 家具家电齐全 南北通透 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "怀柔城区",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/3f9cabf063c44bdb9d202d4f19e83cd1?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "朝阳门北京inn4B505室可办照精装修无遮挡随时看房",
        "tingshi": "2室1厅1卫",
        "pingfang": 93,
        "chaoxiang": "东向",
        "address": "朝阳门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/97fc7be41dc52b1af60826aa3b1223f6?w=294&h=220&crop=1",
        "money": 12500
      },
      {
        "title": "金善名居 短租 看房方便 2000出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 76,
        "chaoxiang": "南北向",
        "address": "庙城",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/90d655db8795c833eeb4111efba59f94?w=294&h=220&crop=1",
        "money": 2000
      },
      {
        "title": "万年花城一期 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 28.63,
        "chaoxiang": "南向",
        "address": "玉泉营",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v238b924799e0d431a823c8abd3cd64ada.jpg?w=294&h=220&crop=1",
        "money": 2600
      },
      {
        "title": "马驹桥 星悦国际 两居室 可同事合租 仅1套 3800月",
        "tingshi": "2室2厅1卫",
        "pingfang": 89,
        "chaoxiang": "东南向",
        "address": "通州周边",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/d721e15b5499837ed4d344aad1de5873?w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "紧邻地铁人民站,中关村双榆树北里,当代商城旁",
        "tingshi": "3室1厅1卫",
        "pingfang": 57,
        "chaoxiang": "南北向",
        "address": "双榆树",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/cc71c8f3da7cc0cb78dfa26f9b5735d1?w=294&h=220&crop=1",
        "money": 5200
      },
      {
        "title": "龙禧苑二区精装三居两卫 家具齐全 地铁8号线平西府站",
        "tingshi": "3室2厅2卫",
        "pingfang": 143,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/21c398bf9b12c60da61650a8c081a5fb?w=294&h=220&crop=1",
        "money": 7800
      },
      {
        "title": "香山别墅，带电梯，家具家电齐全，居家接待合适，带大露台",
        "tingshi": "4室2厅3卫",
        "pingfang": 258,
        "chaoxiang": "南北向",
        "address": "香山",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/3750e5bdece1a7cc301c1cb4c3dda5cd?w=294&h=220&crop=1",
        "money": 33000
      },
      {
        "title": "青年湖安定门 鼓楼 长租！方便看！湖景苑带电梯精装修！",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "安定门",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/17db41ed02a60cd4146eff2b71e81947?w=294&h=220&crop=1",
        "money": 8800
      },
      {
        "title": "霍营育新地铁 精装三居室 电梯房 楼下商场超市 随时拎包入住",
        "tingshi": "3室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/eb0cc44833a5539cf82b4b494993b9f4?w=294&h=220&crop=1",
        "money": 7499
      },
      {
        "title": "莱蒙湖 大5居 随时入住！看房方便！",
        "tingshi": "4室3厅3卫",
        "pingfang": 497,
        "chaoxiang": "南北向",
        "address": "后沙峪",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/8590d8aa023b1851c941a2814622e225?w=294&h=220&crop=1",
        "money": 50000
      },
      {
        "title": "首开常青藤四期3室1厅7700.00元便宜出租了，欢迎附近上",
        "tingshi": "3室2厅1卫",
        "pingfang": 96,
        "chaoxiang": "南北向",
        "address": "东坝",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/9455eb7892efc178eac3eb8084863413?w=294&h=220&crop=1",
        "money": 7700
      },
      {
        "title": "元大都公园中日医院樱花园和平里东街爱琴海中医药大学院内两居室",
        "tingshi": "2室1厅1卫",
        "pingfang": 72,
        "chaoxiang": "南北向",
        "address": "惠新西街",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/d3520cdc6821413075d442ea55b7b20e?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "雅世合金公寓 2室1厅1卫 品质小区 格局方正",
        "tingshi": "2室1厅1卫",
        "pingfang": 70.85,
        "chaoxiang": "东向",
        "address": "田村",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/e64a0ab112809abce3540279c26b30f5?w=294&h=220&crop=1",
        "money": 8200
      },
      {
        "title": "前沙涧路7号院 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 85.75,
        "chaoxiang": "南北向",
        "address": "温泉",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v24900ce8bd2044f259159bc62b256df31.jpg?w=294&h=220&crop=1",
        "money": 3600
      },
      {
        "title": "优山美地 丽宫别墅 棕榈滩别墅 观湖景观豪装 私家温泉泳池",
        "tingshi": "5室3厅5卫",
        "pingfang": 500,
        "chaoxiang": "南北向",
        "address": "中央别墅区",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/e39cd3d4eecc4ab1f8fd93f66c2439e0?w=294&h=220&crop=1",
        "money": 30000
      },
      {
        "title": "交道口 中间楼层，南北通透二居室 可长租 看房随时",
        "tingshi": "2室1厅1卫",
        "pingfang": 56,
        "chaoxiang": "南北向",
        "address": "东直门",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/31f0b7a777fda2d999892534f80d79dc?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "阎村东地铁站-B1口 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南向",
        "address": "阎村",
        "coverUrl": "http://pic5.58cdn.com.cn/p1/small/n_v288cb1977ae1a413dadbacbd3ba0040c4.jpg?w=294&h=220&crop=1",
        "money": 1080
      },
      {
        "title": "望京西园三区 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 88,
        "chaoxiang": "西向",
        "address": "望京",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2a2964cf689424bbf99f2dc63063f12c3.jpg?w=294&h=220&crop=1",
        "money": 8500
      },
      {
        "title": "佳和宜园 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "西向",
        "address": "马坡",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v27c67b0a128d24fd392ce5af590c47d15.jpg?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "管庄地铁口距离地铁口100米，押一付一",
        "tingshi": "1室0厅1卫",
        "pingfang": 24,
        "chaoxiang": "南北向",
        "address": "管庄",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/f17fc6526c0bdf0a20cc9082254ab924?w=294&h=220&crop=1",
        "money": 2100
      },
      {
        "title": "鸿顺园西区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 84.7,
        "chaoxiang": "南向",
        "address": "良乡",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v237aa3147c317482fac5ca2706c42d487.jpg?w=294&h=220&crop=1",
        "money": 3000
      },
      {
        "title": "顺义 幸福东区临近地铁500米精装修拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 64,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/adef2fc4feb0ae6b868b1d7a158aa81c?w=294&h=220&crop=1",
        "money": 3400
      },
      {
        "title": "北京洋房 新出下叠带花园90平地下 私家车库 12000元",
        "tingshi": "4室2厅3卫",
        "pingfang": 220,
        "chaoxiang": "南北向",
        "address": "北七家",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/f266d41135d367d684ec62cbe2dae5aa?w=294&h=220&crop=1",
        "money": 12000
      },
      {
        "title": "颐源居三期 3室 16500元 南北通透",
        "tingshi": "3室2厅2卫",
        "pingfang": 267.07,
        "chaoxiang": "南北向",
        "address": "公主坟",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/1391fc1af9bae49ae742ed132236b434?w=294&h=220&crop=1",
        "money": 16500
      },
      {
        "title": "自主城135平复式 可办公居住  6300出租随时用房",
        "tingshi": "3室2厅2卫",
        "pingfang": 135,
        "chaoxiang": "南北向",
        "address": "十八里店",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/b481af2ebdcf470cb0d32974aa4cf3dc?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "阎村东地铁站-A1口 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "阎村",
        "coverUrl": "http://pic2.58cdn.com.cn/p1/small/n_v200d0cb48d4b5460bb10539986fee0f50.jpg?w=294&h=220&crop=1",
        "money": 850
      },
      {
        "title": "南郝庄村 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 25,
        "chaoxiang": "南向",
        "address": "城北",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v294b92b80148a4f3288a8b54650f1eb92.jpg?w=294&h=220&crop=1",
        "money": 800
      },
      {
        "title": "上东双子座(商住楼) 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 120.7,
        "chaoxiang": "东南向",
        "address": "酒仙桥",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v28ab5675cf3be4daab363c9a12156fd13.jpg?w=294&h=220&crop=1",
        "money": 18000
      },
      {
        "title": "后沙峪香蜜湾新出两居室，南北通透豪华装修。紧邻金地世家有钥匙",
        "tingshi": "2室2厅1卫",
        "pingfang": 93,
        "chaoxiang": "南北向",
        "address": "后沙峪",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/74167860426d2696dde7acd5599609d5?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "三里河精装两居室，小区环境好安静不临街拎包入住，财政部发改委",
        "tingshi": "2室1厅1卫",
        "pingfang": 77,
        "chaoxiang": "东南向",
        "address": "月坛",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/44a9d69a7da9d53950d5c42eee1b2d03?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "k2海棠湾两居 空房出租 集中供暖 看房随时",
        "tingshi": "2室1厅1卫",
        "pingfang": 83.65,
        "chaoxiang": "西北向",
        "address": "梨园",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/b6d4cbf6f04588bc65cd4b955d7ac11c?w=294&h=220&crop=1",
        "money": 5500
      },
      {
        "title": "南沙滩小区 临中科院 西奥 南沟泥河车站 精装一居 随时看",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南向",
        "address": "南沙滩",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/9b40829216a1f366e8546f2ce4ef29b9?w=294&h=220&crop=1",
        "money": 6000
      },
      {
        "title": "清秀园北区 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 34,
        "chaoxiang": "南向",
        "address": "昌平县城",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v27dcb50fc51034156a73252ba85420db7.jpg?w=294&h=220&crop=1",
        "money": 3000
      },
      {
        "title": "西红门 临近地铁站 精装修两居室 家具家电齐全 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 80,
        "chaoxiang": "南北向",
        "address": "西红门",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/e6009ce3d8e049322fb679810677f723?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "东关家园 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 22,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v2760b6de55fe742179cf9f16b7cf610fe.jpg?w=294&h=220&crop=1",
        "money": 900
      },
      {
        "title": "阿里巴巴 绿地中心 金辉 望京SOHO 精装修一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 84,
        "chaoxiang": "南向",
        "address": "望京",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/b5a9dd95e7b4896f629aa2e24d29f4e2?w=294&h=220&crop=1",
        "money": 11000
      },
      {
        "title": "太阳宫国展西坝河东里 便宜正规小三居 带电梯 看房方便有钥匙",
        "tingshi": "3室1厅1卫",
        "pingfang": 68,
        "chaoxiang": "南北向",
        "address": "西坝河",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/8103e67424a0ea0dca24dac29d2cced1?w=294&h=220&crop=1",
        "money": 7680
      },
      {
        "title": "双兴南区 北欧风装修 超值好房 精装卧室 南北通透",
        "tingshi": "1室1厅1卫",
        "pingfang": 47.19,
        "chaoxiang": "西向",
        "address": "顺义城区",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/2796ce95778d7b865e67f69ac1705327?w=294&h=220&crop=1",
        "money": 1930
      },
      {
        "title": "义宾北区 宜家风格 品质合租 南北向 出行方便",
        "tingshi": "1室1厅1卫",
        "pingfang": 49.6,
        "chaoxiang": "北向",
        "address": "顺义城区",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/e8710de640592f537b6ee71812d45de3?w=294&h=220&crop=1",
        "money": 2080
      },
      {
        "title": "瀛海家园开间，真实照片，业主直租，家具家电齐全，随时看房入住",
        "tingshi": "1室0厅1卫",
        "pingfang": 48,
        "chaoxiang": "南向",
        "address": "瀛海镇",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/799d819e3da27887b0fabd8eeb2c1a46?w=294&h=220&crop=1",
        "money": 2600
      },
      {
        "title": "五里坨社区，京西景园精装修一居室 看房方便有钥匙2700元",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南北向",
        "address": "五里坨",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/1abf7e314e8ed9e6f742f26e7414b7a4?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "旭辉26街区 2时 出行便利 南北通透采光好 地铁方便出",
        "tingshi": "1室1厅1卫",
        "pingfang": 48.4,
        "chaoxiang": "东向",
        "address": "石门",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/1bf7fd4b6c86483542dd7776f5333dfd?w=294&h=220&crop=1",
        "money": 2560
      },
      {
        "title": "公益西桥 枫竹苑豪华大别墅 上下四层 居家办公 诚心出租!",
        "tingshi": "4室4厅3卫",
        "pingfang": 280,
        "chaoxiang": "南向",
        "address": "马家堡",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/052f15c9f4f4e1dc3d1de4d0060e7e05?w=294&h=220&crop=1",
        "money": 24000
      },
      {
        "title": "昌平区 燕平家园 两居室 东西通透 看房方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 89.5,
        "chaoxiang": "东西向",
        "address": "昌平县城",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/3e1b26b7237c87e18c1fa4355f2437b8?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "东直门 豪华复式 独立厨卫 斗满江 东直门医院 簋街 来福士",
        "tingshi": "1室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "南向",
        "address": "东直门",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/56d3da6426b3f2ddccd5029278d613e2?w=294&h=220&crop=1",
        "money": 4800
      },
      {
        "title": "恒大领寓 2室2厅1卫",
        "tingshi": "2室2厅1卫",
        "pingfang": 100,
        "chaoxiang": "西向",
        "address": "豆各庄",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2b9a729cbd90c47068222101e94a0fe4f.jpg?w=294&h=220&crop=1",
        "money": 7600
      },
      {
        "title": "南北通透三居室 紧邻望京SOHO 双明卫设计 直观中国尊",
        "tingshi": "3室2厅2卫",
        "pingfang": 215,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/6cd2b5c8468db533548c60c5ce947cfd?w=294&h=220&crop=1",
        "money": 25000
      },
      {
        "title": "水科院内 精装修大一居带客厅 有钥匙 白石桥南站",
        "tingshi": "1室1厅1卫",
        "pingfang": 46.5,
        "chaoxiang": "东向",
        "address": "甘家口",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/811eb767b09e421228dbf9dcb2e322b4?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "世嘉博苑 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南北向",
        "address": "西红门",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v21dac2de682eb4c63970af4866fbc4d7d.jpg?w=294&h=220&crop=1",
        "money": 1800
      },
      {
        "title": "世界之花假日广场 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "东向",
        "address": "北京",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v20fec601ed35e4971b338767388eefac3.jpg?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "13号线两居龙跃苑三区婚房装修，钥匙看房提前电话",
        "tingshi": "2室1厅1卫",
        "pingfang": 106,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/b5e591f5f0a76eecfe0ec67a7e60d58e?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "方庄地铁 芳群园精装一居 可宿舍办公 交通便利 随时看房实图",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南向",
        "address": "方庄",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/90613718106f337e527846669fc7da37?w=294&h=220&crop=1",
        "money": 4999
      },
      {
        "title": "鲁谷万达 紫御长安 中铁建设大复式楼层高5.4米家具家电齐全",
        "tingshi": "2室2厅2卫",
        "pingfang": 110,
        "chaoxiang": "南向",
        "address": "鲁谷",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/2a7fa6a7266545ee600d9ae3bb12e609?w=294&h=220&crop=1",
        "money": 7300
      },
      {
        "title": "大河庄苑 中湾国际 稻香园芙蓉里精装一居室 中关村苏州街",
        "tingshi": "1室1厅1卫",
        "pingfang": 58,
        "chaoxiang": "南向",
        "address": "中关村",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/2d7c5f3d9309970330065b59dc644c2d?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "沙河公交站 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南北向",
        "address": "沙河",
        "coverUrl": "http://pic8.58cdn.com.cn/p1/small/n_v207985c4e4ee449ec905f49a42b36b375.jpg?w=294&h=220&crop=1",
        "money": 700
      },
      {
        "title": "启迪香山精装复试一居 房源真实 高楼层 采光好 观西山",
        "tingshi": "1室1厅1卫",
        "pingfang": 39,
        "chaoxiang": "北向",
        "address": "八大处",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/366c8eec56f5f949bb173c719dc4a45f?w=294&h=220&crop=1",
        "money": 5200
      },
      {
        "title": "梨园地铁附近 新城嘉园正规2居室 高楼层 阳光足 装修好",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "梨园",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/673e5debaf7cb92ba30884d0868b2f6a?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "支持月付 玉兰湾精装两居 冰点价 随时看房",
        "tingshi": "2室1厅1卫",
        "pingfang": 110,
        "chaoxiang": "南北向",
        "address": "九棵树",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/3a5310fb8f0c4546be6b054fe0e4e3c9?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "珠江峰景 3室2厅2卫",
        "tingshi": "3室2厅2卫",
        "pingfang": 130,
        "chaoxiang": "南向",
        "address": "青塔",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v2c139ec18413b4ff3bafa81aceb478168.jpg?w=294&h=220&crop=1",
        "money": 7900
      },
      {
        "title": "必租好房 精装修 家具家电齐全 地铁 房山线 仅有一套",
        "tingshi": "2室1厅1卫",
        "pingfang": 96,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/00d56a92a89d41f56ba311be1872d58c?w=294&h=220&crop=1",
        "money": 2800
      },
      {
        "title": "芍药居地铁站，太阳宫，樱花园，中日医院，中医药大学，对外经贸",
        "tingshi": "2室1厅1卫",
        "pingfang": 99.46,
        "chaoxiang": "南向",
        "address": "芍药居",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/8f028c0c92146371553eac5c1e0a5b40?w=294&h=220&crop=1",
        "money": 6800
      },
      {
        "title": "瑞雪春堂 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v27fc9c4efc7214243b459b7e7b30dedfc.jpg?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "业主急租!地铁国贸东恒时代三期 西南2室 精装修拎包入住",
        "tingshi": "2室2厅1卫",
        "pingfang": 106.99,
        "chaoxiang": "西南向",
        "address": "四惠",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/66cbafc7b459d75ede84937ca60a4136?w=294&h=220&crop=1",
        "money": 12000
      },
      {
        "title": "宏城花园 居住舒适，干净整洁， 随时入住，4000元",
        "tingshi": "4室1厅1卫",
        "pingfang": 104,
        "chaoxiang": "南北向",
        "address": "石门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/85b7dfc08b63c9f9539a5f025d013608?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "站前路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南北向",
        "address": "沙河",
        "coverUrl": "http://pic8.58cdn.com.cn/p1/small/n_v2445740e4752f407580e342f3c010097b.jpg?w=294&h=220&crop=1",
        "money": 700
      },
      {
        "title": "五方桥东朝丰家园南向一居 采光好 家具家电齐全，随时入住。",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "豆各庄",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/b0421328d48b2a9331a5b44d15193062?w=294&h=220&crop=1",
        "money": 3600
      },
      {
        "title": "水系小区   紧邻地铁站   装修好",
        "tingshi": "3室1厅1卫",
        "pingfang": 139.8,
        "chaoxiang": "西南向",
        "address": "方庄",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/7655425481e667324c65cd3ccaf2183c?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "西单 府右街 灵境胡同一居室5800 有暖气 有空调",
        "tingshi": "1室1厅1卫",
        "pingfang": 46,
        "chaoxiang": "南向",
        "address": "西单",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/17cf67510a541d3f6a83f56725b6f845?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "万科新里程 配套成熟 小区环境优美 交通便利 业主诚意出租",
        "tingshi": "3室1厅1卫",
        "pingfang": 102.58,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/f8f878117c5a4e26c03372f1d5ddf2bd?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "果园小区 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 46,
        "chaoxiang": "北向",
        "address": "木樨园",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2aad09908570448cca738b70f13dab3b9.jpg?w=294&h=220&crop=1",
        "money": 5000
      },
      {
        "title": "十里河华威桥美景东方小区大2居室精装修配套齐全四季园林有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 101,
        "chaoxiang": "东向",
        "address": "华威桥",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/4aeb483003ed1f583490ee7248b6ff61?w=294&h=220&crop=1",
        "money": 9500
      },
      {
        "title": "聚福苑新出大两居出租 可随时来电看房  随时住",
        "tingshi": "2室1厅1卫",
        "pingfang": 93,
        "chaoxiang": "南北向",
        "address": "定福庄",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/0d07526d4c5a678e3a7787e8a82ec2b7?w=294&h=220&crop=1",
        "money": 6600
      },
      {
        "title": "西红门路 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南向",
        "address": "同兴园",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2545048fc4eed4e449ef1b5cf3cf2eadc.jpg?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "纪家庙 君鼎国际 精装开间出租 首经贸 草桥 博人医院",
        "tingshi": "1室0厅1卫",
        "pingfang": 36,
        "chaoxiang": "南向",
        "address": "玉泉营",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/6693bd552946f4b08be52f3541ea136f?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "丰汇园精装一居室拎包入住看房方便",
        "tingshi": "1室1厅1卫",
        "pingfang": 50.3,
        "chaoxiang": "东向",
        "address": "金融街",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/1e408f92b3dc3321d91e2b9c7b54d9c7?w=294&h=220&crop=1",
        "money": 7700
      },
      {
        "title": "西直门，西城法院，新街口，志成，玉桃园，前桃园精装一居有钥匙",
        "tingshi": "1室1厅1卫",
        "pingfang": 48,
        "chaoxiang": "南向",
        "address": "西直门",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/81cd8aa3b1c77f3638a7a91b04ec7de3?w=294&h=220&crop=1",
        "money": 6800
      },
      {
        "title": "阎村东地铁站-B1口 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南向",
        "address": "阎村",
        "coverUrl": "http://pic5.58cdn.com.cn/p1/small/n_v288cb1977ae1a413dadbacbd3ba0040c4.jpg?w=294&h=220&crop=1",
        "money": 1080
      },
      {
        "title": "石园北区 3300元，业主直租，房源，看房方便",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "石园",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/8e2fc444e1dd04d088230bdabb68d73c?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "宋庄当代艺术园 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 23,
        "chaoxiang": "东西向",
        "address": "宋庄",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v203f21d9593f74b05bd3501e1da533138.jpg?w=294&h=220&crop=1",
        "money": 1500
      },
      {
        "title": "瀛海朗苑精装正规一居室 家电家具全齐 随时看房",
        "tingshi": "1室1厅1卫",
        "pingfang": 66,
        "chaoxiang": "南向",
        "address": "瀛海镇",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/446fad3ce31fe0c422e3e463bca58fe3?w=294&h=220&crop=1",
        "money": 3100
      },
      {
        "title": "京泉馨苑（业主直租）北坞嘉园 门头馨园 颐和园 附近两居",
        "tingshi": "2室2厅1卫",
        "pingfang": 80,
        "chaoxiang": "南北向",
        "address": "香山",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/3553131b3f02f5c8a6992e7259b1e284?w=294&h=220&crop=1",
        "money": 5500
      },
      {
        "title": "邦舍公寓直租无中介可短租押一付一直达望京三元桥东直门可短租",
        "tingshi": "1室1厅2卫",
        "pingfang": 31,
        "chaoxiang": "东向",
        "address": "机场",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/60aa79699eac32443a462999d02b88d1?w=294&h=220&crop=1",
        "money": 2778
      },
      {
        "title": "云翔嘉苑  精装租 家电齐全 拎包入住 交通方便门口 地铁",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南向",
        "address": "永定",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/a2c5e9b5c9ae7e3f911ccc0a16b34971?w=294&h=220&crop=1",
        "money": 2600
      },
      {
        "title": "梨园地铁精装修家具家电全齐看房方便有钥匙随时联系",
        "tingshi": "1室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "玉桥",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/70037718b433ce4350b45fd3fddc5bf3?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "黄村西里 便宜2居室 有钥匙 照片真实 随时看房 业主诚租",
        "tingshi": "2室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南北向",
        "address": "黄村",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/0850dede635457d229e9482214f9e343?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "海淀山后 凤凰岭北清路 苏家坨凤仪佳苑 电梯房",
        "tingshi": "2室1厅1卫",
        "pingfang": 85,
        "chaoxiang": "南北向",
        "address": "海淀周边",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/e7bb6cd6b9781bfa52111d80e5579db5?w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "朝阳公园燕莎霄云里八号华远九都汇 远洋公馆长租短租都可随时看",
        "tingshi": "1室1厅2卫",
        "pingfang": 75,
        "chaoxiang": "南向",
        "address": "三元桥",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/921f4958cb97ebfd2cec4f98fa43166c?w=294&h=220&crop=1",
        "money": 11500
      },
      {
        "title": "特价三居室，还带车位，西南北三项采光，温馨舒适，拎包入住！",
        "tingshi": "3室2厅2卫",
        "pingfang": 193,
        "chaoxiang": "南北向",
        "address": "朝阳公园",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/dfc35cf135a87a733c1456ed118a8c4c?w=294&h=220&crop=1",
        "money": 27000
      },
      {
        "title": "荣丰2008 二期复式 7号线 达官营",
        "tingshi": "1室1厅1卫",
        "pingfang": 32,
        "chaoxiang": "西向",
        "address": "广安门外",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/9f8ed161d4da672e98009efe88c585f5?w=294&h=220&crop=1",
        "money": 5900
      },
      {
        "title": "芍药居 惠新 太阳宫 家电家具齐全  紧邻地铁 对外经贸大学",
        "tingshi": "2室1厅1卫",
        "pingfang": 102,
        "chaoxiang": "南向",
        "address": "芍药居",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/7a0e71dd4549b3bf38a003e61814049e?w=294&h=220&crop=1",
        "money": 8500
      },
      {
        "title": "运河明珠家园 3室2厅1卫",
        "tingshi": "3室2厅1卫",
        "pingfang": 98,
        "chaoxiang": "南向",
        "address": "运河大街",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v2deb5ea56b7bc42b8aa9731241ba5c76f.jpg?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "通州土桥地铁 西区一层大三居 真实图片 物业取暖双包 随时看",
        "tingshi": "3室1厅1卫",
        "pingfang": 100,
        "chaoxiang": "南北向",
        "address": "土桥",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/1b04b0136eddaf265ab592de3b847c44?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "七里庄看丹桥 正阳北里永善里同盛里 拎包入住临近地铁集中供暖",
        "tingshi": "1室1厅1卫",
        "pingfang": 48,
        "chaoxiang": "南北向",
        "address": "北大地",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/bd5e92da112b34a8aa73fa9bbfbf25a7?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "紧邻地铁马家堡角门 星河苑 东亚三环东南向7600元城南嘉园",
        "tingshi": "2室1厅1卫",
        "pingfang": 90.99,
        "chaoxiang": "东向",
        "address": "马家堡",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/285ed0ac3d4d1fbb8fc79a4da6f1abb1?w=294&h=220&crop=1",
        "money": 7600
      },
      {
        "title": "世嘉博苑 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南北向",
        "address": "西红门",
        "coverUrl": "http://pic7.58cdn.com.cn/dwater/fang/small/n_v21dac2de682eb4c63970af4866fbc4d7d.jpg?w=294&h=220&crop=1",
        "money": 1800
      },
      {
        "title": "期颐百年 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 95.7,
        "chaoxiang": "南向",
        "address": "新发地",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v2204e744992d8447c9a083e2beb3841a1.jpg?w=294&h=220&crop=1",
        "money": 6300
      },
      {
        "title": "天宫院精装两居，价格便宜出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "生物医药基地",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/2b9ae13d0724e9773a6d222fd5e73a7e?w=294&h=220&crop=1",
        "money": 3900
      },
      {
        "title": "房山区长阳半岛3 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 28,
        "chaoxiang": "南向",
        "address": "世界公园",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2c960832bd3f5402482d851fb4599a710.jpg?w=294&h=220&crop=1",
        "money": 2008
      },
      {
        "title": "亦庄鹿海园一里 精装一居  奔驰公司 大族广场附近",
        "tingshi": "1室1厅1卫",
        "pingfang": 67.3,
        "chaoxiang": "南北向",
        "address": "亦庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/7778ccf6f8659f677330ad5da59f680b?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "牛山下坡屯一区，干净清爽2室 ，看房方便，3200元价格便宜",
        "tingshi": "2室1厅1卫",
        "pingfang": 89,
        "chaoxiang": "南北向",
        "address": "马坡",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/223b5dc5868c35a2b2eb54bdd7501d8c?w=294&h=220&crop=1",
        "money": 3200
      },
      {
        "title": "西八间北里 精装朝南一居 配套齐全 价格可谈 紧靠城铁阜通",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "花家地",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/21da4748c9a680a6c9d0d5d8b83f9779?w=294&h=220&crop=1",
        "money": 5800
      },
      {
        "title": "雍景双庐 新上好房 朝向好 视野棒 出门地铁西黄村 拎包住",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "东南向",
        "address": "古城",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/84dba561be92a9732b78c97fdd817d2f?w=294&h=220&crop=1",
        "money": 6750
      },
      {
        "title": "大兴区四号线精装三居 家具家电齐全 随时看房 品质有保障",
        "tingshi": "3室1厅2卫",
        "pingfang": 95,
        "chaoxiang": "南向",
        "address": "观音寺",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/e3ceea6887ddffdf2d2943bd91869578?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "四号线生物医药基地 绿地启航写字楼旁精装两居全齐出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 78,
        "chaoxiang": "西北向",
        "address": "生物医药基地",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/de999df00d5e46332f34661aad032164?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "中加福园 性价比高 临近超市 临近车站 拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 57,
        "chaoxiang": "西北向",
        "address": "密云城区",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/327fe0ff4c2dd763f23574808d0e5562?w=294&h=220&crop=1",
        "money": 1600
      },
      {
        "title": "津北街 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 96,
        "chaoxiang": "南向",
        "address": "顺义",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v264eccf54d4794d85a7623ffa60b51952.jpg?w=294&h=220&crop=1",
        "money": 2200
      },
      {
        "title": "亦庄大雄城市花园三居室，环境好，家具家电齐全，拎包入住",
        "tingshi": "3室1厅1卫",
        "pingfang": 275.3,
        "chaoxiang": "南北向",
        "address": "亦庄",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/81c5b17f86318bd98acbc50a7325c857?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "永利国际 1室1厅2卫",
        "tingshi": "1室1厅2卫",
        "pingfang": 58.34,
        "chaoxiang": "北向",
        "address": "三里屯",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v238e5daf2cf844795a5f09cfcc6ff26a1.jpg?w=294&h=220&crop=1",
        "money": 20000
      },
      {
        "title": "富力桃园同看强佑清河新城装修很不错的南北三居室房子有钥匙",
        "tingshi": "3室1厅2卫",
        "pingfang": 132.33,
        "chaoxiang": "南北向",
        "address": "西三旗",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/4ed5a26c74759400eb4da4b8c659f625?w=294&h=220&crop=1",
        "money": 9800
      },
      {
        "title": "星城北里 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 25,
        "chaoxiang": "南北向",
        "address": "阎村",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2355458386dc84faab2e093fa8111cbde.jpg?w=294&h=220&crop=1",
        "money": 800
      },
      {
        "title": "铁匠营新村 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "后沙峪",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v227ed6232940343dc801ae606b17462cd.jpg?w=294&h=220&crop=1",
        "money": 1200
      },
      {
        "title": "慧忠里小区 3室1厅1卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 71,
        "chaoxiang": "南北向",
        "address": "亚运村",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v26c24dda73cc6496bb2f1c77a3f796fdc.jpg?w=294&h=220&crop=1",
        "money": 9500
      },
      {
        "title": "嘉铭桐城E区 西南两居 干净整洁 温馨舒适 家具家电齐全",
        "tingshi": "2室2厅1卫",
        "pingfang": 111.3,
        "chaoxiang": "西南向",
        "address": "亚运村小营",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/f397c6b0f40447a0b35e38135174f129?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "世纪金色嘉园 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "北向",
        "address": "右安门",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2a416f606321a4fcf946c46f341756c0c.jpg?w=294&h=220&crop=1",
        "money": 5600
      },
      {
        "title": "马连道7号线湾子站格调正规大一居出租，业主自住房，手持出租",
        "tingshi": "1室1厅1卫",
        "pingfang": 72,
        "chaoxiang": "西向",
        "address": "马连道",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/6345a367ac4f3989ae287d7ba4e244f5?w=294&h=220&crop=1",
        "money": 7200
      },
      {
        "title": "育新花园小区  拎包入住 交通方便",
        "tingshi": "1室1厅1卫",
        "pingfang": 69,
        "chaoxiang": "南向",
        "address": "大兴周边",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/be545c4d60bcfe77056c2f465021314c?w=294&h=220&crop=1",
        "money": 1900
      },
      {
        "title": "知春路地铁口,碧兴园,锦秋知春,致真大厦,办公居家都行",
        "tingshi": "2室1厅1卫",
        "pingfang": 110,
        "chaoxiang": "南北向",
        "address": "知春路",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/3bd57f8aa6720a79a31ec542ba616eb8?w=294&h=220&crop=1",
        "money": 8500
      },
      {
        "title": "清华精装家属院 西庄 东庄精装大两居 价格 看房随时",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南向",
        "address": "清华大学",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/88c7059dce359fcee60ff1d343249424?w=294&h=220&crop=1",
        "money": 6800
      },
      {
        "title": "中关村 知春里 南向一居室 采光好 位置佳居家头条 长租",
        "tingshi": "1室1厅1卫",
        "pingfang": 38,
        "chaoxiang": "南向",
        "address": "双榆树",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/561651a10746dd5469c442f396a21517?w=294&h=220&crop=1",
        "money": 7200
      },
      {
        "title": "五道口 华清嘉园 中关村二小旁 精装修大三居有钥匙随时看",
        "tingshi": "3室2厅2卫",
        "pingfang": 165,
        "chaoxiang": "南北向",
        "address": "五道口",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/3c16d47f0027adf25ac4cf93a3d4019d?w=294&h=220&crop=1",
        "money": 21000
      },
      {
        "title": "芳星园一区  东南两居室 拎包入户 低于市场价 价格能谈",
        "tingshi": "2室1厅1卫",
        "pingfang": 64,
        "chaoxiang": "东南向",
        "address": "方庄",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/714875bd8e5a3485d57e638765e7daa0?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "凯旋大街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "良乡",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v249dcb97b22294d3296551fef785edd68.jpg?w=294&h=220&crop=1",
        "money": 1100
      },
      {
        "title": "北苑万达 天时名苑 南北通透三居室 家具家电齐全 随时看",
        "tingshi": "3室2厅2卫",
        "pingfang": 164.14,
        "chaoxiang": "南北向",
        "address": "通州北苑",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/4cc6cb50947e3429dac913f343b5bc17?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "朝阳 北苑 地铁13号线300米 明星楼盘 店长极力推荐",
        "tingshi": "1室1厅1卫",
        "pingfang": 65.66,
        "chaoxiang": "南向",
        "address": "北苑",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/b3e1b56db0387f8ef9df5fd4dffd8651?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "前进花园玉兰苑 专属服务 超值好房 设施齐全 地铁方便",
        "tingshi": "1室1厅1卫",
        "pingfang": 48.75,
        "chaoxiang": "西向",
        "address": "石门",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/26cf3c7fa3d86d703e61b6cceb945a98?w=294&h=220&crop=1",
        "money": 2730
      },
      {
        "title": "河滩 黑山公园 惠民家园 增产路 附近 中昂代两居出租",
        "tingshi": "2室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "西南向",
        "address": "城子街道 ",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/ea1e2b3f8cc87f12a5d0a8e5f9fb02e3?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "胜利小区 2时 出行便利 南北通透采光好 地铁方便出行",
        "tingshi": "1室1厅1卫",
        "pingfang": 49.92,
        "chaoxiang": "西向",
        "address": "胜利",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/fade6802b17039123d68a1a7dc7f69b1?w=294&h=220&crop=1",
        "money": 2430
      },
      {
        "title": "明春苑一居室，租户8月30号搬走，基本是空房，价格实惠",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南北向",
        "address": "高米店",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/178818b9dcfe68096152a0eacd5faef9?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "佳和宜园房间干净整洁家电齐全随时起租",
        "tingshi": "2室1厅1卫",
        "pingfang": 76,
        "chaoxiang": "南向",
        "address": "马坡",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/94582da166e51b4f89fd69013e4d2931?w=294&h=220&crop=1",
        "money": 2300
      },
      {
        "title": "城建琨廷，精装两居，次顶层，包物业取暖！",
        "tingshi": "2室1厅1卫",
        "pingfang": 87.7,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/4847b21a9359af99b1794652d9fda75b?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "城建琨廷，精装两居，集体供暖，干净好房，鼎力推.荐！",
        "tingshi": "2室2厅1卫",
        "pingfang": 88.9,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/6433e0978819bfbcfedfea557bba9a4c?w=294&h=220&crop=1",
        "money": 2800
      },
      {
        "title": "业主自住，头回出租，水墨林溪，精装两居，家具家电齐全！",
        "tingshi": "2室1厅1卫",
        "pingfang": 92,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/159c26fe76a224106c2c5b018b33e6c8?w=294&h=220&crop=1",
        "money": 2300
      },
      {
        "title": "北京像素北区 豪华复试南北两居室  家具齐全  带飘窗随时看",
        "tingshi": "2室2厅2卫",
        "pingfang": 123,
        "chaoxiang": "南北向",
        "address": "常营",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/0d392209dd93e6288f1cf0708d6b6773?w=294&h=220&crop=1",
        "money": 7000
      },
      {
        "title": "怡馨家园 3室1厅1卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 83.7,
        "chaoxiang": "西向",
        "address": "顺义城区",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v28f6f7bd833854a2d86667d2ae7513c4b.jpg?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "通州北关 新光大 侨商 精装开间 智能门锁 随时看",
        "tingshi": "1室1厅1卫",
        "pingfang": 42,
        "chaoxiang": "西北向",
        "address": "北关",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/256df5ba78c3e6604962b841790cb803?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "卢沟桥南里 押一月付 温馨舒适 南北通透采光好 离地铁近",
        "tingshi": "3室1厅1卫",
        "pingfang": 27.28,
        "chaoxiang": "南向",
        "address": "卢沟桥",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/69e6c1acb61f6fe778c9c18323e5e0da?w=294&h=220&crop=1",
        "money": 5510
      },
      {
        "title": "长丰园一区  总部基地一居室 家电齐全 交通便利 想租的抓紧",
        "tingshi": "1室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南北向",
        "address": "黄村",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/061ad9b5c46aac88a346f64d1611c53d?w=294&h=220&crop=1",
        "money": 3500
      },
      {
        "title": "民族学院南路7号院3居整租 民族大学 魏公村舞蹈学院随时入住",
        "tingshi": "3室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南向",
        "address": "魏公村",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/4d425e76d833409bb21295d0afb4ae0e?w=294&h=220&crop=1",
        "money": 9100
      },
      {
        "title": "公馆 紫君庭 可 可居家 空房出租 看房随时联系",
        "tingshi": "5室3厅4卫",
        "pingfang": 380,
        "chaoxiang": "南向",
        "address": "廊坊",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/5c63f23a7272760d9d7a54f9a3cf488c?w=294&h=220&crop=1",
        "money": 22000
      },
      {
        "title": "双榆树西里 业主直租 精装两居 出门人大地铁 双安 头条",
        "tingshi": "2室1厅1卫",
        "pingfang": 72,
        "chaoxiang": "南向",
        "address": "双榆树",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/93e48f18399fca0a889775910fd01115?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "六道口地铁旁，林业大学，矿业大学，清华东路27号院三居室合租",
        "tingshi": "3室1厅1卫",
        "pingfang": 88,
        "chaoxiang": "南北向",
        "address": "学院路",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/bf1732a1140e3193bbc552adac2cae78?w=294&h=220&crop=1",
        "money": 9000
      },
      {
        "title": "白庙村中街 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 20,
        "chaoxiang": "南向",
        "address": "霍营",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v26eb3302d067a49a5a41021cee69e3314.jpg?w=294&h=220&crop=1",
        "money": 800
      },
      {
        "title": "东亚上北中心 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 53.74,
        "chaoxiang": "北向",
        "address": "回龙观",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2f6124ceb7b0b4f92824c360405f2c003.jpg?w=294&h=220&crop=1",
        "money": 4800
      },
      {
        "title": "百嘉城 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 53,
        "chaoxiang": "北向",
        "address": "回龙观",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v261b205e50c0f4da5a7bbf3347deda859.jpg?w=294&h=220&crop=1",
        "money": 4300
      },
      {
        "title": "实图 达官营地铁天宁寺小红庙 白纸坊鸭子桥西乐城莲花晴园精装",
        "tingshi": "1室0厅1卫",
        "pingfang": 43,
        "chaoxiang": "北向",
        "address": "广安门内",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/9a9d0c2b020fb92b804063344bafab3b?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "铁东小区，精装一居，业主自住，长租，会城门公园，军博地铁站",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "东向",
        "address": "军博",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/59464ff3e025e9c485b5d67d7e5b72ae?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "城建琨廷精装三居 电梯入户 安全保障 品质小区 干净整洁",
        "tingshi": "3室2厅2卫",
        "pingfang": 114,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/fa1878ab01e03b1275d2bfe7b230c068?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "如意里 3室1厅1卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 73,
        "chaoxiang": "东西向",
        "address": "西直门",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v29d33aff36baa4778a3294c2d295f37ae.jpg?w=294&h=220&crop=1",
        "money": 9200
      },
      {
        "title": "人民日报社精装大三居 可员工居住 办公紧挨地铁6号 中央电台",
        "tingshi": "3室1厅1卫",
        "pingfang": 92,
        "chaoxiang": "南北向",
        "address": "红庙",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/af3c806f13e88949ec3becd251777748?w=294&h=220&crop=1",
        "money": 9500
      },
      {
        "title": "亚运村大屯 安慧北里逸园 秀园 雅园 安园 精装两居 采光好",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南向",
        "address": "大屯",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/990f70730099d647a2911f43773ab2f1?w=294&h=220&crop=1",
        "money": 8800
      },
      {
        "title": "香水城独栋大花园 精装地暖 看房方便 京承15口500米即到",
        "tingshi": "4室2厅3卫",
        "pingfang": 346,
        "chaoxiang": "南北向",
        "address": "怀柔城区",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/d323d6eb3cb8b401b8f1cc7d034e1a11?w=294&h=220&crop=1",
        "money": 13000
      },
      {
        "title": "白露雅园(东区) 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 97,
        "chaoxiang": "南北向",
        "address": "中央别墅区",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v29c1a824b3b1b4e869cff3bd8aa6fe2a7.jpg?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "太阳宫 太阳公元 南北通透  家具家电齐全 来看房随时喊我哈",
        "tingshi": "2室2厅1卫",
        "pingfang": 89,
        "chaoxiang": "南向",
        "address": "太阳宫",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/0b2ecc7a1f8001391bb9088487d3ddcf?w=294&h=220&crop=1",
        "money": 16500
      },
      {
        "title": "东亚首航国际 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 53,
        "chaoxiang": "东向",
        "address": "顺义城区",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2ea501720e8e749d386505ee837687262.jpg?w=294&h=220&crop=1",
        "money": 3600
      },
      {
        "title": "牡丹园 北太平庄 马甸月季园小区精装一居室 可月付 拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 55,
        "chaoxiang": "西向",
        "address": "北太平庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/e8eaf914541495842c253cff4900058c?w=294&h=220&crop=1",
        "money": 6550
      },
      {
        "title": "农光里小区一居室 精装修 双井 劲松 潘家园地铁",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南向",
        "address": "劲松",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/50c4a4e89b275de445bf37be34acf9a4?w=294&h=220&crop=1",
        "money": 5700
      },
      {
        "title": "南文昌胡同小区 1室0厅0卫",
        "tingshi": "1室0厅0卫",
        "pingfang": 15,
        "chaoxiang": "东向",
        "address": "西单",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v25ed3e11d7b154a12a5829dbdccfbf460.jpg?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "急租福成上上城六期 1550元 2室1厅1卫 精装修，家具家",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "南北向",
        "address": "燕郊",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/0d5435e42cd9da1659309c26fa767a09?w=294&h=220&crop=1",
        "money": 1550
      },
      {
        "title": "原香漫谷 干净两室两厅 包物业取暖 水费哦",
        "tingshi": "2室2厅1卫",
        "pingfang": 87,
        "chaoxiang": "南向",
        "address": "房山城关",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/252d4d659027c1e73f08bc464fab8ae1?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "澜西园二区 出租精装修2居室 双车位 拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 93,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/0cf279d46a94cf34621e049186084a49?w=294&h=220&crop=1",
        "money": 4500
      },
      {
        "title": "沁馥家园大三居室出租，低楼层集中供暖，家具家电齐全，拎包入住",
        "tingshi": "3室2厅1卫",
        "pingfang": 101,
        "chaoxiang": "南北向",
        "address": "窦店",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/9f106f1b0f99733d61c9416d20dd8203?w=294&h=220&crop=1",
        "money": 1700
      },
      {
        "title": "和平家园小区 2室2厅1卫",
        "tingshi": "2室2厅1卫",
        "pingfang": 91,
        "chaoxiang": "南北向",
        "address": "昌平县城",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v2f1acfd73eb1a43aba83bd185a703530b.jpg?w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "融域嘉园 2室 南北通透 109平 10500元",
        "tingshi": "2室1厅2卫",
        "pingfang": 109,
        "chaoxiang": "南北向",
        "address": "奥林匹克公园",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/7b21187e811f69a2238d83b6f84e437f?w=294&h=220&crop=1",
        "money": 10500
      },
      {
        "title": "六号线北关站新光大8B豪华精装修一居室自住品质随时看房入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 83,
        "chaoxiang": "东北向",
        "address": "北关",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/5ac930041e3c4f00a08b6e13869da741?w=294&h=220&crop=1",
        "money": 6500
      },
      {
        "title": "出门地铁 南顶村精装婚房 出租  抢先看",
        "tingshi": "2室1厅1卫",
        "pingfang": 75,
        "chaoxiang": "南向",
        "address": "石榴庄",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/ca4f3d6cffacef64c5803fc3a00e6882?w=294&h=220&crop=1",
        "money": 5200
      },
      {
        "title": "瑞祥里西区 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 57.06,
        "chaoxiang": "南北向",
        "address": "管庄",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v291793f8bc2d1455eae31d044384d8628.jpg?wt=%40%E6%9D%8E%E5%85%88%E7%94%9F&ws=71e7a9c0bbc29fe285032cb2a4d8d7cd&w=294&h=220&crop=1",
        "money": 3800
      },
      {
        "title": "新安里 2室1厅1卫",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南向",
        "address": "黄村",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v23c8f955f73264b79850fa40792fb4823.jpg?w=294&h=220&crop=1",
        "money": 3300
      },
      {
        "title": "润杰大厦，南环里电梯房，精装朝向西，万科商城对面，近地铁",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南北向",
        "address": "昌平县城",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/a817282b96978905696cd6d3884b28e6?w=294&h=220&crop=1",
        "money": 2550
      },
      {
        "title": "S1号地铁桥户营，小园地铁接6号线苹果园直达五路居精装一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 45,
        "chaoxiang": "南向",
        "address": "城子街道 ",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/9c978ad7ea15ebbd935e084329a45bb0?w=294&h=220&crop=1",
        "money": 2799
      },
      {
        "title": "顺义城区15号线地铁 建新南区一居室价格美丽能谈家具家电齐全",
        "tingshi": "1室1厅1卫",
        "pingfang": 35,
        "chaoxiang": "南北向",
        "address": "顺义城区",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/7405c05b3832fbd96487108fed37009c?w=294&h=220&crop=1",
        "money": 2700
      },
      {
        "title": "开元食府对面 精装全齐两居室 真实照片 随时看房有钥匙",
        "tingshi": "2室1厅1卫",
        "pingfang": 70,
        "chaoxiang": "南北向",
        "address": "长辛店",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/5c4a62f5105393b3981d3c1fd149d787?w=294&h=220&crop=1",
        "money": 3000
      },
      {
        "title": "东直门南向精装修，可居住可办公 随时看房",
        "tingshi": "1室1厅1卫",
        "pingfang": 80,
        "chaoxiang": "南向",
        "address": "东直门外",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/1b7caf291f86d0fa44e0b32b8b3ede7c?w=294&h=220&crop=1",
        "money": 10000
      },
      {
        "title": "杨宋梦想山东区，精装修，温馨两居室，电梯房，周边配套齐全",
        "tingshi": "2室1厅1卫",
        "pingfang": 86,
        "chaoxiang": "南北向",
        "address": "怀柔城区",
        "coverUrl": "http://pic4.58cdn.com.cn/anjuke_58/03e1f49a6a947335430264c49840debb?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "东直门商圈精装修可办公可居住，看房随时",
        "tingshi": "2室1厅2卫",
        "pingfang": 130,
        "chaoxiang": "西向",
        "address": "东直门外",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/6f2b7c4cd3a02583cda5d6829db89beb?w=294&h=220&crop=1",
        "money": 18000
      },
      {
        "title": "出租 学院路 六道口  农业大学家属院 精装急租",
        "tingshi": "2室1厅1卫",
        "pingfang": 65,
        "chaoxiang": "南向",
        "address": "学院路",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/511fe5183ef59bc8d880ecd20c2632d6?w=294&h=220&crop=1",
        "money": 5900
      },
      {
        "title": "五棵松 301 西翠芳庭精装电梯大三居 随时看房 随时入住",
        "tingshi": "3室1厅1卫",
        "pingfang": 120,
        "chaoxiang": "南北向",
        "address": "青塔",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/083fa88199712251e0c952f73f3d252d?w=294&h=220&crop=1",
        "money": 6700
      },
      {
        "title": "朝阳区独栋临大湖山庄新出二次新装修独栋有钥匙京西哈罗德威",
        "tingshi": "5室3厅5卫",
        "pingfang": 650,
        "chaoxiang": "南北向",
        "address": "来广营",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/aed5d56751b7175a3d03361dcda73975?w=294&h=220&crop=1",
        "money": 30000
      },
      {
        "title": "供给店村 3室2厅1卫",
        "tingshi": "3室2厅1卫",
        "pingfang": 300,
        "chaoxiang": "南向",
        "address": "漷县",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v2a00c036155aa4176962e6080a10e5dd5.jpg?wt=%40%E7%8E%8B%E6%96%87%E9%95%BF%E5%85%88%E7%94%9F&ws=508ff10f81ce0a78f72b95e38c5077b0&w=294&h=220&crop=1",
        "money": 2800
      },
      {
        "title": "郁花园三里 专属管家 品质合租 生活便利 南北通透",
        "tingshi": "3室1厅1卫",
        "pingfang": 16.94,
        "chaoxiang": "南向",
        "address": "高米店",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/e26df45804eeb6e7814fc0003e54c643?w=294&h=220&crop=1",
        "money": 2490
      },
      {
        "title": "回龙观领秀慧谷 南北两居 家具家电齐全 电梯房紧邻朱辛庄地铁",
        "tingshi": "2室1厅1卫",
        "pingfang": 82,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic1.58cdn.com.cn/anjuke_58/95eb944f38336235da18357bce15e601?w=294&h=220&crop=1",
        "money": 6000
      },
      {
        "title": "房山良乡，首开熙悦睿府书香，三室一厅一卫，南北向，明厨明卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 109,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic6.58cdn.com.cn/anjuke_58/76db59d20b791d9ed51896d8134af234?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "鑫兆佳园 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 18,
        "chaoxiang": "南向",
        "address": "定福庄",
        "coverUrl": "http://pic2.58cdn.com.cn/dwater/fang/small/n_v29a90e5f19f514e7bb9abf046a88983be.jpg?ws=54da12e10e5973552f3ef8bd5bb922c5&w=294&h=220&crop=1",
        "money": 1500
      },
      {
        "title": "中信新城西区 3室南北 144平 8500元 半齐全 有钥匙",
        "tingshi": "3室2厅2卫",
        "pingfang": 144.06,
        "chaoxiang": "南北向",
        "address": "瀛海镇",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/c777da2b68e6c20805745db6064753a8?w=294&h=220&crop=1",
        "money": 8500
      },
      {
        "title": "回龙观霍营 精装整租两居 8号13号线霍营地铁 包物业取暖",
        "tingshi": "2室1厅1卫",
        "pingfang": 80,
        "chaoxiang": "南北向",
        "address": "霍营",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/f8235619b00c2625d0a2e1d299d20736?w=294&h=220&crop=1",
        "money": 5200
      },
      {
        "title": "马连道湾子地铁站 世纪茶贸中心开间 可办公居住 随时看拎包住",
        "tingshi": "1室0厅1卫",
        "pingfang": 35,
        "chaoxiang": "北向",
        "address": "马连道",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/2a9b7457b88eabb9953436050ae651b3?w=294&h=220&crop=1",
        "money": 3700
      },
      {
        "title": "4号线 地铁旁 万科天地公园 只要3900 拎包入住",
        "tingshi": "2室1厅2卫",
        "pingfang": 88,
        "chaoxiang": "北向",
        "address": "观音寺",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/dbabaef03cd8cb2e9679ceb1144e4f9d?w=294&h=220&crop=1",
        "money": 3900
      },
      {
        "title": "S216(G110辅路) 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 26,
        "chaoxiang": "南向",
        "address": "西二旗",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2ba5caf317ccd4d558b4f4ce3b1fbbed1.jpg?w=294&h=220&crop=1",
        "money": 1000
      },
      {
        "title": "大开间 地铁13号线回龙观站 首开智慧社 龙腾苑附近",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南北向",
        "address": "回龙观",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/cfec134fb76e2167adf8babbe8b9d881?w=294&h=220&crop=1",
        "money": 4000
      },
      {
        "title": "南陈路 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 33,
        "chaoxiang": "南向",
        "address": "石门",
        "coverUrl": "http://pic3.58cdn.com.cn/dwater/fang/small/n_v2213adce03bfa4406bfef1e92fd96767d.jpg?w=294&h=220&crop=1",
        "money": 950
      },
      {
        "title": "出租一套两居室 空间利用性很强 南北通透 可随时看房！",
        "tingshi": "2室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "良乡",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/5c1a289a8d1f05edeb4fef69e18d666c?w=294&h=220&crop=1",
        "money": 2200
      },
      {
        "title": "朝阳公园（枣营北里）精装开间 蓝色港湾 好运姐 燕莎",
        "tingshi": "1室0厅1卫",
        "pingfang": 49,
        "chaoxiang": "南向",
        "address": "麦子店",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/b88c758bd1ff3173f11796aefc4a6a24?w=294&h=220&crop=1",
        "money": 4999
      },
      {
        "title": "出租七棵树出口东五环东坝和悦园东湾嘉园金泽金驹家园一居室",
        "tingshi": "1室1厅1卫",
        "pingfang": 80,
        "chaoxiang": "南向",
        "address": "东坝",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/48391c80c3aea9a182a649f9a75400ce?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "云岗北区西里，2层一室一厅出租，实拍照片",
        "tingshi": "1室1厅1卫",
        "pingfang": 40,
        "chaoxiang": "南北向",
        "address": "云岗",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/0d32710afb20d27ffe0dd4c5a1020b2b?w=294&h=220&crop=1",
        "money": 2100
      },
      {
        "title": "家电齐全，火爆招租，拎包入住",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "土桥",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/c96c36599c530e11472a3e9e18382a29?w=294&h=220&crop=1",
        "money": 1800
      },
      {
        "title": "中央音乐学院 西便门东里 精装修两居室 家电齐全",
        "tingshi": "2室1厅1卫",
        "pingfang": 68,
        "chaoxiang": "东西向",
        "address": "西便门",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/6ae4bba807f8cb372f45a44285c177b7?w=294&h=220&crop=1",
        "money": 7300
      },
      {
        "title": "竹园，两居精装，家具齐全，拎包入住",
        "tingshi": "2室1厅1卫",
        "pingfang": 61.7,
        "chaoxiang": "南北向",
        "address": "马连洼",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/472254909fa5c2f47ad4346cb2182ae1?w=294&h=220&crop=1",
        "money": 7000
      },
      {
        "title": "天赐良园北区 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 40.37,
        "chaoxiang": "北向",
        "address": "物资学院路",
        "coverUrl": "http://pic6.58cdn.com.cn/dwater/fang/small/n_v2a9753ce953e24e029ae96d3639065aaa.jpg?w=294&h=220&crop=1",
        "money": 2500
      },
      {
        "title": "商通大道 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 40.3,
        "chaoxiang": "南北向",
        "address": "物资学院路",
        "coverUrl": "http://pic8.58cdn.com.cn/dwater/fang/small/n_v2ea80edf9884047e29e5b5128c149ee94.jpg?w=294&h=220&crop=1",
        "money": 2000
      },
      {
        "title": "新出业主精装1居1卫 悦澜水岸家园翠福园金地格林格林8080",
        "tingshi": "1室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南向",
        "address": "北关",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/139c918ca79f7394c5af6a661db4377d?w=294&h=220&crop=1",
        "money": 3100
      },
      {
        "title": "首开康乃馨城 3室1厅1卫",
        "tingshi": "3室1厅1卫",
        "pingfang": 88,
        "chaoxiang": "南向",
        "address": "枣园",
        "coverUrl": "http://pic5.58cdn.com.cn/dwater/fang/small/n_v2b257d709accd4cd09588ba4ac437ccc8.jpg?w=294&h=220&crop=1",
        "money": 4200
      },
      {
        "title": "瑞平家园香江北岸两居望京来广营紧邻14号线善各庄15线马泉营",
        "tingshi": "2室2厅1卫",
        "pingfang": 80,
        "chaoxiang": "南北向",
        "address": "来广营",
        "coverUrl": "http://pic8.58cdn.com.cn/anjuke_58/4ac151f841a5d122e381b3f9e195a0b2?w=294&h=220&crop=1",
        "money": 5000
      },
      {
        "title": "加州水郡东南北向大三居拎包入住",
        "tingshi": "3室2厅2卫",
        "pingfang": 147,
        "chaoxiang": "南北向",
        "address": "长阳",
        "coverUrl": "http://pic5.58cdn.com.cn/anjuke_58/f65f49d6ae4730fd99598d4894bbce9d?w=294&h=220&crop=1",
        "money": 5000
      },
      {
        "title": "望京SOHO附近，西园一区，地铁望京站，望京东站，阿里巴巴",
        "tingshi": "3室1厅1卫",
        "pingfang": 90,
        "chaoxiang": "南北向",
        "address": "望京",
        "coverUrl": "http://pic2.58cdn.com.cn/anjuke_58/d165b21e4a3fcfd5fe195a302d2159e5?w=294&h=220&crop=1",
        "money": 8000
      },
      {
        "title": "月坛 南礼士路 儿童医院  精装1居室 可以短租半年",
        "tingshi": "1室1厅1卫",
        "pingfang": 50,
        "chaoxiang": "南向",
        "address": "月坛",
        "coverUrl": "http://pic3.58cdn.com.cn/anjuke_58/591cd92a938b6bc020b79cfa3bf7da5a?w=294&h=220&crop=1",
        "money": 6200
      },
      {
        "title": "长远天地 3室1厅0卫",
        "tingshi": "3室1厅0卫",
        "pingfang": 272,
        "chaoxiang": "西向",
        "address": "中关村",
        "coverUrl": "http://pic1.58cdn.com.cn/dwater/fang/small/n_v2b8a02a8f5b7243d8b04426a86007c8d2.jpg?w=294&h=220&crop=1",
        "money": 50000
      },
      {
        "title": "宋家庄地铁 美高梅公馆智能家居 品质社区 独立管家 品质生活",
        "tingshi": "3室2厅1卫",
        "pingfang": 170,
        "chaoxiang": "南北向",
        "address": "刘家窑",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/42cb032ff65ee2142328c64c820c9634?w=294&h=220&crop=1",
        "money": 15000
      },
      {
        "title": "航天部 精装修 两居室 长租 随时看房 工商 海总",
        "tingshi": "2室1厅1卫",
        "pingfang": 60,
        "chaoxiang": "南向",
        "address": "甘家口",
        "coverUrl": "http://pic7.58cdn.com.cn/anjuke_58/7a18c643bf693d6f0baba789ab32355f?w=294&h=220&crop=1",
        "money": 7500
      },
      {
        "title": "马池口镇楼自庄村民委员会 1室0厅1卫",
        "tingshi": "1室0厅1卫",
        "pingfang": 21,
        "chaoxiang": "南北向",
        "address": "昌平",
        "coverUrl": "http://pic1.58cdn.com.cn/p1/small/n_v20065fb9a0f4f4d219edacd51c34bd73c.jpg?w=294&h=220&crop=1",
        "money": 650
      },
      {
        "title": "广馨居 1室1厅1卫",
        "tingshi": "1室1厅1卫",
        "pingfang": 41.37,
        "chaoxiang": "南北向",
        "address": "双井",
        "coverUrl": "http://pic4.58cdn.com.cn/dwater/fang/small/n_v27754542a94e840eb9e486f46ce99edd4.jpg?w=294&h=220&crop=1",
        "money": 4030
      }
    ]
    return d
}
